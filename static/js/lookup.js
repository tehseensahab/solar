/* Solar Examiner lookups: state electricity rates and state solar incentives. Plain JS. */
(function () {
  "use strict";
  var form = document.getElementById("calc");
  if (!form || !form.dataset.tool) return;
  var out = document.getElementById("out"), tool = form.dataset.tool, cfg = window.SE_LOOKUP || {};
  var st = form.elements.state;
  function fmt(n, d) { return n.toLocaleString("en-US", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
  function stat(k, v, s, big) { return '<div class="stat' + (big ? " stat-big" : "") + '"><span class="stat-k">' + k + '</span><span class="stat-v">' + v + "</span>" + (s ? '<span class="stat-s">' + s + "</span>" : "") + "</div>"; }
  function empty(m) { out.innerHTML = '<div class="calc-empty"><h2>Your result</h2><p>' + m + "</p></div>"; }

  function rates() {
    var s = (cfg.states || []).filter(function (x) { return x.slug === st.value; })[0];
    if (!s) return empty("Choose a state to see its average residential electricity price.");
    var kwh = parseFloat(form.elements.kwh.value); if (!isFinite(kwh) || kwh < 0) kwh = 0;
    var sorted = cfg.states.slice().sort(function (a, b) { return b.y26 - a.y26; });
    var rank = sorted.findIndex(function (x) { return x.slug === s.slug; }) + 1;
    var diff = s.y26 - cfg.us, bill = kwh * s.y26 / 100;
    var ch = s.change.replace("-", "−");
    out.innerHTML = '<div class="calc-hero"><h2>' + s.name + '</h2><div class="stat-grid">' +
      stat("Average residential price", fmt(s.y26, 2) + "¢/kWh", cfg.month + " (EIA, preliminary)", true) +
      stat("Change", ch, "vs. " + fmt(s.y25, 2) + "¢ in " + cfg.prev) +
      stat("Versus U.S. average", (diff >= 0 ? "+" : "−") + fmt(Math.abs(diff), 2) + "¢", "U.S. average " + fmt(cfg.us, 2) + "¢") +
      stat("Rank", "#" + rank + " of " + cfg.states.length, "1 = highest price") +
      stat("Estimated bill at " + fmt(kwh) + " kWh", "$" + fmt(bill, 0) + " a month", fmt(kwh) + " kWh × " + fmt(s.y26, 2) + "¢ ÷ 100") +
      "</div></div>" + (s.url ? '<p><a class="btn btn-primary" href="' + s.url + '">' + s.name + " rates, net metering and utilities →</a></p>" : "");
  }
  function incentives() {
    var sec = st.value ? document.querySelector('#state-data section[data-state="' + st.value + '"]') : null;
    var fed = document.getElementById("fed-table");
    document.getElementById("state-result");
    if (!sec) { out.innerHTML = '<div class="calc-empty"><h2>Your result</h2><p>Choose a state to see its export-credit status and the incentives we have recorded. The federal table below applies everywhere.</p></div>'; return; }
    out.innerHTML = sec.innerHTML;
  }
  var run = tool === "rates" ? rates : incentives;
  var qs = new URLSearchParams(location.search);
  if (qs.get("state")) st.value = qs.get("state");
  if (qs.get("kwh") && form.elements.kwh) form.elements.kwh.value = qs.get("kwh");
  function update() {
    run();
    var p = new URLSearchParams();
    if (st.value) p.set("state", st.value);
    if (form.elements.kwh && form.elements.kwh.value !== "900") p.set("kwh", form.elements.kwh.value);
    var q = p.toString();
    try { history.replaceState(null, "", location.pathname + (q ? "?" + q : "")); } catch (e) {}
  }
  form.addEventListener("input", update); form.addEventListener("change", update);
  update();
})();
