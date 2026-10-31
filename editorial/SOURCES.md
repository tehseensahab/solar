# Source playbook

One line per source: domain or page | works / fails (how) | workaround | date checked. Read before research; never fetch a source marked fails. Keep under ~80 lines.

## Federal
- fueleconomy.gov (Find.do side-by-side pages) | fails: robots_disallowed | DOE Fact of the Week pages (energy.gov/cmei/vehicles/articles/fotw-...) and EPA greenvehicles pages | 2026-10-31
- afdc.energy.gov/fuels/electricity-charging-home | works | - | 2026-10-31
- epa.gov/greenvehicles/fuel-economy-and-ev-range-testing; epa.gov/node/279539 (charging text page); epa.gov/automotive-trends highlights | works | - | 2026-10-31
- eia.gov/PETROLEUM/GASDIESEL/ (weekly gasoline) | works (from search result) | - | 2026-10-31
- eia.gov/electricity/monthly/update/print-version.php (Electricity Monthly Update) | fails 2026-10-28: approval timeout when fetched directly | surface via WebSearch first; worked 2026-10-26 | 2026-10-28
- eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a (Table 5.6.A) | fails: WebFetch server error, or page shows only XLS links, no values | none found without approval; state residential table not readable unattended. Use print-version for U.S. figure only | 2026-10-26
- eia.gov/electricity/monthly/xls/*.xlsx, eia.gov/electricity/monthly/epm_table_grapher.php (typed directly) | fails: WebFetch asks for approval | surface URL via WebSearch first; xlsx still not parseable | 2026-10-26
- eia.gov/electricity/monthly/update/end-use.php | works only after it comes back in a WebSearch (direct fetch timed out on approval 2026-10-31; the eia.gov/... no-www copy from search worked) | search "EIA Electricity Monthly Update end-use residential average retail price" | 2026-10-31
- eia.gov/tools/FAQs/faq.php?id=97&t=3 | works (2022 consumption, 899 kWh/month) only after it comes back in a WebSearch; direct fetch asks for approval | search "EIA how much electricity does an American home use" first | 2026-10-27
- eia.gov/energyexplained/use-of-energy/electricity-use-in-homes.php | fails 2026-10-28 when fetched without a fresh search result (approval) | WebSearch for it first | 2026-10-28
- irs.gov/instructions/i5695 | works (25C ends after Dec. 31, 2025) | - | 2026-10-28
- energy.gov/energysaver/articles/estimating-appliance-and-home-electronic-energy-use | fails: client error | use energy.gov/node/365749 (same article) from search results | 2026-10-27
- atb.nrel.gov/electricity/2023/residential_pv | works after search (capacity factors by class, kWDC) | - | 2026-10-30
- cdn.myced.com product datasheet PDFs | fails: approval timeout | greentechrenewables.com product page (works; distributor, Qualified) | 2026-10-30
- eta-publications.lbl.gov Distributed Solar & Storage 2026 data update PDF | works (2025 median 7.7 kW; 37% battery attach); figure-only values not readable | - | 2026-10-27
- irs.gov/node/150421 (FS-2025-05, 25C/25D expiry FAQ) | works | - | 2026-10-26

## State regulators and utilities
- we-energies.com/olb/26/*.pdf (customer notices: 2026-05-we-rr.pdf requested rates; 2026-01-we-electric-rates.pdf tariff) | works (text PDFs) | - | 2026-10-31
- news.we-energies.com releases | works | Oct. 8, 2026 fuel-credit release not on site via search; urbanmilwaukee.com reprint works | 2026-10-31
- cubwi.org (Citizens Utility Board of WI) case pages | works (calendar, figures; advocacy, Qualified) | - | 2026-10-31
- psc.wi.gov docket 5-UR-112 | not found via search | We Energies notice + CUB | 2026-10-31
- occ.ohio.gov/factsheet (Ohio Consumers' Counsel, e.g. 26-0347-EL-AIR) | works (per-utility $/month at 1,000 kWh) | - | 2026-10-31
- utc.wa.gov/casedocket/2026/260005 (PSE rate case summary) | works | - | 2026-10-26
- utc.wa.gov/casedocket/.../orders and /docsets subtabs | fails: approval required | WebSearch docket number; pse.com rate case page | 2026-10-26
- pse.com/en/pages/rates/pending-utc-filings/2026-general-rate-case | works (residential % and $/month at 800 kWh) | - | 2026-10-26
- puc.colorado.gov press releases | works | - | 2026-10-26
- mn.gov/puc general rate case pages; content.govdelivery.com MN PUC bulletins | works | - | 2026-10-26
- puc.pa.gov/pcdocs/*.pdf from search results | works | - | 2026-10-26
- adms.apps.lara.state.mi.us PFD documents | works, but search returns old cases; verify case number | - | 2026-10-26
- psc.mo.gov press releases; efis.psc.mo.gov documents | works | - | 2026-10-25
- evergy.com rate review page | fails: blocked | PSC press releases and EFIS | 2026-10-25
- efis.psc.mo.gov/Calendar/Display/<case id> (procedural schedule) | works | - | 2026-10-27
- efis.psc.mo.gov/Document/Display/880663 (Ameren ER-2026-0291 filing) | works (schedules 1, 3, 5) | - | 2026-10-27
- psc.mo.gov/Electric/... press releases | fails this run: approval timeout (fact-checker) | cite prior verification or EFIS orders | 2026-10-27
- ameren.mediaroom.com releases; ameren.com/missouri solar-faqs | works | - | 2026-10-27
- prnewswire.com release URLs taken from another page | fails: approval required | use the company mediaroom copy from search | 2026-10-27

- docs.tep.com TEP-2026-Rates-Public-Notice.pdf; tep.com/news release | works | - | 2026-10-28
- tep.com/rate-changes/ | fails: approval timeout | TEP news release + public notice | 2026-10-28
- docket.images.azcc.gov/*.pdf, edocket.azcc.gov item-detail | fails: approval required | azcc.gov/news posts (work); news (AZ Luminaria) for ROO, mark Qualified | 2026-10-28
- azcc.gov/news/home/... | works (timeline graphics are images, unreadable) | - | 2026-10-28
- starw1.ncuc.gov ViewFile.aspx (NCUC orders, e.g. E-100 Sub 180 NEM order) | works (long; use offset 100000 for the end) | - | 2026-10-29
- publicstaff.nc.gov/electric/net-metering | works | - | 2026-10-29
- duke-energy.com and p-cd.duke-energy.com tariff/rider PDFs, duke-energy.com/home/billing/rates | fails: client error or approval timeout | NCUC orders, NC Public Staff | 2026-10-29
- duke-energy.com/home/billing/dec-nc-rate-case | works but shows the OLD 2023 case | don't use for current case | 2026-10-29
- interchange.puc.texas.gov/Documents/*.PDF (PUCT dockets, e.g. 58819) | fails: client error on every doc tried | swepco.com notice PDFs from search; no workaround found for settlement | 2026-10-29
- swepco.com/company/about/rates/tx; SWEPCORATECHANGEREQUEST...pdf | works | - | 2026-10-29
- swepco.com TexasRatesChargesandFees PDFs | fails: client error / approval timeout | - | 2026-10-29
- nationalgrid.com/us/ma service-rates page | fails: client error | - | 2026-10-29
- eversource.com NH news releases | works | - | 2026-10-29
- docs.cpuc.ca.gov Published/Efile PDFs | works | - | 2026-10-29
- michigan.gov/ag/news/press-releases/2026/... (MI Attorney General) | works (amounts, residential %, ROE; rarely case numbers) | - | 2026-10-30
- adms.apps.lara.state.mi.us/Mpsc/ViewNoticeDocument/* | works, but search returns notices for other cases; check case number | - | 2026-10-30
- consumersenergy.com/residential/savings-and-clean-energy/renewable-energy/distributed-generation | works (outflow credit wording) | - | 2026-10-30
- michigan.gov/mpsc/consumer/electricity/distributed-generation | works (550 kW, 110% rule) | - | 2026-10-30
- U-22070 case filings (MPSC e-dockets) | not found via search | AG releases + news (Qualified) | 2026-10-30

## Industry and news (context only)
- wpr.org news pages | works (check article date; several search hits are 2023-2025) | - | 2026-10-31
- cardinalnews.org | works (APCo VA settlement Oct. 2026; no case number) | - | 2026-10-31
- stoel.com energy-regulatory-updates weekly | works (CPUC/MPUC agenda items) | - | 2026-10-31
- hugo binary download (github.com releases via curl) | fails: blocked by sandbox permission classifier | rely on Cloudflare Pages build + live WebFetch check | 2026-10-31
- michiganadvance.com, ohiocapitaljournal.com | fails: client error | AG/regulator release, fox2detroit.com, fox17online.com, michiganpublic.org, wnem.com (work) | 2026-10-30
- gcn.com, kfyrtv.com, wral.com, stlpr.org, kfvs12.com | works (news; case numbers, timelines) | - | 2026-10-30
- unsplash.com via curl | fails: 401 bot check | WebFetch the photo page for images.unsplash.com URL, then curl that | 2026-10-30
- energysage.com/community-solar, /news/home-energy-market-h1-2026-highlights | works (H1 page needs to come from search results) | - | 2026-10-26
- yahoo.com/news articles | fails: client error (uk.finance.yahoo.com worked once) | original outlet | 2026-10-29
- energyandpolicy.org | works (advocacy; context only) | - | 2026-10-29
- documentcloud.org documents | fails: approval timeout | - | 2026-10-29
- newstribune.com, fultonsun.com | fails: robots disallowed | stlpr.org, kbia.org copy | 2026-10-27
- solarexaminer.com (our own site) via WebFetch | fails this run: approval timeout | retry later in run; note in report | 2026-10-27
- unsplash.com photo pages and /s/photos search pages | works; check license (Unsplash+ premium photos are not free); few free water-heater photos | - | 2026-10-28
