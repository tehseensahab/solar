# Source playbook

One line per source: domain or page | works / fails (how) | workaround | date checked. Read before research; never fetch a source marked fails. Keep under ~80 lines.

## Federal
- eia.gov/electricity/monthly/update/print-version.php (Electricity Monthly Update) | works: U.S. residential price and state all-sector changes | - | 2026-10-26
- eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a (Table 5.6.A) | fails: WebFetch server error, or page shows only XLS links, no values | none found without approval; state residential table not readable unattended. Use print-version for U.S. figure only | 2026-10-26
- eia.gov/electricity/monthly/xls/*.xlsx, eia.gov/electricity/monthly/epm_table_grapher.php (typed directly) | fails: WebFetch asks for approval | surface URL via WebSearch first; xlsx still not parseable | 2026-10-26
- eia.gov/electricity/monthly/?src=email | works: release date, data month, links | - | 2026-10-26
- eia.gov/tools/FAQs/faq.php?id=97&t=3 | works (2022 consumption, 899 kWh/month) | - | 2026-10-26
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
- oklahoma.gov/oag newsroom (PSO settlement) | works | - | 2026-10-26

## Industry and news (context only)
- energysage.com/community-solar, /news/home-energy-market-h1-2026-highlights | works (H1 page needs to come from search results) | - | 2026-10-26
- woodmac.com press releases | works (/es/ locale path came back in search) | - | 2026-10-26
- electricchoice.com/utilities/rate-filings, energyfactbook.com | works but stale (no Oct 2026 entries) | don't rely on for recent filings | 2026-10-26
- woodtv.com | fails: client error | other outlet or utility release | 2026-10-26
- unsplash.com photo pages | works; check license (Unsplash+ premium photos are not free) | - | 2026-10-26
