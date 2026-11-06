# Source playbook

One line per source: domain or page | works / fails (how) | workaround | date checked. Read before research; never fetch a source marked fails. Keep under ~80 lines.


## Federal
- irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-...-obbb | works (25D termination, "made when original installation is completed") | - | 2026-11-05
- eta-publications.lbl.gov 2026-08 distributed_solar_storage-2026_data_update_final.pdf | works; national median $/W levels chart-only | Mercom for chart values (Qualified) | 2026-11-05
- eia.gov/electricity/monthly/update/end-use.php | works only after it comes back in a WebSearch (direct fetch timed out on approval 2026-10-31; the eia.gov/... no-www copy from search worked) | search "EIA Electricity Monthly Update end-use residential average retail price" | 2026-10-31
- eia.gov/tools/FAQs/faq.php?id=97&t=3 | works (2022 consumption, 899 kWh/month; page last updated Jan. 2024) after WebSearch | search "EIA how much electricity does an American home use" first | 2026-11-03
- eia.gov/electricity/sales_revenue_price/pdf/table_5a.pdf (2024 avg monthly kWh and bill by state) | works via WebFetch from search; curl to eia.gov blocked by proxy (403) | - | 2026-11-03
- eia.gov/electricity/monthly/update/print-version.php | works (latest month U.S. sector prices, sales, CDDs; Aug 2026 data) | - | 2026-11-03
- eia.gov/energyexplained/use-of-energy/electricity-use-in-homes.php | works with the ?os=os copy from search (end-use shares 2020); bare URL without search: approval | WebSearch for it first | 2026-11-03
- nrel.gov/state-local-tribal/blog/posts/stat-faqs-part2-lifetime-of-pv-panels.html | works only after it comes back in a WebSearch (direct fetch from our own post's link: approval timeout) | search "NREL STAT FAQs part 2 lifetime of PV panels" | 2026-11-04
- nrel.gov/docs/fy13osti/56690.pdf, nrel.gov/docs/fy22osti/83487.pdf (degradation slides) | works from search | - | 2026-11-04
- energy.gov/node/4830605 (PV fleet 0.75%/yr story); energy.gov/eere/solar/articles/replacing-your-roof... | works after WebSearch returns them (direct: approval timeout) | search the headline first | 2026-11-04
- irs.gov/instructions/i5695 | works (25C ends after Dec. 31, 2025) | - | 2026-10-28
- eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a (state Table 5.6.A) | fails: server error / XLS links only | Table 5.3 for U.S. figures; data/eia_prices.yaml for states | 2026-10-26
- www1.eere.energy.gov 2023_CAC_Standards_FAQ PDF | works only after it comes back in a WebSearch (direct fetch: approval timeout) | search "2023 CAC standards FAQ HSPF2" | 2026-11-02
- energy.gov/energysaver/air-source-heat-pumps | fails: approval timeout | energy.gov/energysaver/heat-and-cool/heat-pump-systems/air-source-heat-pumps (works) | 2026-11-02
- energy.gov/energysaver/articles/estimating-appliance-and-home-electronic-energy-use | fails: client error | energy.gov/node/365749 | 2026-10-27

## State regulators and utilities
- minnesotapower.blob.core.windows.net .../PressReleases/2026/PressRelease*.pdf (Minnesota Power releases; links from mnpower.com/Company/PressReleases) | works (rate request Nov. 2, 2026; bill credits Oct. 9; no docket numbers) | - | 2026-11-05
- mnpower.com home page; mnpower.com/CustomerService/NewElectricRates | fails: approval timeout / 404 | mnpower.com/Company/PressReleases (works, from search) | 2026-11-05
- efiling.web.commerce.state.mn.us document downloads (MN eDockets) | fails: client error | company release; news for docket | 2026-11-05
- we-energies.com/olb/26/*.pdf (customer notices: 2026-05-we-rr.pdf requested rates; 2026-01-we-electric-rates.pdf tariff) | works (text PDFs) | - | 2026-10-31
- occ.ohio.gov/factsheet (Ohio Consumers' Counsel, e.g. 26-0347-EL-AIR) | works (per-utility $/month at 1,000 kWh) | - | 2026-10-31
- utc.wa.gov/casedocket/2026/260005 (PSE rate case summary) | works | - | 2026-10-26
- utc.wa.gov/casedocket/.../orders and /docsets subtabs | fails: approval required | WebSearch docket number; pse.com rate case page | 2026-10-26
- pse.com/en/pages/rates/pending-utc-filings/2026-general-rate-case | works (residential % and $/month at 800 kWh) | - | 2026-10-26
- evergy.com rate review page | fails: blocked | PSC press releases and EFIS | 2026-10-25
- efis.psc.mo.gov/Document/Display/880663 (Ameren ER-2026-0291 filing) | works (schedules 1, 3, 5) | - | 2026-10-27
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
- docs.cpuc.ca.gov Published/Efile PDFs | works | - | 2026-10-29
- michigan.gov/ag/news/press-releases/2026/... (MI Attorney General) | works (amounts, residential %, ROE; rarely case numbers) | - | 2026-10-30
- U-22070 case filings (MPSC e-dockets) | not found via search | AG releases + news (Qualified) | 2026-10-30
- santeecooper.com/rates/rate-study/residential/ and /Rates/Rate-Study/ ; RatesDocuments2026 PDFs (May 1 presentation, ORS letter, fact sheet) from search | works | - | 2026-11-01
- santeecooper.com Revised-Proposed-Rates-2027/2028 PDFs and newsroom.santeecooper.com 2027-2028 release (links taken from the rate study page) | fails: approval timeout; not returned by WebSearch | rate study + residential pages; ORS letter | 2026-11-01
- eia.gov/electricity/monthly/epm_table_grapher.php?+t=epmt_5_3 (Table 5.3, from search) | works, but WebFetch may serve a stale cached vintage (returned June data on 2026-11-03) | check release date in result; use print-version.php | 2026-11-03
- flashalert.net/id/PacificPower (Pacific Power's own release feed) | works (full release text incl. tables) | - | 2026-11-02
- pacificpower.net Oregon rate-proposal and oregon-regulatory-filings pages; newsroom releases | works | - | 2026-11-02
- pacificpower.net docket-ue-470-advice-26-011 subpage (link from filings page) | fails: approval timeout | edocs.puc.state.or.us PDFs from search; FlashAlert release | 2026-11-02
- edocs.puc.state.or.us/efdocs/*.pdf (OPUC dockets, from search) | works; UE 470 settlement doc not found via search | - | 2026-11-02
- oregon.gov/puc/Pages/Upcoming-Decisions.aspx (pending rate cases; UE 473 comment hearing) | works; comment link for UE 473 pointed to UE 470 docket on 2026-11-04 | - | 2026-11-04
- oregon.gov/puc/news-events/Documents/PR-202606.pdf | works when from search; re-fetch by a subagent from a draft link timed out on approval | WebSearch first | 2026-11-04
- oregoncub.org blog (Oregon CUB) | works (docket numbers, $ amounts, ROE; advocate) | - | 2026-11-04
- portlandgeneral.com/2027-general-rate-case | works (3.9% residential, $8.33 at 780 kWh, July 2027, hearing Nov. 10; no docket number) | - | 2026-11-03
- occ.ohio.gov/factsheet/firstenergy-rate-increase-26-0347-el-air | works; "Hearing dates have not yet been scheduled" | - | 2026-11-03
- blackhillsenergy.com 2026-colorado-electric-regulatory-rate-review | works ($10.90, 8.8%, March 2027; no proceeding number) | gcn.com for 26AL-0232E | 2026-11-03

- puc.sd.gov docket pages (Dockets/Electric/2026/<docket>.aspx), News/2026 releases, agendas | works | - | 2026-11-06
- puc.sd.gov docket PDFs (commission/dockets/electric/...) | works only if the exact URL came back in a WebSearch or fetched page text; URLs read off a docket page by WebFetch sometimes rejected (provenance) | WebSearch "<docket> <document name>" first, or ask the docket page fetch for "exact full href URLs" | 2026-11-06
- puc.sd.gov/commission/publication/solarfaq.pdf | works after search (no net metering; avoided cost) | - | 2026-11-06
- Oklahoma PSO rate order (Nov. 5, 2026) | no official order/release found; imaging.occ.ok.gov/AP/Orders PDFs appear in search | KGOU, tulsaflyer.org (news, Qualified); nondoc.com fails (client error) | 2026-11-06

## Industry and news (context only)
- news that works (context only; check dates): wpde.com, krmg.com, ktvz.com (after search), kpic.com, gcn.com, kfyrtv.com, wral.com, stlpr.org, kfvs12.com, tulsaflyer.org, fox21online.com, northernnewsnow.com, wpr.org, whyy.org | works | - | 2026-11-06
- other regulator/company pages that work: psc.mo.gov releases, efis.psc.mo.gov calendars, ameren.mediaroom.com, puc.colorado.gov, puc.pa.gov PDFs, oregon.gov/puc PR PDFs (search first), portlandgeneral.com news, cubwi.org (advocate), energysage.com/news H1 2026, eia.gov/dnav gas prices, atb.nrel.gov 2023 PV | works | - | 2026-11-06
- southdakotasearchlight.com, keloland.com, kbhbradio.com | fails: client error | rapidcitypost.com (PUC News reprints), sdpb.org, kotatv.com (work) | 2026-11-06
- energysage.com/energy-storage/how-much-do-batteries-cost | works (updated Jul 13, 2026; $15,647 has no stated data period) | - | 2026-11-06
- atb.nlr.gov (NREL ATB now "National Laboratory of the Rockies") residential battery page | works but cost values are image-only | - | 2026-11-06
- irs.gov/credits-deductions/residential-clean-energy-credit | works (3 kWh battery minimum; ends after 2025) | - | 2026-11-06
- southwestledger.news | fails: robots disallowed | tulsaflyer.org, krmg.com, fox23.com | 2026-11-05
- mercomindia.com | works (reads LBNL chart values; Qualified) | - | 2026-11-05
- pv-magazine.com 2026 article URLs | fails: 302 to http | pv-tech.org or EnergySage original | 2026-11-05
- unsplash: most residential-solar and home-battery photos on /s/photos/solar-panels-on-roof, /solar-powered, /battery-storage, /home-battery are already used on site (checked 2026-11-06); always grep photo IDs and images.unsplash.com IDs before download | - | 2026-11-06
- solarunitedneighbors.org guides | works after WebSearch (direct: approval timeout) | search the headline | 2026-11-04
- manufacturer datasheets via third-party copies (energymatters.com.au Enphase IQ8 US; vicoexport.com Qcells) | works (text PDFs); disclose third-party copy | - | 2026-11-04
- michiganadvance.com, ohiocapitaljournal.com | fails: client error | AG/regulator release, fox2detroit.com, fox17online.com, michiganpublic.org, wnem.com (work) | 2026-10-30
- scdailygazette.com | fails: client error | wpde.com, wbtw.com (check dates; many 2024 hits) | 2026-11-01
- unsplash | unsplash.com/s/photos/<term> pages from WebSearch work (list free vs Unsplash+ with images.unsplash.com URLs); photo pages from search work; curl unsplash.com 401 -> curl images.unsplash.com URL; check photo ID against content/posts before use | - | 2026-11-04
- hugo binary | not installable here (pip wheels start at 0.147.8; go/GitHub blocked; pip install blocked by classifier) | rely on Cloudflare build + live WebFetch check; validate front matter with python yaml | 2026-11-04