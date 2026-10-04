#!/usr/bin/env python3
"""Fetch cover images for posts from Unsplash.

The access key is read from the UNSPLASH_ACCESS_KEY environment variable and is
never printed or written to disk.

Workflow (the script never picks a photo itself; a human or reviewing agent looks
at the previews first):

  scripts/fetch-covers.py search <slug> [--variant N | --query "..."]
      Search, filter and download the top 3 candidates as 1600px previews into
      the temp folder, then print their ids and credits.

  scripts/fetch-covers.py apply <slug> <photo-id> --alt "One plain sentence."
      Register the download with Unsplash, save content/posts/<slug>/cover.jpg
      (2400px) and add imageAlt / imageCredit to the post's front matter.

  scripts/fetch-covers.py status
      Show which slugs have covers, remaining rate limit and used photo ids.

Slugs that already have cover.jpg are skipped, so reruns resume where they
stopped. A photo is never reused across posts. If the hourly rate limit gets
low the script stops cleanly; rerun after it resets.
"""
import argparse
import json
import os
import re
import sys
from pathlib import Path

import requests

API = "https://api.unsplash.com"
ROOT = Path(__file__).resolve().parent.parent
POSTS = ROOT / "content" / "posts"
TMP = Path(os.environ.get("COVER_TMP", "/tmp/solar-covers"))
STATE = TMP / "state.json"
LOW_WATER = 5  # stop when fewer requests than this remain this hour

# slug -> [primary query, optional variants...]
QUERIES = {
    "california-electricity-rate-changes-2026": ["rooftop solar panels suburban house"],
    "florida-electricity-rate-changes-2026": ["solar panels house palm trees"],
    "illinois-electricity-rate-changes-2026": ["solar panels house roof"],
    "massachusetts-electricity-rate-changes-2026": ["solar panels house new england"],
    "michigan-electricity-rate-changes-2026": ["solar panels house winter"],
    "new-jersey-electricity-rate-changes-2026": ["solar panels suburban neighborhood aerial"],
    "new-york-electricity-rate-changes-2026": ["solar panels city rooftop"],
    "ohio-electricity-rate-changes-2026": ["solar panels brick house"],
    "pennsylvania-electricity-rate-changes-2026": ["solar panels row houses"],
    "texas-electricity-rate-changes-2026": ["solar panels ranch house"],
    "net-metering-state-guide": ["electric meter house exterior"],
    "enphase-iq8-review": ["microinverter solar panel roof"],
    "panel-degradation-warranty-report": ["solar panels close up"],
    "battery-sizing-guide": ["home battery wall garage"],
    "community-solar-subscription-report": ["solar farm field"],
    "treasury-itc-guidance": ["US Treasury building Washington"],
    "oge-files-oklahoma-rate-case-2026": ["utility pole power lines"],
    "eia-residential-price-forecast-sept-2026": ["electricity transmission lines sunset"],
    "columbia-missouri-electric-rates-october-2026": ["utility lineman pole"],
    "energysage-h1-2026-solar-market-report": ["solar installer roof"],
    "north-carolina-electricity-rate-changes-2026": ["solar panels house roof"],
    "solar-payback-period-without-federal-tax-credit": ["calculator bills desk"],
}

BANNED = re.compile(r"\b(ai[- ]generated|illustrations?|vector|render(?:ed|ing|s)?|3d)\b", re.I)


class RateLimited(Exception):
    pass


def key():
    k = os.environ.get("UNSPLASH_ACCESS_KEY")
    if not k:
        sys.exit("UNSPLASH_ACCESS_KEY is not set in the environment.")
    return k


def load_state():
    if STATE.exists():
        return json.loads(STATE.read_text())
    return {"used": {}, "remaining": None}


def save_state(st):
    TMP.mkdir(parents=True, exist_ok=True)
    STATE.write_text(json.dumps(st, indent=2))


def api_get(url, st, **kw):
    r = requests.get(url, headers={"Authorization": f"Client-ID {key()}"}, timeout=30, **kw)
    rem = r.headers.get("X-Ratelimit-Remaining")
    if rem is not None:
        st["remaining"] = int(rem)
        save_state(st)
    if r.status_code == 403 and st.get("remaining") == 0:
        raise RateLimited()
    r.raise_for_status()
    if st.get("remaining") is not None and st["remaining"] < LOW_WATER:
        print(f"Rate limit low ({st['remaining']} left). Stopping after this call; rerun later.")
    return r


def check_budget(st):
    rem = st.get("remaining")
    if rem is not None and rem < LOW_WATER:
        raise RateLimited()


def passes(photo, used_ids):
    """Candidate filter: size, aspect ratio, not AI/illustration/render, not already used."""
    w, h = photo.get("width") or 0, photo.get("height") or 0
    if w < 2400 or not h:
        return False
    if not 1.4 <= w / h <= 2.0:
        return False
    text = f"{photo.get('alt_description') or ''} {photo.get('description') or ''}"
    if BANNED.search(text):
        return False
    return photo["id"] not in used_ids


