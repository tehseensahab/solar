---
title: "EV Charger Cost and Charge Time Calculator"
seoTitle: "EV Charger Calculator: Charge Time, Cost per Charge and Breaker Size"
description: "Enter a charger's amps and volts, how many miles or kWh you need, and your electric rate. See charge time, cost per session, cost per mile and the breaker size a 125% continuous-load rule implies."
layout: "tool"
tool: "ev"
lastVerified: 2026-10-24
faq:
  - q: "How long does it take to charge an EV on a 40-amp Level 2 charger?"
    a: "A 40 A charger on 240 V delivers 240 × 40 ÷ 1,000 = 9.6 kW. Adding 40 kWh takes about 40 ÷ 9.6 = 4.2 hours if the car accepts that rate, longer once you include charging losses."
  - q: "What breaker size does an EV charger need?"
    a: "DOE's Alternative Fuels Data Center says the National Electrical Code treats EV charging as a continuous load. A common reading is a breaker at 125% of the charger's current: 40 A needs 50 A and 48 A needs 60 A. A licensed electrician confirms wire gauge, breaker and panel capacity for your home."
  - q: "How much does it cost to charge an EV at home?"
    a: "Energy used times your electric rate. For example, 12 kWh from the wall at 18.16¢ per kWh is about $2.18. Your rate, your plan's time-of-use hours and the car's efficiency change the result."
  - q: "Why is my car slower than the charger?"
    a: "Many cars accept less AC power than a charger can supply. Enter the car's maximum AC charge rate in kW and the tool uses the lower of the two."
---
Level 2 charging depends on three things: the charger's power, how much energy you need, and what your electricity costs. This tool combines them. It supports our charger guides, including [best Level 2 EV chargers for home](/posts/best-level-2-ev-chargers-for-home/) and [hardwired vs plug-in chargers](/posts/hardwired-vs-plug-in-ev-chargers/).

## How it is calculated

1. **Charger power (kW)** = volts × amps ÷ 1,000. Example: 240 × 40 ÷ 1,000 = 9.6 kW.
2. **Effective power** = the lower of charger power and your car's maximum AC rate, if entered.
3. **Energy added (kWh)** = miles × (kWh per 100 miles ÷ 100), or the kWh you enter.
4. **Energy from the wall (kWh)** = energy added ÷ (1 − losses). Losses are an assumption you can change; the default is 10%.
5. **Charge time (h)** = energy from the wall ÷ effective power.
6. **Cost per session** = energy from the wall × rate (¢ ÷ 100). **Cost per mile** = cost ÷ miles.
7. **Breaker** = amps × 1.25, then the next standard size up.

**Worked example with the defaults** (240 V, 40 A, 40 miles a day at 27 kWh per 100 miles, 10% losses, U.S. average 18.16¢):

- Power: 240 × 40 ÷ 1,000 = 9.6 kW.
- Energy added: 40 × 0.27 = 10.8 kWh; from the wall: 10.8 ÷ 0.90 = 12.0 kWh.
- Time: 12.0 ÷ 9.6 = 1.25 hours, or 1 h 15 min.
- Cost: 12.0 × 0.1816 = $2.18, or $0.054 per mile.
- Breaker: 40 × 1.25 = 50 A.

## Where the defaults come from

- **27 kWh per 100 miles** is the example efficiency in DOE's [Alternative Fuels Data Center, Charging at home](https://afdc.energy.gov/fuels/electricity-charging-home). Cars vary widely.
- **Electric rate:** the U.S. average is EIA's residential average price for August 2026 (18.16¢ per kWh, Electric Power Monthly Table 5.6.A, preliminary). Choosing a state fills in that state's August 2026 EIA average. These are statewide averages across all utilities; your bill's rate is better. See [rates by state](/rates-by-state/).
- **Breaker rule:** DOE's AFDC says the NEC treats EV charging as a continuous load. The 125% figure is the common application of that rule, not a substitute for an electrician's sizing.
- **10% losses** is our assumption, not a measurement.

## Limitations

- Charge time assumes a constant rate. Cars slow down as the battery fills and in cold weather.
- Cost uses one flat rate. Time-of-use plans, demand charges and fixed charges are not modeled, except through the optional off-peak comparison.
- The federal 30C charger credit covered property placed in service through June 30, 2026, per the IRS, so it does not apply to a charger installed now. Installation costs are not included. See [rate guides](/rates-by-state/).
- Not electrical, tax or financial advice. Hire a licensed electrician.
