# Source playbook

One line per source: domain or page | works / fails (how) | workaround | date checked. Read before research; never fetch a source marked fails. Keep under ~80 lines.

## Federal
- irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-...-obbb | works (25D termination, "made when original installation is completed") | - | 2026-11-05
- eta-publications.lbl.gov 2026-08 distributed_solar_storage-2026_data_update_final.pdf | works; national median $/W levels chart-only | Mercom for chart values (Qualified) | 2026-11-05
- eia.gov/electricity/monthly/update/end-use.php | works only after it comes back in a WebSearch (direct fetch timed out on approval 2026-10-31; the eia.gov/... no-www copy from search worked) | search "EIA Electricity Monthly Update end-use residential average retail price" | 2026-10-31
- eia.gov/electricity/sales_revenue_price/pdf/table_5a.pdf (2024 avg monthly kWh and bill by state) | works via WebFetch from search; curl to eia.gov blocked by proxy (403) | - | 2026-11-03
- eia.gov/electricity/monthly/update/print-version.php | works (latest month U.S. sector prices, sales, CDDs; Aug 2026 data) | - | 2026-11-03
- eia.gov/energyexplained/use-of-energy/electricity-use-in-homes.php | works with the ?os=os copy from search (end-use shares 2020); bare URL without search: approval | WebSearch for it first | 2026-11-03
- irs.gov/instructions/i5695 | works (25C ends after Dec. 31, 2025) | - | 2026-10-28
- eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a (state Table 5.6.A) | fails: server error / XLS links only | Table 5.3 for U.S. figures; data/eia_prices.yaml for states | 2026-10-26

