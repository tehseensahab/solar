# Source playbook

One line per source: domain or page | works / fails (how) | workaround | date checked. Read before research; never fetch a source marked fails. Keep under ~80 lines.


## Federal
- eia.gov/electricity/monthly/update/end-use.php | works only after it comes back in a WebSearch (direct fetch timed out on approval 2026-10-31; the eia.gov/... no-www copy from search worked) | search "EIA Electricity Monthly Update end-use residential average retail price" | 2026-10-31
- eia.gov/tools/FAQs/faq.php?id=97&t=3 | works (2022 consumption, 899 kWh/month; page last updated Jan. 2024) after WebSearch | search "EIA how much electricity does an American home use" first | 2026-11-03
- eia.gov/electricity/sales_revenue_price/pdf/table_5a.pdf (2024 avg monthly kWh and bill by state) | works via WebFetch from search; curl to eia.gov blocked by proxy (403) | - | 2026-11-03
- eia.gov/electricity/monthly/update/print-version.php | works (latest month U.S. sector prices, sales, CDDs; Aug 2026 data) | - | 2026-11-03
- eia.gov RECS 2020 CE8.5.M monthly electricity PDF | works from search | - | 2026-11-03
- eia.gov/energyexplained/use-of-energy/electricity-use-in-homes.php | works with the ?os=os copy from search (end-use shares 2020); bare URL without search: approval | WebSearch for it first | 2026-11-03
- irs.gov/instructions/i5695 | works (25C ends after Dec. 31, 2025) | - | 2026-10-28
- atb.nrel.gov/electricity/2023/residential_pv | works after search (capacity factors by class, kWDC) | - | 2026-10-30
- eta-publications.lbl.gov Distributed Solar & Storage 2026 data update PDF | works (2025 median 7.7 kW; 37% battery attach); figure-only values not readable | - | 2026-10-27
- irs.gov/node/150421 (FS-2025-05, 25C/25D expiry FAQ) | works | - | 2026-10-26
- eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a (state Table 5.6.A) | fails: server error / XLS links only | Table 5.3 for U.S. figures; data/eia_prices.yaml for states | 2026-10-26
- eia.gov/dnav/ng/hist/n3010us3a.htm (U.S. residential natural gas price, annual) | works from search | - | 2026-11-02
- eia.gov/EnergyExplained/units-and-calculators/british-thermal-units.php | works (3,412 Btu/kWh; 1,036 Btu/cf; therm) | - | 2026-11-02
- eia.gov RECS 2020 CE8.6.M space-heating electricity PDF | works, but no split by equipment or climate | - | 2026-11-02
- energy.gov/node/374305 (Energy Saver, Furnaces and Boilers) | works (AFUE ranges) | - | 2026-11-02
- www1.eere.energy.gov appliance_standards product.aspx/productid/72 (furnace minimums) | works | - | 2026-11-02
- www1.eere.energy.gov 2023_CAC_Standards_FAQ PDF | works only after it comes back in a WebSearch (direct fetch: approval timeout) | search "2023 CAC standards FAQ HSPF2" | 2026-11-02
- energy.gov/energysaver/air-source-heat-pumps | fails: approval timeout | energy.gov/energysaver/heat-and-cool/heat-pump-systems/air-source-heat-pumps (works) | 2026-11-02
- energy.gov/energysaver/articles/estimating-appliance-and-home-electronic-energy-use | fails: client error | energy.gov/node/365749 | 2026-10-27

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
- psc.mo.gov press releases; efis.psc.mo.gov documents | works | - | 2026-10-25
- evergy.com rate review page | fails: blocked | PSC press releases and EFIS | 2026-10-25
- efis.psc.mo.gov/Calendar/Display/<case id> (procedural schedule) | works | - | 2026-10-27
- efis.psc.mo.gov/Document/Display/880663 (Ameren ER-2026-0291 filing) | works (schedules 1, 3, 5) | - | 2026-10-27
- ameren.mediaroom.com releases; ameren.com/missouri solar-faqs | works | - | 2026-10-27
- prnewswire.com release URLs taken from another page | fails: approval required | use the company mediaroom copy from search | 2026-10-27
- docs.tep.com TEP-2026-Rates-Public-Notice.pdf; tep.com/news release | works | - | 2026-10-28
- tep.com/rate-changes/ | fails: approval timeout | TEP news release + public notice | 2026-10-28
- docket.images.azcc.gov/*.pdf, edocket.azcc.gov item-detail | fails: approval required | azcc.gov/news posts (work); news (AZ Luminaria) for ROO, mark Qualified | 2026-10-28
- azcc.gov/news/home/... | works (timeline graphics are images, unreadable) | - | 2026-10-28
- starw1.ncuc.gov ViewFile.aspx (NCUC orders, e.g. E-100 Sub 180 NEM order) | works (long; use offset 100000 for the end) | - | 2026-10-29
- publicstaff.nc.gov/electric/net-metering | works | - | 2026-10-29
- duke-energy.com and p-cd.duke-energy.com tariff/rider PDFs, duke-energy.com/home/billing/rates | fails: client error or approval timeout | NCUC orders, NC Public Staff | 2026-10-29
- interchange.puc.texas.gov/Documents/*.PDF (PUCT dockets, e.g. 58819) | fails: client error on every doc tried | swepco.com notice PDFs from search; no workaround found for settlement | 2026-10-29
- swepco.com/company/about/rates/tx; SWEPCORATECHANGEREQUEST...pdf | works | - | 2026-10-29
- eversource.com NH news releases | works | - | 2026-10-29
- docs.cpuc.ca.gov Published/Efile PDFs | works | - | 2026-10-29
- michigan.gov/ag/news/press-releases/2026/... (MI Attorney General) | works (amounts, residential %, ROE; rarely case numbers) | - | 2026-10-30
- adms.apps.lara.state.mi.us/Mpsc/ViewNoticeDocument/* | works, but search returns notices for other cases; check case number | - | 2026-10-30
- consumersenergy.com/residential/savings-and-clean-energy/renewable-energy/distributed-generation | works (outflow credit wording) | - | 2026-10-30
- michigan.gov/mpsc/consumer/electricity/distributed-generation | works (550 kW, 110% rule) | - | 2026-10-30
- U-22070 case filings (MPSC e-dockets) | not found via search | AG releases + news (Qualified) | 2026-10-30
- santeecooper.com/rates/rate-study/residential/ and /Rates/Rate-Study/ ; RatesDocuments2026 PDFs (May 1 presentation, ORS letter, fact sheet) from search | works | - | 2026-11-01
- santeecooper.com Revised-Proposed-Rates-2027/2028 PDFs and newsroom.santeecooper.com 2027-2028 release (links taken from the rate study page) | fails: approval timeout; not returned by WebSearch | rate study + residential pages; ORS letter | 2026-11-01
- eia.gov/electricity/monthly/epm_table_grapher.php?+t=epmt_5_3 (Table 5.3, from search) | works, but WebFetch may serve a stale cached vintage (returned June data on 2026-11-03) | check release date in result; use print-version.php | 2026-11-03
- flashalert.net/id/PacificPower (Pacific Power's own release feed) | works (full release text incl. tables) | - | 2026-11-02
- pacificpower.net Oregon rate-proposal and oregon-regulatory-filings pages; newsroom releases | works | - | 2026-11-02
- pacificpower.net docket-ue-470-advice-26-011 subpage (link from filings page) | fails: approval timeout | edocs.puc.state.or.us PDFs from search; FlashAlert release | 2026-11-02
- edocs.puc.state.or.us/efdocs/*.pdf (OPUC dockets, from search) | works; UE 470 settlement doc not found via search | - | 2026-11-02
- oregon.gov/puc/news-events/Documents/PR-*.pdf | works | - | 2026-11-02
- portlandgeneral.com/2027-general-rate-case | works (3.9% residential, $8.33 at 780 kWh, July 2027, hearing Nov. 10; no docket number) | - | 2026-11-03
- occ.ohio.gov/factsheet/firstenergy-rate-increase-26-0347-el-air | works; "Hearing dates have not yet been scheduled" | - | 2026-11-03
- blackhillsenergy.com 2026-colorado-electric-regulatory-rate-review | works ($10.90, 8.8%, March 2027; no proceeding number) | gcn.com for 26AL-0232E | 2026-11-03
- ors.sc.gov news pages | works, but no dates on page ("Published Date Month Only"); many hits are 2025 cases | - | 2026-11-03

## Industry and news (context only)
- wpr.org news pages | works (check article date; several search hits are 2023-2025) | - | 2026-10-31
- cardinalnews.org | works (APCo VA settlement Oct. 2026; no case number) | - | 2026-10-31
- stoel.com energy-regulatory-updates weekly | works (CPUC/MPUC agenda items) | - | 2026-10-31
- michiganadvance.com, ohiocapitaljournal.com | fails: client error | AG/regulator release, fox2detroit.com, fox17online.com, michiganpublic.org, wnem.com (work) | 2026-10-30
- gcn.com, kfyrtv.com, wral.com, stlpr.org, kfvs12.com | works (news; case numbers, timelines) | - | 2026-10-30
- unsplash.com photo pages and /s/photos search pages | works; check license (Unsplash+ premium photos are not free); few free water-heater photos | - | 2026-10-28
- scdailygazette.com | fails: client error | wpde.com, wbtw.com (check dates; many 2024 hits) | 2026-11-01
- wpde.com, krmg.com, ktvz.com, whyy.org, nbcphiladelphia.com | works (news) | - | 2026-11-01
- unsplash covers | check photo ID against content/posts before use; many meter/power-line photos already used | - | 2026-11-01
- ktvz.com articles | works only after WebSearch returns the exact URL (URL from IDEAS.md: approval timeout) | search the headline first | 2026-11-02
- digital-release.koin.com | works, but search returned a 2024 article; check date | - | 2026-11-02
- elkhornmediagroup.com | works (reprints utility tables) | - | 2026-11-02
- hugo binary | pip wheels start at 0.147.8 (no 0.123.7); go install blocked (proxy.golang.org connect_rejected); GitHub releases blocked | rely on Cloudflare Pages build + live WebFetch check | 2026-11-02
- unsplash: curl of unsplash.com 401 | WebFetch photo page for images.unsplash.com URL, then curl that (works); photo pages linked from a fetched search page (not from WebSearch) can time out on approval: use the search page's listing (license, image URL) | 2026-11-03
- unsplash /s/photos/<term> search pages from WebSearch | works (lists free vs Unsplash+ with image URLs) | - | 2026-11-03
- hugo via pip | install blocked by auto-mode classifier 2026-11-03 | rely on Cloudflare build + live WebFetch check | 2026-11-03