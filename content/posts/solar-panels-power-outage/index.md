---
title: "Do Solar Panels Work in a Power Outage? What to Know"
date: 2026-10-21T05:00:00Z
lastVerified: 2026-10-21
imageAlt: "Indoor wall-mounted solar backup setup: a hybrid inverter, three white home battery units, breakers and two distribution boxes on a white board."
imageCredit: "Photo by Sergio Martins on [Unsplash](https://unsplash.com/photos/wall-mounted-solar-power-and-energy-storage-system-7WzD2mTRWK8?utm_source=solarexaminer&utm_medium=referral)"
categories: ["equipment"]
description: "Most rooftop solar shuts off in a power outage by design. To keep lights on you need a battery or an inverter built to run your home off-grid in daylight."
readtime: "7 min read"
author: "John Marshall"
tags: ["power outage", "solar battery", "backup power", "anti-islanding", "inverters"]
takeaways:
  - "A standard grid-tied solar system shuts down when the grid goes down, even on a sunny day. Inverters must detect the outage and stop sending power to utility lines so repair crews are not hurt."
  - "To use your solar during an outage, the system has to be able to disconnect your home from the grid and run it on its own. That takes extra equipment: usually a battery with a backup gateway or switch."
  - "A few battery-free options run limited loads in daylight only. Enphase's Sunlight Backup, for example, tells homeowners to keep backup loads at or under 30% of the microinverters' rated output, such as 1.7 kW for a 5.7 kW system."
  - "With a battery, how long you last depends on what you run. A 13.5 kWh battery covers about 27 hours of a steady 0.5 kW load, or about 9 hours of 1.5 kW, before any solar recharge (our arithmetic, before losses)."
  - "The federal 30% residential credit no longer helps: the IRS says it is not available for property placed in service after December 31, 2025."
faq:
  - q: "Why does my solar system turn off when the power goes out?"
    a: "Grid-tied inverters are required to detect a grid outage and stop exporting power, a protection called anti-islanding. It keeps your panels from sending electricity onto lines that utility crews assume are dead. Unless your system has equipment to separate your home from the grid, the inverter simply shuts down until grid power returns."
  - q: "Can solar panels power my house during an outage without a battery?"
    a: "Only with specific equipment, and only in daylight. Enphase IQ8 systems set up for Sunlight Backup can run a few essential circuits while the sun shines, and some SMA Sunny Boy inverters have a Secure Power Supply outlet rated up to 2,000 watts. Output rises and falls with the sun, and neither works at night."
  - q: "How long will a solar battery last in a power outage?"
    a: "Divide the battery's rated kWh by your average load in kW. A 13.5 kWh battery running a steady 0.5 kW of essentials (fridge, lights, internet, a furnace fan) lasts about 27 hours before losses; at 1.5 kW, about 9 hours. These are illustrative loads; check your own appliances. If the sun comes out and your system can recharge the battery while off-grid, it can last much longer."
  - q: "Can I add backup to the solar system I already have?"
    a: "Often yes, but it depends on your inverter. Many batteries can be added to an existing system, and some inverters cannot form an off-grid microgrid at all. Ask your installer whether your inverter can keep producing during an outage once a battery is added, or whether the battery will only discharge what it stored beforehand."
  - q: "Is there still a federal tax credit for a home battery?"
    a: "Not for new installations. The IRS lists battery storage of at least 3 kWh among items that qualified for the Residential Clean Energy Credit, but says the credit is not available for property placed in service after December 31, 2025. Check for state or utility battery programs instead."
---

No, not on their own. A standard rooftop solar system shuts down when the grid goes down, even at noon on a cloudless day. To keep anything running during an outage, your system needs equipment that can disconnect your house from the grid and run it independently: usually a battery with a backup gateway, or one of a few inverters that can power limited loads in daylight without a battery.

This guide explains why that rule exists, what each backup setup actually delivers, and what to ask before you pay for one. It applies to grid-tied home solar anywhere in the U.S.; off-grid systems are a different design.