## State regulators and utilities
- minnesotapower.blob.core.windows.net .../PressReleases/2026/PressRelease*.pdf (Minnesota Power releases; links from mnpower.com/Company/PressReleases) | works (rate request Nov. 2, 2026; bill credits Oct. 9; no docket numbers) | - | 2026-11-05
- mnpower.com home page; mnpower.com/CustomerService/NewElectricRates | fails: approval timeout / 404 | mnpower.com/Company/PressReleases (works, from search) | 2026-11-05
- efiling.web.commerce.state.mn.us document downloads (MN eDockets) | fails: client error | company release; news for docket | 2026-11-05
- we-energies.com/olb/26/*.pdf (customer notices: 2026-05-we-rr.pdf requested rates; 2026-01-we-electric-rates.pdf tariff) | works (text PDFs) | - | 2026-10-31
- utc.wa.gov/casedocket/2026/260005 (PSE rate case summary) | works (status only, no $) | - | 2026-11-07
- apiproxy.utc.wa.gov/cases/GetDocument?docID=...&docketNumber=260005 (UTC filed testimony PDFs) | works when returned by WebSearch "UE-260005 <exhibit>" | - | 2026-11-07
- utc.wa.gov/casedocket/.../orders and /docsets subtabs | fails: approval required | WebSearch docket number + exhibit name | 2026-10-26
- pse.com .../8752_PublicCommentHearingNoticeOnGRC_0526_Web.pdf (PSE GRC notice: %, $M, 800 kWh bills 2027-29, basic charge) | works | - | 2026-11-07
- pse.com/en/pages/rates/pending-utc-filings | works; its 2026-general-rate-case subpage and general-rate-case-statement fail (provenance / 404) | use the hearing notice PDF | 2026-11-07
- evergy.com rate review page | fails: blocked | PSC press releases and EFIS | 2026-10-25
- efis.psc.mo.gov/Document/Display/880663 (Ameren ER-2026-0291 filing) | works (schedules 1, 3, 5) | - | 2026-10-27
- docs.tep.com TEP-2026-Rates-Public-Notice.pdf; tep.com/news release | works | - | 2026-10-28
- tep.com/rate-changes/ | fails: approval timeout | TEP news release + public notice | 2026-10-28
- docket.images.azcc.gov/*.pdf, edocket.azcc.gov item-detail | fails: approval required | azcc.gov/news posts (work); news (AZ Luminaria) for ROO, mark Qualified | 2026-10-28
- azcc.gov/news/home/... | works (timeline graphics are images, unreadable) | - | 2026-10-28
- starw1.ncuc.gov ViewFile.aspx (NCUC orders, e.g. E-100 Sub 180 NEM order) | works (long; use offset 100000 for the end) | - | 2026-10-29
- publicstaff.nc.gov/electric/net-metering | works | - | 2026-10-29
- duke-energy.com and p-cd.duke-energy.com tariff/rider PDFs, duke-energy.com/home/billing/rates | fails: client error or approval timeout | NCUC orders, NC Public Staff | 2026-10-29
- interchange.puc.texas.gov/Documents/*.PDF (PUCT dockets, e.g. 58819) | fails: client error on every doc tried | swepco.com notice PDFs from search; no workaround found for settlement | 2026-10-29
- docs.cpuc.ca.gov Published/Efile PDFs | works | - | 2026-10-29
- michigan.gov/ag/news/press-releases/2026/... (MI Attorney General) | works (amounts, residential %; rarely case numbers; Feb. 19 2026 DTE decision release substitutes for michiganadvance.com) | - | 2026-11-09
- mi-psc.my.site.com/sfc/servlet.shepherd/version/download/... (MPSC e-docket files, e.g. U-22046 DTE application, rate case summary) | works when the URL comes back in WebSearch (search "U-22046 DTE Elec Application"); application Attachment 2 = class %, Attachment 3 = bills by kWh | - | 2026-11-09
- spglobal.com/market-intelligence research articles (e.g. MPSC staff testimony summaries) | works; article text sits past offset 100000 | mark Qualified (trade press) | 2026-11-09
- cubofmichigan.org/blog | works (testimony summaries, PFD dates; advocate) | - | 2026-11-09
- eia.gov/electricity/monthly/epm_table_grapher.php?+t=epmt_5_3 (Table 5.3, from search) | works, but WebFetch may serve a stale cached vintage (returned June data on 2026-11-03) | check release date in result; use print-version.php | 2026-11-03
- flashalert.net/id/PacificPower (Pacific Power's own release feed) | works (full release text incl. tables) | - | 2026-11-02
- pacificpower.net Oregon rate-proposal and oregon-regulatory-filings pages; newsroom releases | works | - | 2026-11-02
- pacificpower.net docket-ue-470-advice-26-011 subpage (link from filings page) | fails: approval timeout | edocs.puc.state.or.us PDFs from search; FlashAlert release | 2026-11-02
- edocs.puc.state.or.us/efdocs/*.pdf (OPUC dockets, from search) | works; UE 470 settlement doc not found via search | - | 2026-11-02
- oregon.gov/puc/news-events/Documents/PR-202606.pdf | works when from search; re-fetch by a subagent from a draft link timed out on approval | WebSearch first | 2026-11-04
- oregoncub.org blog (Oregon CUB) | works (docket numbers, $ amounts, ROE; advocate) | - | 2026-11-04
- portlandgeneral.com/2027-general-rate-case | works (3.9% residential, $8.33 at 780 kWh, July 2027, hearing Nov. 10; no docket number) | - | 2026-11-03
- occ.ohio.gov/factsheet/firstenergy-rate-increase-26-0347-el-air | works; "Hearing dates have not yet been scheduled" | - | 2026-11-03

- puc.sd.gov docket pages (Dockets/Electric/2026/<docket>.aspx), News/2026 releases, agendas | works | - | 2026-11-06
- puc.sd.gov docket PDFs (commission/dockets/electric/...) | works only if the exact URL came back in a WebSearch or fetched page text; URLs read off a docket page by WebFetch sometimes rejected (provenance) | WebSearch "<docket> <document name>" first, or ask the docket page fetch for "exact full href URLs" | 2026-11-06
- Oklahoma PSO rate order (Nov. 5, 2026) | still no order/release or residential $ on 2026-11-10 (okcfox: "exact bill impacts ... to be determined") | KGOU, kosu.org, newson6.com, tulsaflyer.org, okcfox.com (news); nondoc.com fails | 2026-11-10
- sec.gov WEC 8-K (wec-20261105.htm) | works; Exhibit 99.1 slide URLs from Stock Titan fail (provenance) | stocktitan.net 8-K copies (work; label third-party copy) | 2026-11-07
- news.wisconsinpublicservice.com releases | works | - | 2026-11-07
- apps.apsc.arkansas.gov (docket search and PDFs), arkansasonline.com, nwaonline.com, arktimes.com, eldoradonews.com | fails: robots disallowed | entergyarkansas.com/ratecase2026, arkansasadvancedenergy.com | 2026-11-07

- pacificpower.net california-rate-changes.html and .../california/filings/docket-*/ PDFs (from search) | works (CA GRC: 57%, 14% offset, Jan. 1, 2027; no $ or docket) | - | 2026-11-08

