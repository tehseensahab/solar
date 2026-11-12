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

- eia.gov RECS 2020 c&e CE5.3a / CE5.3b PDFs (kWh per household by end use: dryers, washers, refrigerators, freezers, TVs, cooking 290, microwaves 107; by region, household size, housing type) | works from search; RECS 2024 consumption data due spring 2027 | - | 2026-11-12
- eia.gov/outlooks/steo/ (landing), steo_full.pdf, tables/pdf/SF02.pdf | fails: WebFetch served stale Oct/Sept 2026 vintages on 2026-11-11, a day after the Nov. 10 release | report/elec_coal_renew.php?sfnsn=mo (from search) returned the Nov. 10 edition; always check the edition date in the result | 2026-11-11
- eia.gov/electricity/epm/pdf/technotes.pdf | works (retail revenue includes taxes the utility pays; customer sales taxes not addressed) | say "may not include sales taxes" | 2026-11-11
- govinfo.gov Federal Register HTML (DOE test procedures, e.g. 2019-15208 dryers: 283 cycles/yr) | works from search; long, use offset | - | 2026-11-11
- energystar.gov/productfinder detail pages | fails: render empty (JS) | category pages (energystar.gov/products/refrigerators, /appliances/clothes_dryers) and manufacturer EnergyGuide PDFs | 2026-11-11
- energy.gov/energysaver/appliances-and-electronics/laundry | fails: client error | energy.gov/node/365797 (same page, from search) works; energy.gov/node/4821093 (refrigerators) works | 2026-11-11
- manufacturer spec/EnergyGuide PDFs (frigidaire.bynder.com, midea.com content/dam, amana.com, whirlpool.com) | works from search (Qualified, one model) | - | 2026-11-11

## State regulators and utilities
- we-energies.com/olb/26/*.pdf (customer notices: 2026-05-we-rr.pdf requested rates; 2026-01-we-electric-rates.pdf tariff) | works (text PDFs) | - | 2026-10-31
- utc.wa.gov/casedocket/2026/260005 (PSE rate case summary) | works (status only, no $) | - | 2026-11-07
- apiproxy.utc.wa.gov/cases/GetDocument?docID=...&docketNumber=260005 (UTC filed testimony PDFs) | works when returned by WebSearch "UE-260005 <exhibit>" | - | 2026-11-07
- utc.wa.gov/casedocket/.../orders and /docsets subtabs | fails: approval required | WebSearch docket number + exhibit name | 2026-10-26
- pse.com .../8752_PublicCommentHearingNoticeOnGRC_0526_Web.pdf (PSE GRC notice: %, $M, 800 kWh bills 2027-29, basic charge) | works | - | 2026-11-07
- pse.com/en/pages/rates/pending-utc-filings | works; its 2026-general-rate-case subpage and general-rate-case-statement fail (provenance / 404) | use the hearing notice PDF | 2026-11-07
- evergy.com rate review page | fails: blocked | PSC press releases and EFIS | 2026-10-25
- efis.psc.mo.gov/Document/Display/880663 (Ameren ER-2026-0291 filing) | works (schedules 1, 3, 5) | - | 2026-10-27
- docket.images.azcc.gov/*.pdf, edocket.azcc.gov item-detail | fails: approval required | azcc.gov/news posts (work); news (AZ Luminaria) for ROO, mark Qualified | 2026-10-28
- azcc.gov/news/home/... | works (timeline graphics are images, unreadable) | - | 2026-10-28
- starw1.ncuc.gov ViewFile.aspx (NCUC orders, e.g. E-100 Sub 180 NEM order) | works (long; use offset 100000 for the end) | - | 2026-10-29
- publicstaff.nc.gov/electric/net-metering | works | - | 2026-10-29
- duke-energy.com and p-cd.duke-energy.com tariff/rider PDFs, duke-energy.com/home/billing/rates | fails: client error or approval timeout | NCUC orders, NC Public Staff | 2026-10-29
- interchange.puc.texas.gov/Documents/*.PDF (PUCT dockets, e.g. 58819) | fails: client error on every doc tried | swepco.com notice PDFs from search; no workaround found for settlement | 2026-10-29
- docs.cpuc.ca.gov Published/Efile PDFs | works | - | 2026-10-29
- michigan.gov/ag/news/press-releases/2026/... (MI Attorney General) | works (amounts, residential %; rarely case numbers; Feb. 19 2026 DTE decision release substitutes for michiganadvance.com) | - | 2026-11-09
- mi-psc.my.site.com/sfc/servlet.shepherd/version/download/... (MPSC e-docket files, e.g. U-22046 DTE application, rate case summary) | works when the URL comes back in WebSearch (search "U-22046 DTE Elec Application"); application Attachment 2 = class %, Attachment 3 = bills by kWh | - | 2026-11-09
- oregon.gov/puc/news-events/Documents/PR-202606.pdf | works when from search; re-fetch by a subagent from a draft link timed out on approval | WebSearch first | 2026-11-04

- puc.sd.gov docket pages (Dockets/Electric/2026/<docket>.aspx), News/2026 releases, agendas | works | - | 2026-11-06
- puc.sd.gov docket PDFs (commission/dockets/electric/...) | works only if the exact URL came back in a WebSearch or fetched page text; URLs read off a docket page by WebFetch sometimes rejected (provenance) | WebSearch "<docket> <document name>" first, or ask the docket page fetch for "exact full href URLs" | 2026-11-06
- Oklahoma PSO rate order (Nov. 5, 2026; 3.55% per OCC statement quoted by kjrh.com) | still no OCC order/release or PSO $ figure on 2026-11-12 (okcfox/krmg: bill impacts "to be determined"); psoklahoma.com/ratereview.aspx works but shows only the 2024 case; govdelivery OKOCC bulletins from search are old (2019) | KGOU, kosu.org, newson6.com, kjrh.com, tulsaflyer.org, krmg.com (news, Qualified); nondoc.com fails | 2026-11-12
- sec.gov WEC 8-K (wec-20261105.htm) | works; Exhibit 99.1 slide URLs from Stock Titan fail (provenance) | stocktitan.net 8-K copies (work; label third-party copy) | 2026-11-07
- apps.apsc.arkansas.gov (docket search and PDFs), arkansasonline.com, nwaonline.com, arktimes.com, eldoradonews.com | fails: robots disallowed | entergyarkansas.com/ratecase2026, arkansasadvancedenergy.com | 2026-11-07

- pacificpower.net california-rate-changes.html and .../california/filings/docket-*/ PDFs (from search) | works (CA GRC: 57%, 14% offset, Jan. 1, 2027; no $ or docket) | - | 2026-11-08

