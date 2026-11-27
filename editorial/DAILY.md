# Daily run notes (read first; where this conflicts with the scheduled prompt, this wins)

## Publishing rules (Nov 28, 2026; updated: 3 timely + up to 4 evergreen a week)

- **Weekly limits (Monday to Sunday, PKT):** at most **3 timely** articles (news, rate cases, filings) and at most **4 evergreen** articles. One new article per run. Count posts in content/posts with a `date` in the current week by type (timely = category news or a dated filing/decision; everything else is evergreen). If a type is full, write the other; if both are full, publish nothing new and only make sourced updates to existing pages.
- **Evergreen comes only from `content-plan/clusters.md`.** Take the first unchecked row of the highest-priority cluster (pillars first) that passes the source and duplicate checks. Follow that file's linking rules, then mark the row `[x] <slug>`.
- **Default choice per run:** a timely article when one with a primary source from the last 14 days exists and the timely limit allows; otherwise evergreen.
- **No new state-template pages.** See editorial/README.md "STATE PAGES AND DATES". State pages live at `/rates/<state>/`; link there.
- **Duplicate check before publishing.** Compare the draft's primary keyword, title and main question against editorial/INDEX.md and the existing page(s) on the same utility/topic (read their opening and headings). If an existing page answers substantially the same question, do not publish a new article: update the existing page instead (rewrite the affected text; add the figure to its "Changes since first publication" line) and report it as an update.
- **Never re-date unchanged pages.** `lastmod`/`lastVerified` move only when a figure on that page changes. No "Update, <date>:" notes and no dated "link from" notes on existing pages: add a plain internal link where it fits, without touching dates.

## Weekly plan (set Nov 13, 2026 from the Search Console review)

For run dates Nov 16 to Nov 22, 2026, the lead article is fixed by `content-plan/2026-W47.md`, section 4:

| Run date | Lead article | Target query |
|---|---|---|
| Mon Nov 16 | PSE&G Rate Increase 2026: What Changed on Your Bill | pse&g rate increase 2026 |
| Tue Nov 17 | SCE Rate Increase 2026: Oct. 1 Change and 2027 Outlook | sce rate increase 2026 |
| Wed Nov 18 | Illinois Net Metering Changes: Supply-Only Credits Explained | illinois net metering changes |
| Thu Nov 19 | FPL Rates 2026: Cost per kWh and Time-of-Use Hours | fpl residential electricity rate 2026 cents per kwh |
| Fri Nov 20 | PSO Rate Increase December 2026: 3.55% Approved | pso rate increase 2026 |
| Sat Nov 21 | New Jersey Net Metering 2026: Rules Now and the BPU Review | new jersey net metering policy 2026 |
| Sun Nov 22 | Penelec Rate Increase Dec. 1, 2026: New Price to Compare | penelec rate increase 2026 |

How to use it:
- Read that day's block in the plan: the reader's question, what the page must contain, source leads and the pages to link to and from. Working titles may be tightened to fit the 60-character rule; keep the target query first.
- The plan's source leads are leads, not facts. Run the normal source check and research. Nothing in the plan may be published without its own verbatim-quoted source.
- If the lead article fails the source check or its stated condition (PSO, Penelec), take the next unused alternate from the plan and say so in the report. Carry the skipped article forward to the first day its source is out.
- The second article of the day is chosen as usual from editorial/IDEAS.md and must not overlap the week's plan.
- Add the "link from" links the plan lists as plain internal links. Do not add dated notes and do not change lastmod on those pages.
- Before Nov 16 and after Nov 22, ignore this section unless a newer content-plan/ file is named here.

## Quality bar (every new article and every body update)

For readers:
- Answer the main question in the first 2 to 3 sentences, then go deeper.
- Give specifics: numbers, steps, comparisons, examples, trade-offs. No filler intro, no padding.
- Say who the advice is for and when it does not apply.

For search engines and AI answers:
- One clear question per H2 or H3, with a self-contained answer directly under it that makes sense when quoted alone.
- Use the exact wording of the target query, and of related real queries listed in the plan, in headings and FAQ questions.
- Tables for comparisons, numbered lists for steps.
- Primary sources for every fact and figure. The page shows one date, lastVerified (= lastmod = schema dateModified), which changes only when a figure changes.
- FAQ front matter on every article (it becomes FAQPage schema), a descriptive title and description, and internal links with descriptive anchor text.
