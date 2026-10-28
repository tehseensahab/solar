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
  var bar = el("calc-bar");
  function setBar(k, v) {
    if (!bar) return;
    if (!v) { bar.hidden = true; return; }
    el("bar-k").textContent = k; el("bar-v").textContent = v; bar.dataset.ready = "1"; showBar();
  }
  function empty(msg, example) {
    out.innerHTML = '<div class="calc-empty"><h2>Your estimate</h2><p>' + msg + "</p>" +
      (example ? '<button type="button" class="btn btn-secondary" id="example">Try an example: 10,000 kWh a year</button>' : "") + "</div>";
    if (bar) { bar.hidden = true; delete bar.dataset.ready; }
  }
  function advSum(text) { var a = el("adv-sum"); if (a) a.textContent = text; }
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
    advSum((prod > 0 ? fmt(prod) : "?") + " kWh per kW · " + (panel > 0 ? fmt(panel) : "?") + " W panels");
    var bh = el("bill-hint");
    if (bh) bh.textContent = "We divide your yearly bill by the average residential price of " + rate.toFixed(2) + "¢/kWh (EIA, " + cfg.rateMonth + "). Rougher than kWh from your bills.";
    if (!(annual > 0)) return empty(mode() === "bill" ? "Enter your average monthly bill and the result appears here." : "Enter your yearly kWh use and the result appears here.", mode() !== "bill");
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

    var pct = made / need * 100, scale = Math.max(need, made);
    setBar("System size", fmt(kw, 1) + " kW · " + panels + " panels");
    out.innerHTML =
      stat("Estimated system size", fmt(kw, 1) + " kW", panels + " panels of " + fmt(panel) + " W", true) +
      '<div class="cover" role="img" aria-label="Estimated output is ' + fmt(pct) + ' percent of your yearly use">' +
      '<div class="cover-row"><span>Your use</span><div class="cover-track"><i class="cover-use" style="width:' + (need / scale * 100).toFixed(1) + '%"></i></div><b>' + fmt(need) + " kWh</b></div>" +
      '<div class="cover-row"><span>Solar output</span><div class="cover-track"><i class="cover-sun" style="width:' + (made / scale * 100).toFixed(1) + '%"></i></div><b>' + fmt(made) + " kWh</b></div>" +
      '<p class="stat-s">First-year output covers about ' + fmt(pct) + "% of the use you are planning for" +
      (mode() === "bill" ? ", estimated from your bill at " + rate.toFixed(2) + "¢/kWh" : (extra ? ", including " + fmt(extra) + " kWh of planned extra use" : "")) + ".</p></div>" +
      '<div class="stat-grid">' +
      stat("Before rounding", fmt(kwExact, 2) + " kW", "Rounded up to whole panels") +
      stat("Rough price", usd(cost), "At $" + cfg.ppw.toFixed(2) + "/W, before incentives") +
      "</div>" +
      '<a class="btn btn-primary calc-next" href="/solar-payback-calculator/?' + esc(p.toString()) + '">Estimate payback for this&nbsp;system&nbsp;→</a>';
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
  function chart(rows, net, pb) {
    var W = 520, H = 230, L = 10, R = 10, T = 26, B = 30;
    var pts = [{ t: 0, cum: -net }].concat(rows);
    var min = Math.min.apply(null, pts.map(function (r) { return r.cum; }));
    var max = Math.max.apply(null, pts.map(function (r) { return r.cum; }));
    if (max < 0) max = 0; if (min > 0) min = 0; if (max === min) max = min + 1;
    var n = rows.length;
    function x(t) { return L + (W - L - R) * t / n; }
    function y(v) { return T + (H - T - B) * (max - v) / (max - min); }
    var line = pts.map(function (r, i) { return (i ? "L" : "M") + x(r.t).toFixed(1) + " " + y(r.cum).toFixed(1); }).join(" ");
    var area = line + " L" + x(n).toFixed(1) + " " + y(0).toFixed(1) + " L" + x(0).toFixed(1) + " " + y(0).toFixed(1) + " Z";
    var last = pts[pts.length - 1], y0 = y(0).toFixed(1), ticks = "", step = n > 30 ? 10 : 5;
    for (var t = 0; t <= n; t += step) {
      ticks += '<line class="c-tick" x1="' + x(t).toFixed(1) + '" x2="' + x(t).toFixed(1) + '" y1="' + (H - B) + '" y2="' + (H - B + 4) + '"/>' +
        '<text class="c-lab c-soft" text-anchor="' + (t === 0 ? "start" : t >= n ? "end" : "middle") + '" x="' + x(t).toFixed(1) + '" y="' + (H - 8) + '">' + (t === 0 ? "Year 0" : t) + "</text>";
    }
    var mark = "";
    if (!isNaN(pb)) {
      var px = x(pb), anchor = px > W * 0.7 ? "end" : px < W * 0.2 ? "start" : "middle";
      mark = '<line class="c-pb" x1="' + px.toFixed(1) + '" x2="' + px.toFixed(1) + '" y1="' + (T - 6) + '" y2="' + y0 + '"/>' +
        '<circle class="c-dot" cx="' + px.toFixed(1) + '" cy="' + y0 + '" r="5"/>' +
        '<text class="c-lab" text-anchor="' + anchor + '" x="' + px.toFixed(1) + '" y="' + (T - 11) + '">Paid back: year ' + fmt(pb, 1) + "</text>";
    }
    var id = "clip" + Math.random().toString(36).slice(2, 7);
    return '<figure class="calc-chart"><figcaption>Running total: savings so far minus what you paid</figcaption>' +
      '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Running total of savings minus cost, from ' + usd(-net) + " in year 0 to " + usd(last.cum) + " in year " + n + '">' +
      '<defs><clipPath id="' + id + 'a"><rect x="0" y="0" width="' + W + '" height="' + y0 + '"/></clipPath><clipPath id="' + id + 'b"><rect x="0" y="' + y0 + '" width="' + W + '" height="' + H + '"/></clipPath></defs>' +
      '<path class="c-gain" d="' + area + '" clip-path="url(#' + id + 'a)"/><path class="c-loss" d="' + area + '" clip-path="url(#' + id + 'b)"/>' +
      '<line class="c-zero" x1="' + L + '" x2="' + (W - R) + '" y1="' + y0 + '" y2="' + y0 + '"/>' + ticks +
      '<path class="c-line" d="' + line + '"/>' + mark +
      '<text class="c-lab c-soft" x="' + (L + 2) + '" y="' + (y(0) + 15).toFixed(1) + '">' + usd(-net) + "</text>" +
      '<text class="c-lab" text-anchor="end" x="' + (W - R) + '" y="' + Math.max(y(last.cum) - 8, 12).toFixed(1) + '">' + usd(last.cum) + "</text>" +
      "</svg></figure>";
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
    advSum((a.prod > 0 ? fmt(a.prod) : "?") + " kWh per kW · " + (a.deg * 100).toFixed(1) + "% loss · " + (growth * 100).toFixed(1) + "% rate growth · " + (a.years || "?") + " years");
    var po = el("price-out"); if (po) po.textContent = a.kw > 0 && a.ppw > 0 ? usd(a.kw * 1000 * a.ppw) : "n/a";
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

    var pbText = isNaN(r.payback) ? "Not within " + a.years + " years" : fmt(r.payback, 1) + " years";
    setBar("Estimated payback", pbText);
    var h = stat("Estimated payback", pbText,
        (a.mode === "nb" ? "Net billing" : "Net metering") + " · " + usd(a.net) + " net cost · " + usd(r.first) + " saved in year one", true) +
      chart(r.rows, a.net, r.payback) +
      '<div class="stat-grid">' +
      stat(a.years + "-year net gain", usd(r.net), usd(r.total) + " saved, minus net cost") +
      stat("Return on investment", fmt(roi) + "%", "Net gain ÷ net cost") +
      stat("Yearly rate of return", isNaN(r.irr) ? "n/a" : fmt(r.irr * 100, 1) + "%", "Internal rate of return, before tax") +
      stat("Simple payback", yrs(simple), "Net cost ÷ first-year savings") +
      "</div>";

    h += '<table class="calc-table"><caption>If electric rates grow more slowly</caption><thead><tr><th>Rate growth</th><th>Payback</th><th>' + a.years + "-year net gain</th></tr></thead><tbody>" +
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
  var fields = Array.prototype.slice.call(form.querySelectorAll("input[name], select[name]"));
  var defaults = {};
  fields.forEach(function (f) { if (f.type !== "radio") defaults[f.name] = f.value; });
  var defMode = mode();

  qs.forEach(function (v, k) {
    if (k === "mode") {
      var r = form.querySelector('input[name="mode"][value="' + v.replace(/[^a-z]/g, "") + '"]');
      if (r) r.checked = true;
      return;
    }
    var e = form.querySelector('[name="' + k.replace(/[^a-z]/g, "") + '"]');
    if (!e || e.type === "radio") return;
    if (e.tagName === "SELECT") { if (e.querySelector('option[value="' + v.replace(/[^a-z-]/g, "") + '"]')) e.value = v; }
    else if (isFinite(parseFloat(v))) e.value = parseFloat(v);
  });
  var st = el("state");
  if (st && kind === "payback") {
    if (qs.get("state") && !qs.get("rate")) el("rate").value = stateRate();
    st.addEventListener("change", function () { el("rate").value = stateRate(); });
  }
  form.querySelectorAll('input[type="range"]').forEach(function (r) {
    var n = el(r.dataset.for);
    r.value = n.value;
    r.addEventListener("input", function () { n.value = r.value; });
    n.addEventListener("input", function () { r.value = n.value; });
  });

  function link() {
    var p = new URLSearchParams();
    fields.forEach(function (f) {
      if (f.type === "radio") return;
      if (f.value !== "" && f.value !== defaults[f.name]) p.set(f.name, f.value);
    });
    if (mode() !== defMode) p.set("mode", mode());
    var q = p.toString();
    return location.pathname + (q ? "?" + q : "");
  }
  var calc = kind === "size" ? size : payback;
  function update() {
    syncMode(); calc();
    try { history.replaceState(null, "", link() + location.hash); } catch (e) {}
  }
  form.addEventListener("input", update);
  form.addEventListener("change", update);
  out.addEventListener("click", function (e) {
    if (e.target.id !== "example") return;
    el("kwh").value = 10000; update();
  });
  el("calc-reset").addEventListener("click", function () {
    form.reset();
    form.querySelectorAll('input[type="range"]').forEach(function (r) { r.value = el(r.dataset.for).value; });
    update();
  });
  var copy = el("copy-link");
  copy.addEventListener("click", function () {
    var url = location.origin + link();
    function done(ok) { copy.textContent = ok ? "Link copied" : "Copy failed"; setTimeout(function () { copy.textContent = "Copy link to this estimate"; }, 2000); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(function () { done(true); }, function () { done(false); });
    else done(false);
  });

  /* Phone: keep the headline result in view while the reader edits inputs. */
  var resultsSeen = false, inputsSeen = true;
  function showBar() { if (bar) bar.hidden = resultsSeen || !inputsSeen || !bar.dataset.ready; }
  if (bar && "IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { resultsSeen = en[0].isIntersecting; showBar(); }, { threshold: 0.15 }).observe(el("results"));
    new IntersectionObserver(function (en) { inputsSeen = en[0].isIntersecting; showBar(); }).observe(form.querySelector(".calc-inputs"));
  }
  update();
})();
