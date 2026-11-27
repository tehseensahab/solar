# Editorial records

Internal fact-check records, one file per post slug. This folder is outside `content/`, so Hugo does not publish it. Do not put internal notes in post bodies: HTML comments in a post are exposed in the page source and in the `.md` and `llms-full.txt` outputs.

Monthly state data refresh: see [REFRESH.md](REFRESH.md) and `scripts/refresh.py`.

## STATE PAGES AND DATES (overrides any scheduled-task prompt; updated Nov 28, 2026)

- Each state has exactly ONE URL: `/rates/<state>/` (front matter `url`), e.g. `/rates/florida/`. The content file stays at `content/posts/<state>-electricity-rate-changes-2026/index.md`. Old `/posts/<state>-electricity-rate-changes-2026/` URLs 301 to it (static/_redirects). The hub is `/rates/`. Always link to `/rates/<state>/` and `/rates/`.
- Never change the URL, slug, title, `url`/`layout`/`aliases` of any existing page, and never edit `static/_redirects`, `layouts/`, `hugo.toml` or the sitemap template, unless the owner asks for that change in chat.
- No new state-template pages (no "<State> electricity rates/changes" pages, no per-state copies of a generic structure). State news goes in a per-utility article linked to the state page, or into the state page itself.
- Updating an existing page: rewrite the affected sentence, table row, takeaway or FAQ so the page reads as current. Never add "Update, <date>:" notes. When a figure changes, add it to the page's single "**Changes since first publication:**" line (above Sources) as "<Mon. D, YYYY>: <what changed>", newest first.
- Dates: `lastVerified` is the page's only modified date (byline "Last verified", schema dateModified, sitemap lastmod). Set `lastmod` and `lastVerified` to the same date, and change them ONLY when a figure on the page changes. Link-only, wording or layout edits never touch them. Never re-date an unchanged page.
- `data/states/*.yaml` editorial fields are not shown on the site. Monthly refresh: only `data/eia_prices.yaml`, `refreshed:` lines, the "<State> Statewide Average" paragraph and the calculator pages (see REFRESH.md); refresh.py moves lastmod/lastVerified on state pages it changes.
- History: Oct 18, 2026 move to /rates/ left both URLs live with conflicting canonicals; Nov 1 revert made /rates/ 301 to /posts/. Nov 28, 2026: consolidated on /rates/<state>/ with one canonical per state.
