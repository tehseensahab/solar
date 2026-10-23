---
title: "How to Size a Home Battery: kWh, kW and What Your Home Needs"
date: 2026-10-24T00:30:00+05:00
lastVerified: 2026-10-24
imageAlt: "A stack of electric meters mounted on a wall."
imageCredit: "Photo by Han-Hsing Tu on [Unsplash](https://unsplash.com/photos/a-bunch-of-electrical-meters-are-stacked-on-top-of-each-other-PeGyRpDKQy4?utm_source=solarexaminer&utm_medium=referral)"
categories: ["equipment"]
description: "Size a home battery with two numbers: kW for what runs at once and kWh for how long. A step-by-step method with worked examples, plus how many Powerwall, Enphase or FranklinWH units each result needs."
readtime: "8 min read"
author: "Craig Leslie"
tags: ["battery sizing", "home battery", "kWh", "kW", "backup power"]
takeaways:
  - "Size a battery in two steps: add up the kW of everything that runs at once, then multiply average kW by the hours you want to cover to get kWh."
  - "EIA data for 2022 put average US residential electricity purchases at 10,791 kWh a year, about 29.6 kWh a day, but a backup battery should be sized to essential loads, not the whole-house average."
  - "Round units up on both power and energy, and size for the larger answer: you need enough kW and enough kWh."
  - "Examples here use assumed loads, not measurements. Check nameplates and your own meter data before buying."
faq:
  - q: "How big of a home battery do I need?"
    a: "It depends on the loads you want to run and for how long. Multiply the average kW of those loads by the hours of backup you want to get kWh, and check that the battery's continuous kW is at least your simultaneous load plus starting surges."
  - q: "What is the difference between kW and kWh for a battery?"
    a: "kW is power, how much the battery can deliver at one moment. kWh is energy, how much it stores. A battery with 13.5 kWh and 11.5 kW can supply 11.5 kW at most and, at a 1.5 kW load, roughly 9 hours before any recharge."
  - q: "How many batteries does an average house need?"
    a: "There is no single answer. EIA reports average residential electricity purchases of about 29.6 kWh a day (2022 data), but most backup systems are sized to cover essential loads, which are a fraction of that."
  - q: "Do I need to size the battery for my solar system too?"
    a: "Yes, if you want it to recharge daily. A battery recharges from solar only to the extent your panels produce more than the home uses, so a small array may not refill a large battery after a cloudy outage."
---

> **Affiliate disclosure.** Solar Examiner may earn a commission from affiliate links on some guides. This article contains none, but our commercial relationships never decide what we recommend. See our [affiliate disclosure](/affiliate-disclosure/) and [how we pick products](/how-we-pick/).

To size a home battery, decide which loads must run, add up their **kW** (power at one moment), then multiply the average load by the **hours** you need to get **kWh** (energy). Buy enough units to cover **both** numbers. This guide gives the method, worked examples with assumed loads, and how many Tesla, Enphase and FranklinWH units each example needs. We did not test these batteries; specs are from manufacturer documents as of October 24, 2026. See [how we pick products](/how-we-pick/).

Want the arithmetic done for you? Use our [home battery size calculator](/battery-size-calculator/).

## Step 1: Decide the goal

- **Essential-load backup:** refrigerator, lights, internet, some outlets, maybe a furnace blower or a well pump.
- **Whole-home backup:** everything, including air conditioning and an electric range.
- **Bill management:** shifting solar or off-peak energy into the evening on a [time-of-use rate](/posts/time-of-use-rates-and-solar/).

The goal changes the answer by a factor of several.

## Step 2: List loads and kW

Use nameplates, a plug-in watt meter, a circuit-level monitor or your utility's interval data. The loads below are **assumed round numbers for illustration**, not measurements. Your equipment will differ.

| Load (assumed) | Running kW | Notes |
|---|---|---|
| Refrigerator | 0.15 | Average running draw; the compressor start is higher |
| Lights and electronics | 0.30 | |
| Internet and a laptop | 0.10 | |
| Furnace blower | 0.50 | |
| Well pump | 1.00 | Starting surge is higher |
| **Total if all run at once** | **2.05** | |

Add a margin for motor starts. A compressor, well pump or air conditioner needs a short surge above its running power. Manufacturer starting-current data is the right input; Tesla's datasheet lists the ability to start loads up to 185 LRA, and FranklinWH says one aPower 2 can start a 5-ton air conditioner, so use your equipment's own data and ask your installer.

## Step 3: Convert to energy

Formula: **kWh needed = average kW × hours**.

Do not use the simultaneous total from step 2 as your average if loads cycle. A refrigerator runs part of the time. For a rough estimate use measured daily kWh, or estimate average kW at 50 to 70 percent of the simultaneous total for cycling loads, and say so.

Example A (essential loads, assumed): 1.2 kW average × 12 hours = **14.4 kWh**.

Example B (larger, assumed): 2.5 kW average × 24 hours = **60 kWh**.

