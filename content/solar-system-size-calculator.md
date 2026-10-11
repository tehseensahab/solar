---
title: "Solar System Size Calculator"
seoTitle: "Solar System Size Calculator: How Many kW and Panels You Need"
description: "Enter your yearly electricity use and get an estimated system size in kW, a panel count and a rough price. Every default is sourced and can be changed."
layout: "calculator"
calculator: "size"
lastVerified: 2026-10-11
faq:
  - q: "How do I calculate what size solar system I need?"
    a: "Divide the kWh you want solar to cover each year by the kWh one kW of panels produces at your location. For example, 10,000 kWh divided by 1,375 kWh per kW is about 7.3 kW. Then divide by the panel wattage and round up to whole panels."
  - q: "How many solar panels do I need for 10,000 kWh a year?"
    a: "At NREL's U.S. mean output of about 1,375 kWh per kW, 10,000 kWh needs about 7.3 kW, or 19 panels of 400 watts. In a sunnier area producing 1,700 kWh per kW it is about 5.9 kW, or 15 panels. These are estimates; your roof's direction, tilt and shading change the answer."
  - q: "Should I size solar to cover 100% of my electricity use?"
    a: "It depends on how your utility credits power you send to the grid. With full retail net metering, covering close to 100% is common. Under net billing, exported power earns less than the retail rate, so a smaller system that you mostly use yourself can be better value. Check your utility's solar tariff first."
  - q: "Where do I find how much a solar panel produces at my address?"
    a: "Use the free PVWatts calculator from the National Laboratory of the Rockies (formerly NREL). Enter your address and a 1 kW system. The annual kWh it reports is the output per kW to enter in this calculator."
---

## How it is calculated

**System size (kW) = kWh to cover each year ÷ yearly output per kW**

1. **Yearly use to plan for** = your last 12 months of kWh + any use you plan to add.
2. **kWh to cover** = yearly use × the share you want solar to cover.
3. **System size** = kWh to cover ÷ yearly output per kW.
4. **Panels** = system size in watts ÷ panel wattage, rounded up to a whole panel.

If you enter a bill instead of kWh, we estimate use as (monthly bill × 12) ÷ your state's average residential price. That average includes fixed monthly charges, so it is a rough conversion. The kWh on your bills is better.

### Worked example

A home uses 10,000 kWh a year and wants to cover all of it, with the default output of 1,375 kWh per kW and 400 W panels.

- 10,000 ÷ 1,375 = **7.27 kW**
- 7,270 W ÷ 400 W = 18.2, rounded up to **19 panels**
- 19 × 400 W = **7.6 kW**, producing about 7.6 × 1,375 = **10,450 kWh** in year one
- Rough price: 7,600 W × $2.57 = **$19,532** before incentives

## Output per kW: the number that matters most

How much one kW of panels produces depends on your location, roof direction, tilt and shading. The National Laboratory of the Rockies (NLR, formerly NREL) groups the country into ten solar resource classes in its Annual Technology Baseline. We converted its mean capacity factor for each class to yearly kWh per kW (capacity factor × 8,760 hours).

| NREL resource class | Average sunlight (kWh/m² a day) | Mean capacity factor | Yearly kWh per kW (our math) |
|---|---|---|---|
| 1 | More than 5.75 | 19.6% | 1,717 |
| 2 | 5.5 to 5.75 | 19.3% | 1,691 |
| 3 | 5.25 to 5.5 | 18.0% | 1,577 |
| 4 | 5 to 5.25 | 17.0% | 1,489 |
| 5 | 4.75 to 5 | 16.1% | 1,410 |
| 6 | 4.5 to 4.75 | 15.9% | 1,393 |
| 7 | 4.25 to 4.5 | 15.2% | 1,332 |
| 8 | 4 to 4.25 | 14.5% | 1,270 |
| 9 | 3.75 to 4 | 13.9% | 1,218 |
| 10 | Less than 3.75 | 12.7% | 1,113 |
| **Mean** | | **15.7%** | **1,375** |

These are modeled figures for a roof-mounted system at the best tilt and direction NREL tested, and they include NREL's assumed output loss over the system's life. A shaded or east- or west-facing roof will produce less. For your address, run [PVWatts](https://pvwatts.nlr.gov/) for a 1 kW system and enter the annual kWh it reports.

## Where the defaults come from

| Default | Value | Source |
|---|---|---|
| Yearly output per kW | 1,375 kWh | NREL Annual Technology Baseline 2024, residential PV, mean capacity factor 15.7% × 8,760 hours (our math) |
| State electricity price | Varies | EIA Electric Power Monthly, Table 5.6.A, residential average, July 2026 (preliminary) |
| Panel wattage | 400 W | Our assumption. Use the wattage on your quote |
| Price per watt | $2.57 | EnergySage marketplace median, first half of 2026, before incentives |

## Before you size for 100%

- **Check how exports are credited.** Under net billing, power you send to the grid earns less than the retail rate. See our [net metering state guide](/posts/net-metering-state-guide/) and [export credit rates by utility](/posts/solar-export-credit-rates-by-utility-2026/).
- **Check your utility's size limit.** Many utilities cap a home system at a share of past yearly use.
- **Roof space can be the real limit.** An installer's layout decides how many panels fit.
- **A battery is sized separately.** See our [battery sizing guide](/posts/battery-sizing-guide/).

Next, put a price on it with the [solar payback calculator](/solar-payback-calculator/).

## Limitations

This is a planning estimate, not a system design. It does not model your roof's direction, tilt or shading, hourly use, time-of-use rates, inverter limits or utility size caps. The bill-to-kWh conversion uses a statewide average that is not your tariff rate. Get written quotes and compare them with our guide to [comparing solar quotes](/posts/how-to-compare-solar-quotes/). Nothing here is engineering or financial advice.

## Sources

- [NREL, Annual Technology Baseline 2024: Residential PV](https://atb.nlr.gov/electricity/2024/residential_pv)
- [NLR (formerly NREL), PVWatts Calculator](https://pvwatts.nlr.gov/)
- [EIA, Electric Power Monthly, Table 5.6.A](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a), July 2026 data, released September 24, 2026
- [EnergySage, "Six months after the solar tax credit ended, the industry found a workaround," updated Sept. 30, 2026](https://www.energysage.com/news/home-energy-market-h1-2026-highlights/)
