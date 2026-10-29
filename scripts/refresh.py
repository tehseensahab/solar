#!/usr/bin/env python3
"""Monthly state data refresh. See editorial/REFRESH.md.

  python3 scripts/refresh.py check            # is there a new EIA release? (cheap; exit 0 either way)
  python3 scripts/refresh.py apply            # download Table 5.6.A, update data + prose + calculators
  python3 scripts/refresh.py apply --xlsx F   # use a file you already downloaded
  python3 scripts/refresh.py audit            # ranking/comparison claims and stale month labels to re-read
  python3 scripts/refresh.py due [--days 30]  # states whose policy text needs a recheck, and why

`apply` never touches policy text. It sets `refreshed:` on every state file whose
EIA numbers changed. `due` and `audit` only print; read their output and edit by hand.
"""
import argparse, datetime, glob, os, re, subprocess, sys, tempfile

for extra in ("/usr/local/lib/python3.13/dist-packages",):
    if os.path.isdir(extra) and extra not in sys.path:
        sys.path.append(extra)
import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PRICES = os.path.join(ROOT, "data/eia_prices.yaml")
STATES = sorted(glob.glob(os.path.join(ROOT, "data/states/*.yaml")))
POSTS = sorted(glob.glob(os.path.join(ROOT, "content/posts/*-electricity-rate-changes-2026/index.md")))
CALC_PAGES = [os.path.join(ROOT, "content", n) for n in
              ("solar-payback-calculator.md", "solar-system-size-calculator.md", "ev-charger-calculator.md")]
EPM_URL = "https://www.eia.gov/electricity/monthly/"
XLSX_URL = "https://www.eia.gov/electricity/monthly/xls/table_5_06_a.xlsx"
MONTH = r"(?:January|February|March|April|May|June|July|August|September|October|November|December) \d{4}"
DATE = r"(?:January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}"


