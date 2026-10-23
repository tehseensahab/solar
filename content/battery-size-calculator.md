---
title: "Home Battery Size Calculator"
seoTitle: "Home Battery Size Calculator: kWh, kW and Number of Units"
description: "Tick the loads you want to keep running, set the hours of backup, and see the kWh and kW you need and how many Powerwall 3, aPower 2 or Enphase IQ Battery units that takes."
layout: "tool"
tool: "battery"
lastVerified: 2026-10-24
faq:
  - q: "How do I calculate what size home battery I need?"
    a: "Add up the running watts of the loads you want to keep on, multiply the average kW by the hours of backup you want to get kWh, then check that the battery's continuous kW covers the loads plus the largest motor start. Buy enough units to satisfy both numbers."
  - q: "Why does the calculator show kW and kWh?"
    a: "kWh is how much energy a battery stores, and kW is how much power it can deliver at one moment. A battery can have enough energy and still be too weak to start a well pump, or the reverse. The unit count is set by whichever limit needs more units."
  - q: "Are the starting watts accurate?"
    a: "No. The default watts are assumed round numbers for illustration, not measurements. Use nameplate data, a plug-in watt meter or your installer's figures for your own equipment."
  - q: "Does this include the cost of a battery?"
    a: "No. We do not show prices because quotes vary by installer, location and equipment, and the federal residential clean energy credit is not available for property placed in service after December 31, 2025, per the IRS."
---
This tool turns a list of loads into two numbers, **kWh** (energy) and **kW** (power), and then divides by each battery's stated capacity. It extends our step-by-step guide, [how to size a home battery](/posts/how-to-size-a-home-battery/).

## How it is calculated

Inputs are the loads you tick, their running and starting watts, the hours of backup, the share of the time the loads run, and an optional reserve.

1. **Running power (kW)** = sum of running watts of ticked loads ÷ 1,000.
2. **Worst-case start (kW)** = running total, minus the largest-starting load's running watts, plus its starting watts. The tool tests each load and keeps the highest result. It assumes one motor starts at a time.
3. **Average kW** = running kW × share of time loads run (default 100%).
4. **Energy needed (kWh)** = average kW × hours ÷ (1 − reserve). With no reserve this is average kW × hours.
5. **Units per battery** = the larger of: kWh needed ÷ battery kWh, and the larger of running kW or worst-case start kW ÷ battery continuous kW; each rounded up, minimum one.

**Worked example with the defaults** (refrigerator 150 W, lights and electronics 300 W, internet 100 W, furnace blower 500 W; all assumed):

- Running: 150 + 300 + 100 + 500 = 1,050 W = 1.05 kW.
- Worst start: furnace blower, 1,050 − 500 + 1,200 = 1,750 W = 1.75 kW.
- Energy: 1.05 kW × 12 h = 12.6 kWh.
- Powerwall 3: 12.6 ÷ 13.5 = 0.93 → 1 unit. FranklinWH aPower 2: 12.6 ÷ 15 → 1 unit. Enphase IQ Battery 10C: 12.6 ÷ 10 = 1.26 → 2 units. IQ Battery 5P: 12.6 ÷ 5.0 = 2.52 → 3 units.

## Battery figures used

| Battery | Capacity | Continuous power | Note |
|---|---|---|---|
| Tesla Powerwall 3 | 13.5 kWh | 11.5 kW | Nominal; usable energy not stated on the datasheet |
| FranklinWH aPower 2 | 15 kWh | 10 kW | Whether 15 kWh is usable is not stated |
| Enphase IQ Battery 10C | 10 kWh | 7.08 kW | As stated by Enphase |
| Enphase IQ Battery 5P | 5.0 kWh | 3.84 kW | Stated as usable |

Manufacturer figures read October 24, 2026. See the sources in [best home batteries for backup power](/posts/best-home-batteries-for-backup-power/) and [how to size a home battery](/posts/how-to-size-a-home-battery/). We did not test these batteries.

## Limitations

- Default loads are **assumed round numbers**, not measurements.
- Nominal capacity is an upper bound. Round-trip losses are not modeled.
- Real motor start surges depend on the motor and the battery's surge rating, which this tool does not model beyond continuous kW.
- Solar recharge, stacking limits, panel capacity and inverter compatibility are not included. A licensed installer must verify the design.
- Not engineering, tax or financial advice. Related: [time-of-use rates and batteries](/posts/best-home-batteries-time-of-use-rates/).