def raw_url(photo, w, q):
    raw = photo["urls"]["raw"]
    return f"{raw}{'&' if '?' in raw else '?'}w={w}&q={q}&fm=jpg"


def has_cover(slug):
    return (POSTS / slug / "cover.jpg").exists()


def cmd_search(a):
    slug = a.slug
    if slug not in QUERIES:
        sys.exit(f"Unknown slug: {slug}")
    if has_cover(slug):
        print(f"{slug}: cover.jpg already exists, skipping.")
        return
    st = load_state()
    check_budget(st)
    variants = QUERIES[slug]
    q = a.query or variants[min(a.variant, len(variants) - 1)]
    r = api_get(f"{API}/search/photos", st,
                params={"query": q, "orientation": "landscape", "per_page": 15})
    used = set(st["used"])
    picks = [p for p in r.json().get("results", []) if passes(p, used)][:3]
    out = TMP / slug
    out.mkdir(parents=True, exist_ok=True)
    meta = []
    for p in picks:
        f = out / f"{p['id']}.jpg"
        d = requests.get(raw_url(p, 1600, 80), timeout=60)
        d.raise_for_status()
        f.write_bytes(d.content)
        meta.append({k: p.get(k) for k in ("id", "width", "height", "alt_description", "description")}
                    | {"user": p["user"]["name"], "page": p["links"]["html"],
                       "download_location": p["links"]["download_location"],
                       "raw": p["urls"]["raw"], "preview": str(f)})
    (out / "candidates.json").write_text(json.dumps(meta, indent=2))
    print(f"{slug}  query={q!r}  {len(meta)} candidate(s)  rate-limit remaining={st['remaining']}")
    for m in meta:
        print(f"  {m['id']}  {m['width']}x{m['height']}  {m['user']}  {m['alt_description']!r}\n    {m['preview']}")
    if not meta:
        print("  none passed the filter; try --variant or --query")


def front_matter_insert(text, alt, credit):
    """Add imageAlt and imageCredit before the categories line; touch nothing else."""
    if re.search(r"^imageAlt:", text, re.M) or re.search(r"^imageCredit:", text, re.M):
        raise ValueError("post already has imageAlt/imageCredit")
    esc = lambda s: s.replace("\\", "\\\\").replace('"', '\\"')
    add = f'imageAlt: "{esc(alt)}"\nimageCredit: "{esc(credit)}"\n'
    new, n = re.subn(r"^(categories:)", lambda m: add + m.group(1), text, count=1, flags=re.M)
    if n != 1:
        raise ValueError("no categories line found in front matter")
    return new


def cmd_apply(a):
    slug = a.slug
    if has_cover(slug):
        sys.exit(f"{slug}: cover.jpg already exists.")
    st = load_state()
    if a.id in st["used"]:
        sys.exit(f"Photo {a.id} is already used by {st['used'][a.id]}.")
    check_budget(st)
    cands = json.loads((TMP / slug / "candidates.json").read_text())
    p = next((c for c in cands if c["id"] == a.id), None)
    if not p:
        sys.exit(f"{a.id} is not in the candidates for {slug}.")
    api_get(p["download_location"], st)  # required by Unsplash to register the download
    d = requests.get(raw_url({"urls": {"raw": p["raw"]}}, 2400, 85), timeout=120)
    d.raise_for_status()
    (POSTS / slug / "cover.jpg").write_bytes(d.content)
    credit = (f"Photo by {p['user']} on [Unsplash]"
              f"({p['page'].split('?')[0]}?utm_source=solarexaminer&utm_medium=referral)")
    md = POSTS / slug / "index.md"
    md.write_text(front_matter_insert(md.read_text(), a.alt, credit))
    st["used"][a.id] = slug
    save_state(st)
    print(f"{slug}: cover.jpg saved; credit by {p['user']}; remaining={st['remaining']}")


def cmd_status(_):
    st = load_state()
    print("rate-limit remaining:", st.get("remaining"))
    for s in QUERIES:
        print(("done   " if has_cover(s) else "missing"), s)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("search"); s.add_argument("slug"); s.add_argument("--variant", type=int, default=0); s.add_argument("--query")
    s.set_defaults(fn=cmd_search)
    p = sub.add_parser("apply"); p.add_argument("slug"); p.add_argument("id"); p.add_argument("--alt", required=True)
    p.set_defaults(fn=cmd_apply)
    t = sub.add_parser("status"); t.set_defaults(fn=cmd_status)
    a = ap.parse_args()
    try:
        a.fn(a)
    except RateLimited:
        print("Rate limit nearly exhausted. Stopping cleanly; rerun after it resets (hourly).")
        sys.exit(2)


if __name__ == "__main__":
    main()