## Why Grid-Tied Solar Shuts Off

Most home solar is "grid-tied": it sends power into your home's wiring, and any surplus flows out to the utility lines. When the grid fails, those lines are supposed to be dead so repair crews can work on them. A solar system that kept pushing power onto them could injure a line worker or damage equipment.

So the rules require grid-tied inverters to detect an outage and stop energizing the grid. Inverters are tested to the UL 1741 standard for this, and the National Electrical Code (Article 690) requires them to disconnect when grid voltage is lost and stay off until it returns, as Penn State course materials (AE 868) summarize. The protection is called **anti-islanding**: your home is not allowed to become an "island" of power on a dead grid unless it is first cut off from the utility lines.

That is the key to every backup option below. Each one adds a way to **separate** your home from the grid, then lets the solar (or a battery) power the home safely on its own.

## Your Three Options

| Setup | Works at night? | What it can power | What it takes |
|---|---|---|---|
| Standard grid-tied solar | No | Nothing during an outage | Nothing extra; this is the default |
| Battery-free daylight backup | No | A few circuits or one outlet, varying with sunlight | Specific inverters plus control equipment |
| Solar plus battery | Yes, until the battery runs low | Essential circuits or, with enough capacity, most of the home | Battery, backup gateway or switch, and often a separate critical-loads panel |

### Battery-free daylight backup

Two manufacturers sell setups that use only sunlight:

- **Enphase Sunlight Backup.** Enphase IQ8 microinverters can form a small off-grid "microgrid" using only sunlight, the company said at launch in 2021. Its homeowner guide says the setup also needs an IQ System Controller 2, an IQ Combiner 4C and at least one IQ Load Controller, and it backs up at most four 240-volt or eight 120-volt circuits. Whole-home backup is not supported.
- **SMA Secure Power Supply.** Some SMA Sunny Boy inverters include a dedicated outlet that SMA says supplies up to 2,000 watts of "daytime opportunity power"; its manual describes using it when the grid fails.

Both come with real limits. Enphase tells homeowners to keep backup loads at or under **30%** of the microinverters' rated AC output; its example is 24 IQ8 microinverters rated at 5.7 kW AC, for a limit of about **1.7 kW**. It warns the system "may shut down" if solar output falls below what the loads need, then, if there is sunlight, can take up to two minutes to restart. SMA says power from its outlet "can fluctuate considerably depending on the weather or may not be available at all," warns against using it for loads that need a stable supply, and notes it cannot work at night.

In practice, these options suit phone and laptop charging, a router, a few lights and similar small loads on a sunny day. They are not a substitute for a battery if you need a refrigerator, medical equipment or heat to run through the night.

### Solar plus battery

Among solar setups, a battery is the only way to have power after dark. A backup gateway or automatic switch disconnects your home from the grid when it fails; the battery then runs the backed-up circuits, and if your inverter is compatible, the panels recharge it during the day.

For scale, Tesla's Powerwall 3 datasheet lists **13.5 kWh** of energy and **11.5 kW** of continuous output, with up to four units in one system. The energy rating (kWh) decides how long you last. The power rating (kW) decides how much you can run at once, including whether a well pump or central air conditioner can start. Our [solar battery sizing guide](/posts/battery-sizing-guide/) goes through both in detail.

## How Long Would a Battery Last?

Divide the battery's rated energy by your average load. These are our illustrative examples (the appliance lists are typical examples, not measurements), before inverter and wiring losses, assuming no solar recharge:

| Average load while the grid is down | 13.5 kWh battery | Two batteries (27 kWh) |
|---|---|---|
| 0.5 kW (refrigerator, some lights, internet, gas-furnace fan) | About 27 hours | About 54 hours |
| 1.5 kW (adds a well pump, microwave or window AC in use) | About 9 hours | About 18 hours |
| 4 kW (central AC or a heat pump running) | About 3.4 hours | About 6.8 hours |

