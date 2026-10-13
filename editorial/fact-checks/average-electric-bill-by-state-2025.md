# Fact-check: average-electric-bill-by-state-2025

Checked October 13, 2026.

- PRIMARY: EIA Historical State Data, HS861 2010-.xlsx (Total Electric Industry sheet), "Final annual data for 2025", release date Oct 7, 2026 (page https://www.eia.gov/electricity/data/state/). Downloaded by curl; parsed with a stdlib xlsx reader.
- Formulas: bill = revenue($k)*1000/customers/12; kWh = MWh*1000/customers/12; price = revenue/MWh*100.
- METHOD CHECK: same formulas on 2024 reproduce EIA Table 5A "2024 Average Monthly Bill - Residential" (customers and bill) for all 50 states + DC (no mismatches > $0.01). 2025 Table 5A not published on EIA's sales_revenue_price page (still shows 2024) - disclosed.
- US 2025: $150.68, 874.3 kWh, 17.23c (EIA price column 17.23). 2024: $142.26, 863.3, 16.48. Changes +5.9%, +1.3%, +4.6%.
- Ranking, counts (46 up, 4 down, DC up; 21 states above US average; state median $147.43; 8 states/DC at >=10%) computed from rows.
- Nevada -17.4% (price 15.00 -> 13.26, use 930 -> 868): no cause found; article says so. NOT explained.
- July 2026 price 18.31 vs 17.45: from EIA EPM Table 5.6.A via our Oct 5 article (fact-check on file).
- Solar-customer note: general property (self-consumed power not in utility sales) phrased with "generally".
- Southern usage explanation: stated as plausible only.
- Value-of-100-kWh table is arithmetic only, labeled.

COVER: Unsplash photo 0MKzwPmehRE (Jon Moore). Image shows a bank of meters; alt text describes what is visible.