- pplelectric.com/shopping (PPL Price to Compare, current and next period), /rateinfo, net-metering cash-out and renewable billing pages (from search) | works | - | 2026-11-10
- puc.pa.gov/press-release/... (PA PUC releases; PTC tables each June 1 / Dec. 1, usually late Nov.) | works only after a WebSearch returns the URL (direct fetch refused, provenance) | search the headline first | 2026-11-10
- puc.pa.gov/docket/<M-...> pages | works (lists filings + pcdocs PDF links); PECO Dec. 1, 2026 GSA docket not found via search | energychoicematters.com (trade press, Qualified) | 2026-11-10
- peco.com ElectricPricetoCompare.aspx | fails: renders empty | PUC release (late Nov.), peco.com tariff PDFs from search, energychoicematters.com | 2026-11-10
- electricityrates.com, electricrates.org, myutilitysearch.com (PTC "news") | works but unsourced; PECO summer figure conflicted with PUC | do not use; go to utility page or PUC | 2026-11-10

- santeecooper.com/ratestudy and /rates/rate-study/residential/ (from search) | works (2027-28 approved %, $6.60/mo; no rate schedule values; already covered 2026-11-01) | newsroom and Final-Rates PDFs fail provenance unless URL came back in a search | 2026-11-11
- portal.ct.gov/ag and portal.ct.gov/occ press releases (Eversource CL&P 2026 rate case: $727M, 18% residential; $451M/11% without storm costs) | works | - | 2026-11-11
- Eversource CT rate case (PURA Docket 26-05-10; published 2026-11-12): dpuc.state.ct.us docket listing and testimony PDFs fail (provenance even when linked from votesolar.org); eversource.com ct-electric-rate-review fails (client error); wtnh.com fails; ctnewsjunkie PDFs robots-blocked | acadiacenter.org, aarp.org/states/connecticut, votesolar.org (.htm URL works, trailing-slash URL fails), ctpublic.org, portal.ct.gov/ag and /occ releases work | 2026-11-12
- PECO 2027 base rate case | withdrawn (nbcphiladelphia.com, after talks with Gov. Shapiro); docket R-2026-3060859 page from search | do not write a PECO 2027 rate-case story | 2026-11-11
- newsfromthestates.com | fails: client error | original outlet or official source | 2026-11-11