def read(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


def write(p, t):
    with open(p, "w", encoding="utf-8") as f:
        f.write(t)


def sh(*a):
    return subprocess.run(a, check=True, capture_output=True, text=True).stdout


def latest_release():
    html = sh("curl", "-sS", "--max-time", "60", EPM_URL)
    text = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", html))
    m = re.search(rf"Data for ({MONTH}) Release Date: ({DATE})", text)
    if not m:
        sys.exit("Could not read the release from " + EPM_URL + " (use WebFetch and pass --xlsx)")
    return m.group(1), datetime.datetime.strptime(m.group(2), "%B %d, %Y").date()


def current():
    return yaml.safe_load(read(PRICES))


def cmd_check(_):
    month, rel = latest_release()
    cur = current()
    if month == cur["month"]:
        print(f"NO_NEW_RELEASE: EIA latest is {month} (released {rel}); repo already has it.")
    else:
        print(f"NEW_RELEASE: EIA has {month} (released {rel}); repo has {cur['month']}.")


def parse_table(path):
    import openpyxl
    ws = openpyxl.load_workbook(path, data_only=True).active
    rows = list(ws.iter_rows(values_only=True))
    title = " ".join(str(r[0]) for r in rows[:3] if r[0])
    m = re.search(r"by State, (\w+ \d{4}) and (\d{4})", title)
    if not m:
        sys.exit("Unrecognised table title: " + title)
    month = m.group(1)
    prev = month.split()[0] + " " + m.group(2)
    data = {}
    for r in rows:
        if isinstance(r[0], str) and isinstance(r[1], (int, float)) and isinstance(r[2], (int, float)):
            data[r[0].strip()] = (r[1], r[2])
    return month, prev, data


def slug(n):
    return n.lower().replace(" ", "-")


def calc_table(rate):
    """Default-input payback figures for the payback calculator page (mirrors static/js/calculators.js)."""
    d = yaml.safe_load(read(os.path.join(ROOT, "data/calculators.yaml")))
    kw, ppw, prod = 7, d["price_per_watt"], d["production_per_kw"]
    deg, g0, years = d["degradation"] / 100, d["rate_growth"] / 100, d["years"]
    self_use, exp = d["self_use"] / 100, d["export_rate"] / 100
    net = kw * 1000 * ppw

    def run(mode, g):
        cum, pb, first = -net, None, None
        for t in range(1, years + 1):
            made = kw * prod * (1 - deg) ** (t - 1)
            r = rate * (1 + g) ** (t - 1)
            s = made * r if mode == "nem" else made * self_use * r + made * (1 - self_use) * exp * (1 + g) ** (t - 1)
            first = first if first is not None else s
            b, cum = cum, cum + s
            if pb is None and cum >= 0:
                pb = t - 1 + (-b / s)
        return first, pb, cum

    out = {}
    for mode in ("nem", "nb"):
        f, p2, n2 = run(mode, g0)
        _, p0, n0 = run(mode, 0)
        out[mode] = (f, net / f, p2, p0, n2, n0)
    return out


def cmd_apply(a):
    cur = current()
    if a.xlsx:
        path = a.xlsx
    else:
        d = tempfile.mkdtemp(prefix="eia_")
        path = os.path.join(d, "t.xlsx")
        sh("curl", "-sS", "--fail", "--max-time", "120", "-o", path, XLSX_URL)
    month, prev, data = parse_table(path)
    if month == cur["month"]:
        sys.exit(f"NO_NEW_RELEASE: table is {month}, repo already has it. Nothing changed.")
    slugs = list(cur["states"])
    missing = [s for s in slugs if not any(slug(n) == s for n in data)] + (["u.s."] if "U.S. Total" not in data else [])
    if missing:
        sys.exit("Table is missing: " + ", ".join(missing) + ". Do not partially update; notify the owner.")
    if a.released:
        rel = datetime.date.fromisoformat(a.released)
    else:
        m2, rel = latest_release()
        if m2 != month:
            sys.exit(f"Index says {m2} but table says {month}; pass --released YYYY-MM-DD")
    rel_long = f"{rel:%B} {rel.day}, {rel.year}"
    old_us, old_month, old_prev = cur["us"]["y2026"], cur["month"], cur["prev_month"]

    t = read(PRICES)
    us = data["U.S. Total"]
    t = re.sub(r"^us: .*$", f'us: {{y2026: "{us[0]:.2f}", y2025: "{us[1]:.2f}"}}', t, flags=re.M)
    changed = []
    for name, (v, p) in data.items():
        s = slug(name)
        if s not in cur["states"]:
            continue
        line = (f'  {s}: {{y2026: "{v:.2f}", y2025: "{p:.2f}", change: "{(v / p - 1) * 100:+.1f}%", '
                f'bill: "${v * 10:.2f}"}}')
        t, n = re.subn(rf"^  {s}: \{{.*\}}$", line, t, flags=re.M)
        assert n == 1, s
        if cur["states"][s]["y2026"] != f"{v:.2f}" or cur["states"][s]["y2025"] != f"{p:.2f}":
            changed.append(s)
    lines = t.split("\n")
    lines[1] = f"# {month} and {prev}, released {rel_long}. Preliminary estimates."
    t = "\n".join(lines)
    t = re.sub(r'^month: "[^"]*"', f'month: "{month}"', t, flags=re.M)
    t = re.sub(r'^prev_month: "[^"]*"', f'prev_month: "{prev}"', t, flags=re.M)
    t = re.sub(r"^released: \S+", f"released: {rel.isoformat()}", t, flags=re.M)
    write(PRICES, t)
    new = current()

    # refreshed: on every state whose numbers changed
    today = a.today or datetime.date.today().isoformat()
    for s in changed:
        p = os.path.join(ROOT, f"data/states/{s}.yaml")
        write(p, re.sub(r"^refreshed: .*$", f"refreshed: {today}", read(p), count=1, flags=re.M))

    # hub post prose
    pat = re.compile(rf"puts (.+?)'s average residential price at [\d.]+¢/kWh in {MONTH}, (?:up|down) [\d.]+% from "
                     rf"[\d.]+¢ in {MONTH}\. The U\.S\. average was [\d.]+¢\. At 1,000 kWh that works out to "
                     rf"\$[\d.,]+ \(1,000 × [\d.]+¢\)\.")
    src = re.compile(rf"\({MONTH} data, released {DATE}\)")
    for f in POSTS:
        s = f.split("/")[-2].replace("-electricity-rate-changes-2026", "")
        e = new["states"][s]
        body = read(f)

        def r(m):
            d = "up" if e["change"].startswith("+") else "down"
            return (f"puts {m.group(1)}'s average residential price at {e['y2026']}¢/kWh in {month}, {d} "
                    f"{e['change'][1:-1]}% from {e['y2025']}¢ in {prev}. The U.S. average was {new['us']['y2026']}¢. "
                    f"At 1,000 kWh that works out to {e['bill']} (1,000 × {e['y2026']}¢).")
        body, n1 = pat.subn(r, body)
        body, n2 = src.subn(f"({month} data, released {rel_long})", body)
        if n1 != 1 or n2 != 1:
            print(f"WARN {os.path.relpath(f, ROOT)}: context paragraph replaced {n1}x, source line {n2}x (expected 1/1)")
        write(f, body)

    # calculator pages
    new_us = new["us"]["y2026"]
    for f in CALC_PAGES:
        body = read(f)
        body = re.sub(rf"residential average, {MONTH} \(preliminary\)", f"residential average, {month} (preliminary)", body)
        body = re.sub(rf"{MONTH} data, released {DATE}", f"{month} data, released {rel_long}", body)
        body = body.replace(f"{old_us}¢", f"{new_us}¢")
        body = re.sub(rf"average price for {MONTH} \(", f"average price for {month} (", body)
        body = re.sub(rf"that state's {MONTH} EIA average", f"that state's {month} EIA average", body)
        r_ = float(new_us) / 100
        if f.endswith("ev-charger-calculator.md"):
            cost = 12 * r_
            body = re.sub(r"12\.0 × 0\.\d+ = \$\d+\.\d{2}, or \$\d+\.\d{3} per mile",
                          f"12.0 × {r_:.4f} = ${cost:.2f}, or ${cost / 40:.3f} per mile", body)
            body = re.sub(r"at [\d.]+¢ per kWh is about \$\d+\.\d{2}", f"at {new_us}¢ per kWh is about ${cost:.2f}", body)
        if f.endswith("solar-payback-calculator.md"):
            tb = calc_table(r_)
            (f1, sp1, p21, p01, n21, n01), (f2, sp2, p22, p02, n22, n02) = tb["nem"], tb["nb"]
            rows = {
                "First-year savings": (f"${f1:,.0f}", f"${f2:,.0f}"),
                "Simple payback": (f"{sp1:.1f} years", f"{sp2:.1f} years"),
                "Payback with 2% rate growth": (f"{p21:.1f} years", f"{p22:.1f} years"),
                "Payback with 0% rate growth": (f"{p01:.1f} years", f"{p02:.1f} years"),
                "25-year net gain, 2% rate growth": (f"${n21:,.0f}", f"${n22:,.0f}"),
                "25-year net gain, 0% rate growth": (f"${n01:,.0f}", f"${n02:,.0f}"),
            }
            for label, (x, y) in rows.items():
                body, n = re.subn(rf"^\| {re.escape(label)} \| [^|]+ \| [^|]+ \|$", f"| {label} | {x} | {y} |", body, flags=re.M)
                if n != 1:
                    print(f"WARN payback table row not found: {label}")
        write(f, body)

    print(f"Updated {old_month} -> {month}: US {old_us} -> {new_us}¢; {len(changed)} state files refreshed={today}.")
    print("Next: run `audit`, then `due`, then build (hugo --minify) and spot-check the 3 biggest movers.")
    movers = sorted(new["states"].items(), key=lambda kv: -abs(float(kv[1]["change"][:-1])))[:3]
    print("Biggest moves:", ", ".join(f"{k} {v['change']}" for k, v in movers))


def cmd_audit(_):
    cur = current()
    st = cur["states"]
    val = {k: float(v["y2026"]) for k, v in st.items()}
    chg = {k: float(v["change"][:-1]) for k, v in st.items()}
    us = float(cur["us"]["y2026"])
    order = sorted(val, key=val.get)
    print(f"== Facts for {cur['month']} ==")
    print("Lowest 5 :", ", ".join(f"{k} {val[k]}" for k in order[:5]))
    print("Highest 5:", ", ".join(f"{k} {val[k]}" for k in order[-5:][::-1]))
    dec = sorted((k for k in chg if chg[k] < 0), key=chg.get)
    print(f"Decliners ({len(dec)}):", ", ".join(f"{k} {chg[k]:+.1f}%" for k in dec))
    print(f"US {us}; states above US: {sum(v > us for v in val.values())}; below: {sum(v < us for v in val.values())}")
    print("\n== Sentences that rank or compare (re-read each against the facts above) ==")
    words = re.compile(r"lowest|highest|cheapest|priciest|costliest|most expensive|only (?:a few|one|state)|one of (?:only|the|\w+ states)|"
                       r"rank|double|times|\d+% (?:above|below|higher|lower)|close to|well (?:above|below|under|over)|"
                       r"among the|second|third|decline|\bfell\b|\brose\b", re.I)
    for p in STATES:
        d = yaml.safe_load(read(p))
        s = d["slug"]
        for field in ("summary", "rate_note", "solar", "meaning"):
            txt = " ".join(str(d.get(field, "")).split())
            for sent in re.split(r"(?<=[.;]) ", txt):
                if words.search(sent) and ("{" in sent or re.search(r"\d+\.\d+¢|\d+%", sent) or field == "summary"):
                    print(f"[{s}.{field}] ({val[s]}¢, {chg[s]:+.1f}%) {sent[:240]}")
    print("\n== Stale month labels (outside dated articles) ==")
    old = re.compile(rf"\b(?:EIA|Electric Power Monthly|Table 5\.6\.A)[^\n]{{0,80}}{MONTH}|{MONTH}[^\n]{{0,60}}(?:EIA|preliminary)")
    ignore = set(l.strip() for l in read(os.path.join(ROOT, "scripts/refresh_ignore.txt")).splitlines()
                 if l.strip() and not l.startswith("#")) if os.path.exists(os.path.join(ROOT, "scripts/refresh_ignore.txt")) else set()
    for base in ("content", "layouts", "static/js", "data"):
        for dp, _, fs in os.walk(os.path.join(ROOT, base)):
            for fn in fs:
                p = os.path.join(dp, fn)
                rel = os.path.relpath(p, ROOT)
                if not fn.endswith((".md", ".html", ".js", ".yaml")) or any(rel.startswith(i) for i in ignore):
                    continue
                for n, line in enumerate(read(p).splitlines(), 1):
                    for m in old.finditer(line):
                        if cur["month"] not in m.group(0):
                            print(f"{rel}:{n}: {m.group(0)[:120]}")
                            break


def cmd_due(a):
    today = datetime.date.fromisoformat(a.today) if a.today else datetime.date.today()
    print(f"== Policy recheck candidates (today {today}) ==")
    dpat = re.compile(DATE)
    n_due = 0
    for p in STATES:
        d = yaml.safe_load(read(p))
        checked = d.get("policy_checked") or d.get("refreshed")
        checked = datetime.date.fromisoformat(str(checked))
        reasons = []
        if (today - checked).days > a.days:
            reasons.append(f"policy last checked {checked} (> {a.days} days)")
        for w in d.get("watch") or []:
            wd = datetime.date.fromisoformat(str(w["date"]))
            if wd <= today:
                reasons.append(f"watch {wd}: {w['what']}")
        blob = " ".join(str(d.get(k, "")) for k in ("utilities", "net_metering", "meaning", "solar", "rate_note", "summary"))
        future = []
        for m in dpat.finditer(blob):
            dt = datetime.datetime.strptime(m.group(0), "%B %d, %Y").date()
            ctx = blob[max(0, m.start() - 90):m.end() + 30].lower()
            if checked < dt <= today and re.search(r"expect|due|vote|hearing|decision|deadline|effective|takes effect|by ", ctx):
                future.append(m.group(0))
        if future:
            reasons.append("dates passed since last check: " + ", ".join(sorted(set(future))))
        if reasons:
            n_due += 1
            print(f"- {d['slug']}: " + "; ".join(reasons))
    print(f"\n{n_due} of {len(STATES)} states due." + (" Nothing to recheck: skip Step 2." if not n_due else ""))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sp = ap.add_subparsers(dest="cmd", required=True)
    sp.add_parser("check").set_defaults(f=cmd_check)
    x = sp.add_parser("apply")
    x.add_argument("--xlsx")
    x.add_argument("--released", help="YYYY-MM-DD, if the index page can't be read")
    x.add_argument("--today")
    x.set_defaults(f=cmd_apply)
    sp.add_parser("audit").set_defaults(f=cmd_audit)
    d = sp.add_parser("due")
    d.add_argument("--days", type=int, default=30)
    d.add_argument("--today")
    d.set_defaults(f=cmd_due)
    a = ap.parse_args()
    a.f(a)


if __name__ == "__main__":
    main()
