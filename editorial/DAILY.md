# Standing instructions for the daily run (read first; wins over the prompt)

Source: GSC export Oct 3–30, 2026 (53 clicks, 2,359 impressions, CTR 2.25%, avg pos ~8.4).
Traffic fell to ~0 after Oct 17 because state hubs moved from /posts/<state>-electricity-rate-changes-2026/ to /rates/<state>/ (301s). Google is re-indexing the new URLs. Recovery is expected; do not undo it.

## Do not
- Change any /rates/ URL or remove any line from static/_redirects.
- Link to the old /posts/...-electricity-rate-changes-2026/ URLs.
- Mass-rewrite hub titles/descriptions or publish more bulk state pages. Hub titles get reviewed after Google re-indexes (about Dec 1, with the owner's monthly GSC export).
- Use GSC / gsc-wizard (not available to runs).

## Topic priorities (in order)
1. News slot: per-utility articles. Demand seen in GSC (queries "<utility> rate increase 2026", already ranking pos 4–10 on hubs, no dedicated page): Evergy, Georgia Power, PSO, PSE&G, JCP&L, Penelec/FirstEnergy PA, SCE, DTE, Oncor, CMP, TVA, Mon Power, Entergy, NV Energy, TEP, PECO, NYSEG. Only with primary-source evidence (docket/order/tariff). Check INDEX.md first; skip if one exists.
2. Evergreen slot, in this order, one per day, skipping any already in INDEX.md:
   a. "How many kW of solar do I need" sizing guide (queries seen at pos 85–99: how big solar system do i need, how many kw solar for house, solar panel kwh calculator, 10kw solar system calculator, how to calculate solar system size). Link to /solar-system-size-calculator/. Show the formula and worked examples for 3 usage levels.
   b. Solar payback / ROI guide (query: solar roi calculator, pos 72). Link to /solar-payback-calculator/.
   c. Net metering vs export credits explainer (queries: export tariff rates, aep net metering, illinois net metering changes, new jersey net metering policy 2026). Link to relevant /rates/<state>/ hubs.
   d. Electric supply charge / reading your bill (query: what is electric supply charge, pos 84).
3. Never write a near-duplicate of an existing page.

## Linking rules (every article)
- First two paragraphs: link to the state hub /rates/<state>/ (already required).
- At least one link to a calculator when the topic involves size, cost or payback.
- At least two links to other live posts. Add the new article to the related coverage of its state hub when the hub supports it.

## Hygiene (quick checks each run, fix in the same PR)
- No draft or test pages in public/sitemap.xml.
- Every article has a canonical tag and no noindex.
