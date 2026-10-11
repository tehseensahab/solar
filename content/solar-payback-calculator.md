---
title: "Solar Payback and ROI Calculator"
seoTitle: "Solar Payback and ROI Calculator (2026, No Federal Tax Credit)"
description: "Estimate how many years a home solar system takes to pay for itself, and its return over 25 years, from your price, electric rate and your utility's export rules."
layout: "calculator"
calculator: "payback"
lastVerified: 2026-10-11
faq:
  - q: "How is solar payback calculated?"
    a: "Simple payback is net system cost divided by first-year bill savings. This calculator also adds up savings year by year, lowering panel output and raising the electric rate by the percentages you set, and reports the year the running total reaches zero."
  - q: "How is solar ROI calculated?"
    a: "Return on investment is the net gain divided by the net cost. Net gain is total bill savings over the years counted minus what you paid. The yearly rate of return shown is the internal rate of return on those same cash flows, before tax."
  - q: "Does this calculator include the 30% federal tax credit?"
    a: "No. The IRS states the Residential Clean Energy Credit is not allowed for expenditures made after December 31, 2025, so it is not applied. You can enter state, utility or local incentives you have confirmed in writing."
  - q: "What is a good payback period for solar?"
    a: "There is no single answer. Panel warranties typically run 20 to 25 years, so a payback beyond about 15 years leaves limited time to come out ahead. The result depends mostly on your electric rate and how your utility credits exported power."
---

## How it is calculated

**Simple payback (years) = net system cost ÷ first-year bill savings**

- **Net system cost** = system size in watts × price per watt − incentives you have confirmed
- **First-year output** = system size in kW × yearly output per kW
- **First-year savings, net metering** = output × electric rate
- **First-year savings, net billing** = (output used in the home × electric rate) + (output exported × export credit rate)

For each later year, output falls by the output-loss percentage and the electric rate and export credit rise by the rate-growth percentage. Yearly upkeep is subtracted. **Payback** is the point where the running total of savings equals the net cost.

- **Net gain** = total savings over the years counted − net cost
- **Return on investment** = net gain ÷ net cost
- **Yearly rate of return** = the internal rate of return on those cash flows, before tax

### Worked example

The calculator opens with a 7 kW system at $2.57 per watt, 1,375 kWh per kW, and the U.S. average residential price of 18.31¢/kWh, with 0.5% yearly output loss and 2% yearly rate growth.

- Net cost: 7,000 W × $2.57 = **$17,990**
- First-year output: 7 × 1,375 = **9,625 kWh**

| | Net metering (full retail) | Net billing (50% used at home, 7¢ export credit) |
|---|---|---|
| First-year savings | $1,762 | $1,218 |
| Simple payback | 10.2 years | 14.8 years |
| Payback with 2% rate growth | 9.6 years | 13.4 years |
| Payback with 0% rate growth | 10.5 years | 15.3 years |
| 25-year net gain, 2% rate growth | $34,925 | $18,582 |
| 25-year net gain, 0% rate growth | $23,524 | $10,702 |

These are illustrations from default inputs, not predictions for your home. The same system differs by four to five years of payback depending only on how exports are credited.

## Where the defaults come from

| Default | Value | Source |
|---|---|---|
| Price per watt | $2.57 | EnergySage marketplace median, first half of 2026, before incentives |
| Yearly output per kW | 1,375 kWh | NREL Annual Technology Baseline 2024, residential PV, mean capacity factor 15.7% × 8,760 hours (our math). See the [table by sunlight level](/solar-system-size-calculator/#output-per-kw-the-number-that-matters-most) |
| Electric rate | Varies by state | EIA Electric Power Monthly, Table 5.6.A, residential average, July 2026 (preliminary) |
| Federal tax credit | $0 | IRS: Section 25D credit not allowed for expenditures after December 31, 2025 |
| Panel output loss | 0.5% a year | NREL median |
| Rate growth | 2% a year | Our assumption, not a forecast |
| Years counted | 25 | NREL: panel warranties typically run 20 to 25 years |
| Share used at home, export credit | 50%, 7¢/kWh | Our illustration. Use your utility's tariff |

## What this estimate leaves out

- **Fixed and minimum charges.** Solar usually does not reduce them. State average prices include them, so they overstate savings. Enter the per-kWh charges from your bill. See [how to read your electric bill](/posts/how-to-read-your-electric-bill/) and [fixed charges and solar savings](/posts/fixed-charges-and-solar-savings/).
- **Financing.** For a loan, enter the total of all payments ÷ watts as the price. Leases and power purchase agreements have no upfront cost to recover, so payback does not apply the same way.
- **Equipment replacement.** An inverter may need replacing. Add the quoted cost to the price or spread it across yearly upkeep.
- **Time-of-use rates.** Savings depend on when you produce and use power. See [time-of-use rates and solar](/posts/time-of-use-rates-and-solar/).
- **Rule changes.** Regulators can reset export credit rates. Rate growth is not guaranteed.
- **Batteries, taxes and home value** are not modeled.

For the reasoning behind each input, read [how to calculate solar payback without the federal tax credit](/posts/solar-payback-period-without-federal-tax-credit/). Not sure what size to enter? Start with the [solar system size calculator](/solar-system-size-calculator/).

## Limitations

Results come only from the numbers entered. Defaults are national figures from single sources and will not match your quote, roof or tariff. We do not promise any payback period or savings amount. This is general information, not financial, tax or legal advice.

## Sources

- [IRS, FAQs on modification of sections 25C, 25D and others under Public Law 119-21 (FS-2025-05, Aug. 21, 2025)](https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-act-obbb)
- [EIA, Electric Power Monthly, Table 5.6.A](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a), July 2026 data, released September 24, 2026
- [NREL, Annual Technology Baseline 2024: Residential PV](https://atb.nlr.gov/electricity/2024/residential_pv)
- [NREL, "STAT FAQs Part 2: Lifetime of PV Panels"](https://nrel.gov/state-local-tribal/blog/posts/stat-faqs-part2-lifetime-of-pv-panels.html)
- [NLR (formerly NREL), PVWatts Calculator](https://pvwatts.nlr.gov/)
- [EnergySage, "Six months after the solar tax credit ended, the industry found a workaround," updated Sept. 30, 2026](https://www.energysage.com/news/home-energy-market-h1-2026-highlights/)