- pplelectric.com/shopping (PPL Price to Compare, current and next period), /rateinfo, net-metering cash-out and renewable billing pages (from search) | works | - | 2026-11-10
- puc.pa.gov/press-release/... (PA PUC releases; PTC tables each June 1 / Dec. 1, usually late Nov.) | works only after a WebSearch returns the URL (direct fetch refused, provenance) | search the headline first | 2026-11-10
- puc.pa.gov/docket/<M-...> pages | works (lists filings + pcdocs PDF links); PECO Dec. 1, 2026 GSA docket not found via search | energychoicematters.com (trade press, Qualified) | 2026-11-10
- peco.com ElectricPricetoCompare.aspx | fails: renders empty | PUC release (late Nov.), peco.com tariff PDFs from search, energychoicematters.com | 2026-11-10
- electricityrates.com, electricrates.org, myutilitysearch.com (PTC "news") | works but unsourced; PECO summer figure conflicted with PUC | do not use; go to utility page or PUC | 2026-11-10
- lehighvalleynews.com | 302 redirect to lehighvalleypublicmedia.org; many Dec. 1 hits are 2024-25 | check dates | 2026-11-10

## Industry and news (context only)
- news that works (context only; check dates): wpr.org, nbc26.com, fox11online.com, wisconsinwatch.org, wisn.com, yahoo.com syndications, mynorthwest.com, fox13seattle.com (.amp), wpde.com, krmg.com, ktvz.com (after search), kpic.com, gcn.com, kfyrtv.com, wral.com, stlpr.org, kfvs12.com, tulsaflyer.org, fox21online.com, northernnewsnow.com, wpr.org, whyy.org | works | - | 2026-11-06
- other regulator/company pages that work: psc.mo.gov releases, efis.psc.mo.gov calendars, ameren.mediaroom.com, puc.colorado.gov, puc.pa.gov PDFs, oregon.gov/puc PR PDFs (search first), portlandgeneral.com news, cubwi.org (advocate), energysage.com/news H1 2026, eia.gov/dnav gas prices, atb.nrel.gov 2023 PV | works | - | 2026-11-06
- southdakotasearchlight.com, keloland.com, kbhbradio.com | fails: client error | rapidcitypost.com (PUC News reprints), sdpb.org, kotatv.com (work) | 2026-11-06
- southwestledger.news | fails: robots disallowed | tulsaflyer.org, krmg.com, fox23.com | 2026-11-05
- mercomindia.com | works (reads LBNL chart values; Qualified) | - | 2026-11-05
- pv-magazine.com 2026 article URLs | fails: 302 to http | pv-tech.org or EnergySage original | 2026-11-05
- manufacturer datasheets via third-party copies (energymatters.com.au Enphase IQ8 US; vicoexport.com Qcells) | works (text PDFs); disclose third-party copy | - | 2026-11-04
- michiganadvance.com, ohiocapitaljournal.com, scdailygazette.com, wtmj.com, wearegreenbay.com | fails: client error | AG/regulator release, fox2detroit.com, fox17online.com, michiganpublic.org, wnem.com (work) | 2026-10-30
- unsplash | /s/photos/<term> pages and photo pages from WebSearch work (free vs Unsplash+ listed); curl images.unsplash.com works (unsplash.com 401); most rooftop-solar/battery photos already used; power-grid page has unused free shots (2026-11-07); grep photo ID and image ID before use | water-heater photos on Unsplash are nearly all Unsplash+ (use faucet/shower shots); used 2026-11-10: _kiB0a02E5U, IxfhMTROke8 | 2026-11-10
- hugo binary | works: curl github.com/gohugoio/hugo/releases/download/v0.123.7/hugo_extended_0.123.7_linux-amd64.tar.gz, extract to /tmp (full build ~70 s) | - | 2026-11-07
- energy.gov/energysaver/electric-resistance-heating | works from search (100% efficient, heat pumps cut use 50%, zoning >20%, thermostat advice) | - | 2026-11-09
- eia.gov/todayinenergy/detail.php?id=66324 (42% electric main heat, 2024) | works | - | 2026-11-09
- Duke Energy NC rate order (DEC/DEP 2026 cases) | no NCUC order found via search on 2026-11-10 | keep checking starw1.ncuc.gov via search | 2026-11-10

- eia.gov RECS 2020 c&e PDFs (e.g. CE8.8.M water heating kWh by month) | works from search; 2024 RECS consumption data due spring 2027 | - | 2026-11-10
- energy.gov/node/3520390 (lower water heating temperature) | works (120°F, $36-$61 standby, 4%-22%); energysaver estimating-costs page has no formula | - | 2026-11-10
- energystar.gov HPWH benefits-savings page | works (kWh/$ by household size, 14.6¢); ES_Electric_WH_Factsheet_2020 chart values unreadable | - | 2026-11-10
- aosmithatlowes.com product pages | works (element watts, UEF, est. $/yr with stated assumptions; manufacturer, Qualified) | - | 2026-11-10