For context, EIA's [residential consumption data](https://www.eia.gov/tools/faqs/faq.php?id=97&t=3) show average annual electricity purchased per US residential customer of 10,791 kWh in 2022, about 899 kWh a month. Our math: 10,791 ÷ 365 = **29.6 kWh a day**. EIA notes these are electricity purchases, which may understate use for homes with on-site solar, and the average varies widely by state (Louisiana 14,774 kWh; Hawaii 6,178 kWh).

## Step 4: Adjust for real-world losses

- **Usable vs nominal.** Enphase states 5.0 kWh usable for the IQ Battery 5P; Tesla's datasheet states 13.5 kWh nominal and does not state usable energy. Treat nominal as an upper bound.
- **Round-trip losses.** Energy you store is not all energy you get back. We use no single efficiency here; ask for the datasheet figure.
- **Solar recharge.** If panels cannot refill the battery on a cloudy day, plan for the battery as one-shot energy.
- **Reserve.** Leaving some capacity unused is common practice; ask how each system's reserve setting works.

## Step 5: Match the battery

Specs used (manufacturer sources, Oct 24, 2026):

| Battery | Capacity | Continuous kW |
|---|---|---|
| Tesla Powerwall 3 | 13.5 kWh (nominal) | 11.5 |
| FranklinWH aPower 2 | 15 kWh | 10 |
| Enphase IQ Battery 10C | 10 kWh | 7.08 |
| Enphase IQ Battery 5P | 5.0 kWh | 3.84 |

Number of units = round up of the larger of (kWh needed ÷ capacity) and (peak kW ÷ continuous kW).

**Example A (14.4 kWh, 2.05 kW peak, no surge margin):**
- Powerwall 3: 14.4 ÷ 13.5 = 1.07 → **2 units** (one unit comes up slightly short on nominal energy; a bit of solar recharge or lighter loads might make one workable, so ask).
- aPower 2: 14.4 ÷ 15 = 0.96 → 1 unit on paper, with little margin.
- IQ Battery 10C: 14.4 ÷ 10 = 1.44 → **2 units**.
- IQ Battery 5P: 14.4 ÷ 5.0 = 2.88 → **3 units**; power: 3 × 3.84 = 11.5 kW, plenty.

**Example B (60 kWh, 2.5 kW average, assume 8 kW peak with surges):**
- Powerwall 3: 60 ÷ 13.5 = 4.44 → **5 units**; power 5 × 11.5 = 57.5 kW.
- aPower 2: 60 ÷ 15 = 4 → **4 units**; power 4 × 10 = 40 kW.
- IQ Battery 10C: 60 ÷ 10 = 6 → **6 units**; power 6 × 7.08 = 42.5 kW.

Notice that in Example B energy, not power, decides the count. A whole-home, multi-day goal is mainly a kWh problem, which is why solar recharge and load shedding matter more than a bigger battery. Also check whether the manufacturer limits how many units can stack.

## Quick sizing summary

| Goal | Starting question | Typical constraint |
|---|---|---|
| Overnight essentials | Average kW × 12 hours | kWh |
| Central air during outage | Starting surge and running kW | kW |
| Multi-day | Daily essential kWh × days, less solar recharge | kWh and solar |
| TOU shifting | kWh moved into peak window | kWh and spread |

## Who should skip oversizing

- If outages last a few hours, a larger battery buys little. See [Do solar panels work in a power outage?](/posts/solar-panels-power-outage/).
- If you only want peak shaving, size to the peak window's kWh, not the day.

## Incentives

The IRS says the [residential clean energy credit](https://www.irs.gov/credits-deductions/residential-clean-energy-credit) is not available for property placed in service after December 31, 2025, so more capacity is paid for at full price unless a state or utility program applies. Check [Rates by State](/rates-by-state/).

## Checklist

1. Choose a goal and list loads.
2. Record running kW and starting surges.
3. Convert to kWh with hours.
4. Adjust for usable energy and losses.
5. Divide by capacity and round up on both kW and kWh.
6. Confirm stacking limits and electrical panel capacity with an installer.
7. Compare quotes. See [how to compare solar quotes](/posts/how-to-compare-solar-quotes/) and our earlier [battery sizing guide](/posts/battery-sizing-guide/).

## Limitations

Loads in the examples are assumed, not measured. Capacities are manufacturer-stated, partly nominal. Sizing is not engineering advice; have a licensed installer verify your electrical system.

## Sources

- [EIA, average residential electricity consumption (FAQ)](https://www.eia.gov/tools/faqs/faq.php?id=97&t=3) (2022 data)
- [Tesla Powerwall 3 datasheet](https://digitalassets.tesla.com/tesla-contents/image/upload/powerwall-3-datasheet-na-en.pdf) · [FranklinWH aPower 2](https://www.franklinwh.com/products/apower2-home-battery-backup/) · [Enphase 10C](https://enphase.com/store/storage/iq-battery-10c) · [Enphase 5P](https://enphase.com/store/storage/iq-battery-5p)
- [IRS, Residential Clean Energy Credit](https://www.irs.gov/credits-deductions/residential-clean-energy-credit)

Related: [Best home batteries for backup power](/posts/best-home-batteries-for-backup-power/)
