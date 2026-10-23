/* Solar Examiner reader tools: battery sizing and EV charging. Plain JS, no dependencies.
   Formulas are documented on each page under "How it is calculated". */
(function () {
  "use strict";
  var form = document.getElementById("calc");
  if (!form || !form.dataset.tool) return;
  var out = document.getElementById("out");
  var cfg = window.SE_TOOL || {};
  var tool = form.dataset.tool;
  var qs = new URLSearchParams(location.search);
  var defaults = {};

  function f(name) { return form.elements[name]; }
  function num(name) {
    var e = f(name);
    if (!e || e.value === "") return NaN;
    var v = parseFloat(e.value);
    return isFinite(v) ? v : NaN;
  }
  function fmt(n, d) { return n.toLocaleString("en-US", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
  function usd(n, d) { return "$" + fmt(n, d === undefined ? 2 : d); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function stat(label, value, sub, big) {
    return '<div class="stat' + (big ? " stat-big" : "") + '"><span class="stat-k">' + label + '</span><span class="stat-v">' + value + "</span>" +
      (sub ? '<span class="stat-s">' + sub + "</span>" : "") + "</div>";
  }
  function empty(msg) { out.innerHTML = '<div class="calc-empty"><h2>Your estimate</h2><p>' + msg + "</p></div>"; }

  /* ---------- Battery sizing ---------- */
  function battery() {
    var n = cfg.loads || 0, run = 0, peak = 0, picked = 0, rows = "";
    for (var i = 0; i < n; i++) {
      var on = f("on" + i).checked, w = num("w" + i), s = num("s" + i);
      if (!on) continue;
      w = isFinite(w) && w > 0 ? w : 0; s = isFinite(s) && s > 0 ? s : 0;
      if (s < w) s = w;
      picked++; run += w; peak += w;
      rows += "<tr><td>" + esc(f("on" + i).parentNode.textContent.trim()) + "</td><td>" + fmt(w) + " W</td><td>" + fmt(s) + " W</td></tr>";
      f("on" + i).dataset.s = s;
    }
    if (!picked || run <= 0) return empty("Tick at least one load and enter its running watts.");
    // Starting surge: the largest single start on top of everything else already running.
    var surge = 0;
    for (i = 0; i < n; i++) {
      if (!f("on" + i).checked) continue;
      var w2 = Math.max(0, num("w" + i) || 0), s2 = Math.max(w2, num("s" + i) || 0);
      surge = Math.max(surge, run - w2 + s2);
    }
    var hours = num("hours"), share = num("share"), reserve = num("reserve");
    if (!(hours > 0)) return empty("Enter how many hours of backup you want.");
    if (!(share > 0 && share <= 100)) share = 100;
    if (!(reserve >= 0 && reserve < 100)) reserve = 0;
    var avgKw = run / 1000 * share / 100;
    var kwh = avgKw * hours;
    var kwhStored = kwh / (1 - reserve / 100);
    var kwNeed = Math.max(run, surge) / 1000;
    var list = (cfg.batteries || []).slice();
    var ckwh = num("ckwh"), ckw = num("ckw");
    if (ckwh > 0 && ckw > 0) list.push({ name: "Your battery", kwh: ckwh, kw: ckw, note: "Figures you entered" });
    var tr = "";
    list.forEach(function (b) {
      var byE = Math.ceil(kwhStored / b.kwh - 1e-9), byP = Math.ceil(kwNeed / b.kw - 1e-9);
      var units = Math.max(byE, byP, 1);
      var limit = byE >= byP ? "energy (kWh)" : "power (kW)";
      tr += "<tr><td>" + esc(b.name) + "</td><td><strong>" + units + "</strong></td><td>" + fmt(units * b.kwh, 1) + " kWh / " + fmt(units * b.kw, 1) + " kW</td><td>" + limit + "</td></tr>";
    });
    var flags = [];
    if (share < 100) flags.push("You set loads to run " + fmt(share) + "% of the time. Only do that with measured data.");
    flags.push("Capacities are manufacturer-stated and some are nominal rather than usable. Confirm usable energy and stacking limits with an installer.");
    out.innerHTML =
      '<div class="calc-hero"><h2>Your estimate</h2>' +
      '<div class="stat-grid">' + stat("Energy needed", fmt(kwhStored, 1) + " kWh", fmt(avgKw, 2) + " kW average × " + fmt(hours) + " h" + (reserve ? ", plus " + fmt(reserve) + "% reserve" : ""), true) +
      stat("Power needed", fmt(kwNeed, 2) + " kW", "Running " + fmt(run / 1000, 2) + " kW; worst start " + fmt(surge / 1000, 2) + " kW") + "</div></div>" +
      '<h3>Units needed</h3><div class="calc-table-wrap"><table class="calc-table"><thead><tr><th>Battery</th><th>Units</th><th>Total</th><th>Set by</th></tr></thead><tbody>' + tr + "</tbody></table></div>" +
      '<h3>Loads counted</h3><div class="calc-table-wrap"><table class="calc-table"><thead><tr><th>Load</th><th>Running</th><th>Starting</th></tr></thead><tbody>' + rows + "</tbody></table></div>" +
      '<ul class="calc-flags">' + flags.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>";
  }

  /* ---------- EV charging ---------- */
  function ev() {
    var amps = num("amps"), volts = num("volts"), carmax = num("carmax"), loss = num("loss"), rate = num("rate"), off = num("offpeak");
    var mode = (form.querySelector('input[name="mode"]:checked') || {}).value;
    form.querySelectorAll("[data-show]").forEach(function (e) { e.hidden = e.dataset.show !== mode; });
    if (!(amps > 0 && volts > 0)) return empty("Enter the charger's amps and voltage.");
    var kw = volts * amps / 1000;
    var eff = kw;
    var limited = false;
    if (carmax > 0 && carmax < kw) { eff = carmax; limited = true; }
    var add;
    if (mode === "kwh") add = num("kwh");
    else { var mi = num("miles"), e100 = num("eff"); add = mi * e100 / 100; }
    if (!(add > 0)) return empty("Enter how much energy or how many miles you need to add.");
    if (!(loss >= 0 && loss < 100)) loss = 0;
    var wall = add / (1 - loss / 100);
    var hrs = wall / eff;
    var h = Math.floor(hrs), m = Math.round((hrs - h) * 60); if (m === 60) { h++; m = 0; }
    var timeTxt = h + " h " + (m < 10 ? "0" : "") + m + " min";
    var cost = isFinite(rate) && rate >= 0 ? wall * rate / 100 : NaN;
    var breaker = amps * 1.25, std = (cfg.ev.breaker_sizes || []).filter(function (b) { return b >= breaker - 1e-9; })[0];
    var miles = mode === "miles" ? num("miles") : NaN;
    var flags = [];
    if (limited) flags.push("Your car's " + fmt(carmax, 1) + " kW limit is below the charger's " + fmt(kw, 1) + " kW, so charge time uses " + fmt(carmax, 1) + " kW.");
    flags.push("The charger needs a circuit sized for it. At " + fmt(amps) + " A, a continuous-load breaker is about " + fmt(breaker, 1) + " A" + (std ? ", so the next standard size is " + std + " A" : "") + ". A licensed electrician confirms wire, breaker and panel capacity.");
    if (hrs > 12) flags.push("That is more than 12 hours. A faster charger or a smaller daily top-up may be needed.");
    var grid = stat("Charge time", timeTxt, fmt(wall, 1) + " kWh from the wall ÷ " + fmt(eff, 1) + " kW", true) +
      stat("Charger power", fmt(kw, 2) + " kW", fmt(volts) + " V × " + fmt(amps) + " A ÷ 1,000");
    if (isFinite(cost)) grid += stat("Cost per session", usd(cost), fmt(wall, 1) + " kWh × " + fmt(rate, 1) + "¢");
    if (isFinite(cost) && miles > 0) grid += stat("Cost per mile", usd(cost / miles, 3), "cost ÷ " + fmt(miles) + " miles");
    var offHtml = "";
    if (isFinite(cost) && off >= 0 && isFinite(off) && document.getElementById("offpeak").value !== "") {
      var c2 = wall * off / 100;
      offHtml = '<h3>Off-peak charging</h3><p>' + usd(c2) + " per session at " + fmt(off, 1) + "¢ instead of " + usd(cost) + ". Difference: " + usd(cost - c2) + " per session, about " + usd((cost - c2) * 365, 0) + " over 365 sessions. Your plan's actual hours and rates apply.</p>";
    }
    out.innerHTML =
      '<div class="calc-hero"><h2>Your estimate</h2><div class="stat-grid">' + grid + "</div></div>" + offHtml +
      '<ul class="calc-flags">' + flags.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>";
  }

  var run = tool === "battery" ? battery : ev;

  /* ---------- State, URL and buttons ---------- */
  Array.prototype.forEach.call(form.elements, function (e) {
    if (!e.name) return;
    defaults[e.name] = e.type === "checkbox" ? e.checked : (e.type === "radio" ? null : e.value);
  });
  function serialize() {
    var p = new URLSearchParams();
    Array.prototype.forEach.call(form.elements, function (e) {
      if (!e.name || e.type === "radio" && !e.checked) return;
      var v = e.type === "checkbox" ? (e.checked ? "1" : "0") : e.value;
      var d = defaults[e.name];
      if (e.type === "checkbox") { if ((e.checked ? "1" : "0") !== (d ? "1" : "0")) p.set(e.name, v); }
      else if (e.type === "radio") { if (e.value !== "miles") p.set(e.name, e.value); }
      else if (v !== d) p.set(e.name, v);
    });
    return p.toString();
  }
  qs.forEach(function (v, k) {
    var e = f(k); if (!e) return;
    if (e.length && e[0] && e[0].type === "radio") { Array.prototype.forEach.call(e, function (r) { r.checked = r.value === v; }); }
    else if (e.type === "checkbox") e.checked = v === "1";
    else e.value = v;
  });
  var st = f("state");
  if (st && tool === "ev" && qs.has("state") && !qs.has("rate")) {
    var o0 = st.options[st.selectedIndex];
    if (o0 && o0.dataset.rate) f("rate").value = o0.dataset.rate;
  }
  if (st && tool === "ev") {
    st.addEventListener("change", function () {
      var o = st.options[st.selectedIndex];
      if (o && o.dataset.rate) f("rate").value = o.dataset.rate;
      update();
    });
  }
  function update() {
    run();
    var s = serialize();
    try { history.replaceState(null, "", location.pathname + (s ? "?" + s : "")); } catch (e) {}
  }
  form.addEventListener("input", update);
  form.addEventListener("change", update);
  document.getElementById("calc-reset").addEventListener("click", function () {
    form.reset();
    update();
  });
  var cp = document.getElementById("copy-link");
  cp.addEventListener("click", function () {
    var url = location.href, t = cp.textContent;
    function done() { cp.textContent = "Link copied"; setTimeout(function () { cp.textContent = t; }, 1800); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, function () { window.prompt("Copy this link", url); });
    else window.prompt("Copy this link", url);
  });
  update();
})();
