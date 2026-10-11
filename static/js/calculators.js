/* Solar Examiner calculators. Plain JS, no dependencies.
   Formulas are documented on each calculator page under "How it is calculated". */
(function () {
  "use strict";
  var form = document.getElementById("calc");
  if (!form) return;
  var out = document.getElementById("out");
  var cfg = window.SE_CALC || {};
  var kind = form.dataset.calc;
  var qs = new URLSearchParams(location.search);

  function el(id) { return document.getElementById(id); }
  function num(id) {
    var e = el(id);
    if (!e || e.value === "") return NaN;
    var v = parseFloat(e.value);
    return isFinite(v) ? v : NaN;
  }
  function mode() {
    var r = form.querySelector('input[name="mode"]:checked');
    return r ? r.value : "";
  }
  function fmt(n, d) { return n.toLocaleString("en-US", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
  function usd(n) { return (n < 0 ? "−$" : "$") + fmt(Math.abs(n)); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function stat(label, value, sub, big) {
    return '<div class="stat' + (big ? " stat-big" : "") + '"><span class="stat-k">' + label + '</span><span class="stat-v">' + value + "</span>" +
      (sub ? '<span class="stat-s">' + sub + "</span>" : "") + "</div>";
  }
  function empty(msg) { out.innerHTML = '<p class="calc-empty">' + msg + "</p>"; }
  function syncMode() {
    var m = mode();
    form.querySelectorAll("[data-show]").forEach(function (f) { f.hidden = f.dataset.show !== m; });
  }
  function stateRate() {
    var s = el("state");
    var o = s && s.options[s.selectedIndex];
    var r = o && parseFloat(o.dataset.rate);
    return isFinite(r) ? r : cfg.usRate;
  }

  /* ---------- System size ---------- */
  function size() {
    var rate = stateRate();
    var annual = mode() === "bill" ? (num("bill") * 12) / (rate / 100) : num("kwh");
    var extra = num("extra"); if (!isFinite(extra) || extra < 0) extra = 0;
    var offset = num("offset"), prod = num("prod"), panel = num("panel");
    if (!(annual > 0)) return empty(mode() === "bill" ? "Enter your average monthly bill to see an estimate." : "Enter your yearly kWh use to see an estimate.");
    if (!(offset > 0) || !(prod > 0) || !(panel > 0)) return empty("Check the coverage, output and panel wattage fields.");

    var need = annual + extra;
    var target = need * offset / 100;
    var kwExact = target / prod;
    var panels = Math.ceil(kwExact * 1000 / panel - 1e-9);
    var kw = panels * panel / 1000;
    var made = kw * prod;
    var cost = kw * 1000 * cfg.ppw;

    var p = new URLSearchParams();
    p.set("kw", kw.toFixed(2)); p.set("prod", String(prod)); p.set("use", String(Math.round(need)));
    if (el("state").value) p.set("state", el("state").value);

    out.innerHTML =
      stat("System size", fmt(kw, 1) + " kW", panels + " panels of " + fmt(panel) + " W", true) +
      '<div class="stat-grid">' +
      stat("Yearly use to plan for", fmt(need) + " kWh", mode() === "bill" ? "From your bill at " + rate.toFixed(2) + "¢/kWh" : (extra ? "Includes " + fmt(extra) + " kWh you plan to add" : "")) +
      stat("Estimated first-year output", fmt(made) + " kWh", "About " + fmt(made / need * 100) + "% of that use") +
      stat("Exact size before rounding", fmt(kwExact, 2) + " kW", "Rounded up to whole panels") +
      stat("Rough price before incentives", usd(cost), "At the $" + cfg.ppw.toFixed(2) + "/W U.S. median") +
      "</div>" +
      '<a class="btn btn-primary calc-next" href="/solar-payback-calculator/?' + esc(p.toString()) + '">Estimate payback for this system →</a>';
  }

  /* ---------- Payback and ROI ---------- */
  function irr(flows) {
    function npv(r) { var v = 0; for (var i = 0; i < flows.length; i++) v += flows[i] / Math.pow(1 + r, i); return v; }
    var lo = -0.99, hi = 1;
    if (npv(lo) < 0 || npv(hi) > 0) return NaN;
    for (var i = 0; i < 80; i++) { var mid = (lo + hi) / 2; if (npv(mid) > 0) lo = mid; else hi = mid; }
    return (lo + hi) / 2;
  }
  function run(a, growth) {
    var cum = -a.net, rows = [], flows = [-a.net], payback = NaN;
    for (var t = 1; t <= a.years; t++) {
      var made = a.made * Math.pow(1 - a.deg, t - 1);
      var rate = a.rate * Math.pow(1 + growth, t - 1);
      var save;
      if (a.mode === "nb") save = made * a.self * rate + made * (1 - a.self) * a.exp * Math.pow(1 + growth, t - 1);
      else save = (a.use > 0 ? Math.min(made, a.use) : made) * rate;
      save -= a.upkeep;
      var before = cum; cum += save; flows.push(save);
      if (isNaN(payback) && cum >= 0 && save > 0) payback = t - 1 + (-before / save);
      rows.push({ t: t, made: made, rate: rate, save: save, cum: cum });
    }
    return { rows: rows, payback: payback, total: cum + a.net, net: cum, irr: irr(flows), first: rows[0].save };
  }
  function chart(rows, net) {
    var W = 520, H = 220, L = 8, R = 8, T = 14, B = 26;
    var pts = [{ t: 0, cum: -net }].concat(rows);
    var min = Math.min.apply(null, pts.map(function (r) { return r.cum; }));
    var max = Math.max.apply(null, pts.map(function (r) { return r.cum; }));
    if (max < 0) max = 0; if (min > 0) min = 0; if (max === min) max = min + 1;
    var n = rows.length;
    function x(t) { return L + (W - L - R) * t / n; }
    function y(v) { return T + (H - T - B) * (max - v) / (max - min); }
    var d = pts.map(function (r, i) { return (i ? "L" : "M") + x(r.t).toFixed(1) + " " + y(r.cum).toFixed(1); }).join(" ");
    var last = pts[pts.length - 1];
    return '<figure class="calc-chart"><svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Running total of savings minus cost, year 0 to year ' + n + '">' +
      '<line class="c-zero" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(0).toFixed(1) + '" y2="' + y(0).toFixed(1) + '"/>' +
      '<path class="c-line" d="' + d + '"/>' +
      '<circle class="c-dot" cx="' + x(last.t).toFixed(1) + '" cy="' + y(last.cum).toFixed(1) + '" r="4"/>' +
      '<text class="c-lab" x="' + L + '" y="' + (H - 6) + '">Year 0: ' + usd(-net) + "</text>" +
      '<text class="c-lab" text-anchor="end" x="' + (W - R) + '" y="' + (H - 6) + '">Year ' + n + ": " + usd(last.cum) + "</text>" +
      '<text class="c-lab c-soft" x="' + (L + 4) + '" y="' + (y(0) - 5).toFixed(1) + '">Break-even</text>' +
      "</svg><figcaption>Running total: savings so far minus what you paid.</figcaption></figure>";
  }
  function yrs(v) { return isNaN(v) ? "Not reached" : fmt(v, 1) + " years"; }
  function payback() {
    var a = {
      kw: num("kw"), ppw: num("ppw"), prod: num("prod"), rate: num("rate") / 100, mode: mode(),
      self: num("self") / 100, exp: num("exp") / 100, deg: num("deg") / 100, years: Math.round(num("years")),
      upkeep: num("upkeep"), use: num("use"), incent: num("incent")
    };
    var growth = num("esc") / 100;
    if (!isFinite(a.upkeep) || a.upkeep < 0) a.upkeep = 0;
    if (!isFinite(a.incent) || a.incent < 0) a.incent = 0;
    if (!isFinite(a.deg)) a.deg = 0;
    if (!isFinite(growth)) growth = 0;
    if (!(a.kw > 0) || !(a.ppw > 0) || !(a.prod > 0) || !(a.rate > 0)) return empty("Enter system size, price, output and electric rate to see an estimate.");
    if (!(a.years >= 1 && a.years <= 40)) return empty("Years counted must be between 1 and 40.");
    if (a.mode === "nb" && (!(a.self >= 0 && a.self <= 1) || !(a.exp >= 0))) return empty("Check the self-use share and export credit rate.");

    var price = a.kw * 1000 * a.ppw;
    a.net = price - a.incent;
    if (!(a.net > 0)) return empty("Incentives cannot be more than the system price.");
    a.made = a.kw * a.prod;

    var r = run(a, growth), flat = run(a, 0);
    var simple = r.first > 0 ? a.net / r.first : NaN;
    var roi = r.net / a.net * 100;
    var capped = a.mode === "nem" && a.use > 0 && a.made > a.use;
    var late = !isNaN(r.payback) && r.payback > 15;

    var h = stat("Estimated payback", isNaN(r.payback) ? "Not within " + a.years + " years" : fmt(r.payback, 1) + " years",
        "With " + (a.deg * 100).toFixed(1) + "% yearly output loss and " + (growth * 100).toFixed(1) + "% yearly rate growth", true) +
      '<div class="stat-grid">' +
      stat("Net cost", usd(a.net), fmt(a.kw, 1) + " kW at $" + a.ppw.toFixed(2) + "/W" + (a.incent ? ", less " + usd(a.incent) : "")) +
      stat("First-year bill savings", usd(r.first), fmt(a.made) + " kWh in year one") +
      stat("Simple payback", yrs(simple), "Net cost ÷ first-year savings") +
      stat(a.years + "-year net gain", usd(r.net), "Savings of " + usd(r.total) + " minus net cost") +
      stat("Return on investment", fmt(roi) + "%", "Net gain ÷ net cost, over " + a.years + " years") +
      stat("Yearly rate of return", isNaN(r.irr) ? "n/a" : fmt(r.irr * 100, 1) + "%", "Internal rate of return, before tax") +
      "</div>" + chart(r.rows, a.net);

    h += '<table class="calc-table"><caption>Same system, different rate growth</caption><thead><tr><th>Rate growth</th><th>Payback</th><th>' + a.years + "-year net gain</th></tr></thead><tbody>" +
      "<tr><td>0% a year (rates stay flat)</td><td>" + yrs(flat.payback) + "</td><td>" + usd(flat.net) + "</td></tr>" +
      "<tr><td>" + (growth * 100).toFixed(1) + "% a year (your input)</td><td>" + yrs(r.payback) + "</td><td>" + usd(r.net) + "</td></tr></tbody></table>";

    var notes = [];
    if (capped) notes.push("This system makes about " + fmt(a.made) + " kWh in year one, more than the " + fmt(a.use) + " kWh you use. We gave the surplus no value. Many utilities pay little or nothing for yearly excess.");
    if (late) notes.push("Panel warranties typically run 20 to 25 years, so a payback beyond about 15 years leaves limited time to come out ahead.");
    if (r.net < 0) notes.push("On these inputs the system does not pay for itself within " + a.years + " years.");
    if (notes.length) h += '<ul class="calc-flags">' + notes.map(function (n) { return "<li>" + n + "</li>"; }).join("") + "</ul>";

    h += '<details class="calc-years"><summary>Year-by-year figures</summary><table class="calc-table"><thead><tr><th>Year</th><th>Output (kWh)</th><th>Rate (¢)</th><th>Savings</th><th>Running total</th></tr></thead><tbody>' +
      r.rows.map(function (x) { return "<tr><td>" + x.t + "</td><td>" + fmt(x.made) + "</td><td>" + (x.rate * 100).toFixed(1) + "</td><td>" + usd(x.save) + "</td><td>" + usd(x.cum) + "</td></tr>"; }).join("") +
      "</tbody></table></details>";
    out.innerHTML = h;
  }

  /* ---------- Wiring ---------- */
  ["kw", "prod", "use", "state", "rate"].forEach(function (k) {
    var e = el(k), v = qs.get(k);
    if (!e || v === null) return;
    if (e.tagName === "SELECT") { if (e.querySelector('option[value="' + v.replace(/[^a-z-]/g, "") + '"]')) e.value = v; }
    else if (isFinite(parseFloat(v))) e.value = parseFloat(v);
  });
  var st = el("state");
  if (st && kind === "payback") {
    if (qs.get("state") && !qs.get("rate")) el("rate").value = stateRate();
    st.addEventListener("change", function () { el("rate").value = stateRate(); });
  }
  var calc = kind === "size" ? size : payback;
  function update() { syncMode(); calc(); }
  form.addEventListener("input", update);
  form.addEventListener("change", update);
  update();
})();
