# Source playbook

One line per source: domain or page | works / fails (how) | workaround | date checked. Read before research; never fetch a source marked fails. Keep under ~80 lines.

## Federal
- eia.gov/electricity/monthly/update/print-version.php (Electricity Monthly Update) | fails 2026-10-28: approval timeout when fetched directly | surface via WebSearch first; worked 2026-10-26 | 2026-10-28
- eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a (Table 5.6.A) | fails: WebFetch server error, or page shows only XLS links, no values | none found without approval; state residential table not readable unattended. Use print-version for U.S. figure only | 2026-10-26
- eia.gov/electricity/monthly/xls/*.xlsx, eia.gov/electricity/monthly/epm_table_grapher.php (typed directly) | fails: WebFetch asks for approval | surface URL via WebSearch first; xlsx still not parseable | 2026-10-26
- eia.gov/electricity/monthly/?src=email | works: release date, data month, links | - | 2026-10-26
- eia.gov/tools/FAQs/faq.php?id=97&t=3 | works (2022 consumption, 899 kWh/month) only after it comes back in a WebSearch; direct fetch asks for approval | search "EIA how much electricity does an American home use" first | 2026-10-27
- eia.gov/energyexplained/use-of-energy/electricity-use-in-homes.php | fails 2026-10-28 when fetched without a fresh search result (approval) | WebSearch for it first | 2026-10-28
- eia.gov/electricity/sales_revenue_price/html/table5_a.html | works but is 2009 data | don't use for current usage | 2026-10-28
- energystar.gov/products/heat_pump_water_heaters/benefits-savings; energystar.gov HPWH 2025 fact sheet PDF; HPWH_BuyingGuide_May2021.pdf | works | - | 2026-10-28
- energy.gov/node/783721 | works, but it is a GeoSpring HPWH article, not Energy Saver install guidance | use ENERGY STAR buying guide | 2026-10-28
- irs.gov/instructions/i5695 | works (25C ends after Dec. 31, 2025) | - | 2026-10-28
- govinfo.gov FR 2024-09209 (DOE water heater rule) | works; gallon thresholds are in an image table, unreadable | cite compliance date and wording only | 2026-10-28
- energy.gov/energysaver/articles/estimating-appliance-and-home-electronic-energy-use | fails: client error | use energy.gov/node/365749 (same article) from search results | 2026-10-27
- atb.nrel.gov/electricity/2023/residential_pv | works only after it comes back in a WebSearch (direct fetch asks approval) | search "NREL ATB residential PV capacity factor 2023" | 2026-10-28
- eta-publications.lbl.gov Distributed Solar & Storage 2026 data update PDF | works (2025 median 7.7 kW; 37% battery attach); figure-only values not readable | - | 2026-10-27
- energy.gov/eere/solar/community-solar-basics | works | - | 2026-10-26
- nrel.gov/state-local-tribal/community-solar | works | - | 2026-10-26
- irs.gov/node/150421 (FS-2025-05, 25C/25D expiry FAQ) | works | - | 2026-10-26
- home.treasury.gov community solar consumer advisory PDF | works | - | 2026-10-26

## State regulators and utilities
- utc.wa.gov/casedocket/2026/260005 (PSE rate case summary) | works | - | 2026-10-26
- utc.wa.gov/casedocket/.../orders and /docsets subtabs | fails: approval required | WebSearch docket number; pse.com rate case page | 2026-10-26
- pse.com/en/pages/rates/pending-utc-filings/2026-general-rate-case | works (residential % and $/month at 800 kWh) | - | 2026-10-26
- puc.colorado.gov press releases | works | - | 2026-10-26
- mn.gov/puc general rate case pages; content.govdelivery.com MN PUC bulletins | works | - | 2026-10-26
- mn.gov/commerce community solar tips | works | - | 2026-10-26
- puc.sd.gov docket PDFs (EL26-003 comments) | works, but comment letters carry no figures | use news + company release | 2026-10-26
- puc.pa.gov/pcdocs/*.pdf from search results | works | - | 2026-10-26
- adms.apps.lara.state.mi.us PFD documents | works, but search returns old cases; verify case number | - | 2026-10-26
- psc.mo.gov press releases; efis.psc.mo.gov documents | works | - | 2026-10-25
- evergy.com rate review page | fails: blocked | PSC press releases and EFIS | 2026-10-25
- efis.psc.mo.gov/Calendar/Display/<case id> (procedural schedule) | works | - | 2026-10-27
- efis.psc.mo.gov/Document/Display/880663 (Ameren ER-2026-0291 filing) | works (schedules 1, 3, 5) | - | 2026-10-27
- psc.mo.gov/Electric/... press releases | fails this run: approval timeout (fact-checker) | cite prior verification or EFIS orders | 2026-10-27
- ameren.mediaroom.com releases; ameren.com/missouri solar-faqs | works | - | 2026-10-27
- prnewswire.com release URLs taken from another page | fails: approval required | use the company mediaroom copy from search | 2026-10-27
- dominionenergy.com Understand My Bill (NC) | works | - | 2026-10-27
- oklahoma.gov/oag newsroom (PSO settlement) | works | - | 2026-10-26
- southwestledger.news, kecofm.com, kjrh.com PSO pages | work but are about OLD PSO cases (2019, Jan 2025) | check article date before using | 2026-10-27

- docs.tep.com TEP-2026-Rates-Public-Notice.pdf; tep.com/news release | works | - | 2026-10-28
- tep.com/rate-changes/ | fails: approval timeout | TEP news release + public notice | 2026-10-28
- docket.images.azcc.gov/*.pdf, edocket.azcc.gov item-detail | fails: approval required | azcc.gov/news posts (work); news (AZ Luminaria) for ROO, mark Qualified | 2026-10-28
- azcc.gov/news/home/... | works (timeline graphics are images, unreadable) | - | 2026-10-28
- mn.gov/puc via content.govdelivery.com MNPUBUC bulletins | works | - | 2026-10-28

## Industry and news (context only)
- energysage.com/community-solar, /news/home-energy-market-h1-2026-highlights | works (H1 page needs to come from search results) | - | 2026-10-26
- woodmac.com press releases | works (/es/ locale path came back in search) | - | 2026-10-26
- electricchoice.com/utilities/rate-filings, energyfactbook.com | works but stale (no Oct 2026 entries) | don't rely on for recent filings | 2026-10-26
- woodtv.com | fails: client error | other outlet or utility release | 2026-10-26
- azluminaria.org, about.azpm.org, advocacy.consumerreports.org | works | - | 2026-10-28
- yahoo.com/news articles | fails: client error | original outlet | 2026-10-28
- southwestledger.news nodes | works, but display date is today's; real dates are old | check byline date | 2026-10-28
- solarelectricsupply.com product pages (module specs) | works | prefer manufacturer datasheet | 2026-10-28
- newstribune.com, fultonsun.com | fails: robots disallowed | stlpr.org, kbia.org copy | 2026-10-27
- stlpr.org, kfvs12.com | works | - | 2026-10-27
- solarexaminer.com (our own site) via WebFetch | fails this run: approval timeout | retry later in run; note in report | 2026-10-27
- unsplash.com photo pages and /s/photos search pages | works; check license (Unsplash+ premium photos are not free); few free water-heater photos | - | 2026-10-28