- condensed 2026-11-11 (still valid): TEP: docs.tep.com notice PDF + tep.com news work, tep.com/rate-changes fails; Oregon: edocs.puc.state.or.us PDFs (from search), oregoncub.org, flashalert.net/id/PacificPower, portlandgeneral.com/2027-general-rate-case work, pacificpower.net UE 470 subpage fails; Minnesota Power: minnesotapower.blob...PressRelease PDFs work, mnpower.com home and MN eDockets fail; Michigan: cubofmichigan.org and spglobal.com (offset 100000, Qualified) work | - | 2026-11-11

- energystar.gov/products/electric_cooking_products and /about/2021_residential_induction_cooking_tops | works (induction 85%, 5-10% vs resistance) | - | 2026-11-12
- energy.gov/es/energysaver/kitchen-appliances | fails: client error | energystar.gov cooking pages, energy.maryland.gov cooking tips (works) | 2026-11-12
- govinfo.gov FR 2024-02008 (cooking products standards) | works but kWh/yr values are in image tables; no oven test procedure | use EIA RECS CE5.3b | 2026-11-12
- ors.sc.gov DEC consumer info page and wpr.org 3-utility story | stale (2025 cases) despite ranking for 2026 searches | check dates before use | 2026-11-12

## Industry and news (context only)
- news that works (context only; check dates): wpr.org, nbc26.com, fox11online.com, wisconsinwatch.org, wisn.com, yahoo.com syndications, mynorthwest.com, fox13seattle.com (.amp), wpde.com, krmg.com, ktvz.com (after search), kpic.com, gcn.com, kfyrtv.com, wral.com, stlpr.org, kfvs12.com, tulsaflyer.org, fox21online.com, northernnewsnow.com, wpr.org, whyy.org | works | - | 2026-11-06
- other regulator/company pages that work: psc.mo.gov releases, efis.psc.mo.gov calendars, ameren.mediaroom.com, puc.colorado.gov, puc.pa.gov PDFs, oregon.gov/puc PR PDFs (search first), portlandgeneral.com news, cubwi.org (advocate), energysage.com/news H1 2026, eia.gov/dnav gas prices, atb.nrel.gov 2023 PV | works | - | 2026-11-06
- southdakotasearchlight.com, keloland.com, kbhbradio.com | fails: client error | rapidcitypost.com (PUC News reprints), sdpb.org, kotatv.com (work) | 2026-11-06
- michiganadvance.com, ohiocapitaljournal.com, scdailygazette.com, wtmj.com, wearegreenbay.com | fails: client error | AG/regulator release, fox2detroit.com, fox17online.com, michiganpublic.org, wnem.com (work) | 2026-10-30
- unsplash | /s/photos/<term> pages and photo pages from WebSearch work (free vs Unsplash+ listed); curl images.unsplash.com works (unsplash.com 401); most rooftop-solar/battery photos already used; power-grid page has unused free shots (2026-11-07); grep photo ID and image ID before use | water-heater photos on Unsplash are nearly all Unsplash+ (use faucet/shower shots); used 2026-11-10: _kiB0a02E5U, IxfhMTROke8; 2026-11-11: DB45fWkHRDc (laundry), VaGdhK-kI1c (fridge); /s/photos/laundry and /s/photos/kitchen-appliance have few free appliance shots; always view the image (k7WP9oPThOI is a water purifier) | 2026-11-11
- solarexaminer.com live check (WebFetch) | fails: PROVENANCE_REQUIRED for homepage and post URLs on 2026-11-10 (also 2026-11-06); curl blocked by proxy | confirm the Cloudflare Pages check run on the PR via GitHub MCP; report live status as unconfirmed | 2026-11-10
- hugo binary | works: curl github.com/gohugoio/hugo/releases/download/v0.123.7/hugo_extended_0.123.7_linux-amd64.tar.gz, extract to /tmp (full build ~70 s) | - | 2026-11-07

- eia.gov RECS 2020 c&e PDFs (e.g. CE8.8.M water heating kWh by month) | works from search; 2024 RECS consumption data due spring 2027 | - | 2026-11-10
- energy.gov/node/3520390 (lower water heating temperature) | works (120°F, $36-$61 standby, 4%-22%); energysaver estimating-costs page has no formula | - | 2026-11-10
- energystar.gov HPWH benefits-savings page | works (kWh/$ by household size, 14.6¢); ES_Electric_WH_Factsheet_2020 chart values unreadable | - | 2026-11-10