The math: 13.5 kWh ÷ 0.5 kW = 27 hours; 13.5 ÷ 1.5 = 9; 13.5 ÷ 4 = 3.4. Your actual load will swing up and down through the day, and heating and cooling are the biggest swings. A sunny day can refill much of a battery, while a winter storm with snow-covered panels may give you almost nothing.

To estimate your own load, look at what you would truly need in an outage. Running the refrigerator, lights and internet for a couple of days takes far less battery than keeping central air or electric heat on.

## What to Ask Before You Buy

1. **Will my system keep producing during an outage?** Some battery setups only discharge what they stored beforehand because the solar inverter still shuts off. Ask the installer to confirm in writing that the panels will recharge the battery while the grid is down.
2. **Which circuits are backed up?** Essential loads usually go on a separate panel. Get the list in writing and make sure it includes what matters to you, such as the fridge, a sump or well pump, medical devices, and the furnace blower.
3. **Can it start my biggest motor loads?** Well pumps and central AC draw a surge at startup. Ask for the battery's or inverter's startup rating and whether it covers your equipment.
4. **What does an add-on cost if I already have solar?** Compatibility with your existing inverter drives the price. Get the full price including the gateway, any panel work and permits.
5. **Are there local incentives?** The federal Residential Clean Energy Credit included batteries of at least 3 kWh, but the IRS says it "is not available for any property placed in service after December 31, 2025." Some states and utilities run their own battery programs.

If you are comparing installers, our guide to [comparing solar quotes](/posts/how-to-compare-solar-quotes/) shows how to line up equipment and prices side by side. Our [Enphase IQ8 review](/posts/enphase-iq8-review/) covers that microinverter line in more depth.

## The Bottom Line

If backup power is the reason you want solar, plan for a battery and confirm in writing that your panels can recharge it while the grid is down. If you mostly want lower bills and only occasionally lose power, a battery-free daylight option or no backup at all may be enough. Just don't assume that panels on the roof will keep the lights on: by design, a standard system will not.

## Sources and Verification

| Important claim | Source | Status |
|---|---|---|
| Grid-tied inverters must detect outages and stop sending power (UL 1741); NEC 690 requires disconnection until grid voltage returns; purpose is worker and equipment safety | [Penn State AE 868, "Interconnection Codes and Technical Issues"](https://courses.ems.psu.edu/ae868/book/export/html/970) | Verified |
| IQ8 can form a microgrid using only sunlight | [Enphase news release, Oct. 25, 2021](https://newsroom.enphase.com/news-releases/news-release-details/enphase-energy-launches-iq8-industrys-first-microgrid-forming) | Verified |
| Sunlight Backup components, circuit limits, 30% / 1.7 kW guidance, shutdown and restart behavior | [Enphase, "Understanding Sunlight Backup System" (homeowner guide, April 2023)](https://enphase.com/download/understanding-sunlight-backup-system-homeowners) | Verified |
| SMA Secure Power Supply up to 2,000 W | [SMA America news release, Aug. 7, 2019](https://www.sma-america.com/newsroom/current-news/news-details/news/3937-sma-introduces-new-and-improved-sunny-boy-us-inverters.html) | Verified |
| Secure Power Supply output varies with sun, not for stable-supply loads, no night operation | [SMA manual, "Activating Secure Power Supply Operation"](https://manuals.sma.de/SBx1SPUS40/en-US/553216779.html) | Verified |
| Powerwall 3: 13.5 kWh, 11.5 kW continuous, up to four units | [Tesla Powerwall 3 datasheet (2024)](https://digitalassets.tesla.com/tesla-contents/image/upload/powerwall-3-datasheet-na-en.pdf) | Verified |
| 25D not available for property placed in service after Dec. 31, 2025; batteries of at least 3 kWh qualified | [IRS, Residential Clean Energy Credit](https://www.irs.gov/credits-deductions/residential-clean-energy-credit) | Verified |
