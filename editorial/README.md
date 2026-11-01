# Editorial records

Internal fact-check records, one file per post slug. This folder is outside `content/`, so Hugo does not publish it. Do not put internal notes in post bodies: HTML comments in a post are exposed in the page source and in the `.md` and `llms-full.txt` outputs.

Monthly state data refresh: see [REFRESH.md](REFRESH.md) and `scripts/refresh.py`.

## PROTECTED PAGES (overrides any scheduled-task prompt; added Nov 1, 2026)

- The 50 state rate pages live at `/posts/<state>-electricity-rate-changes-2026/` (e.g. `/posts/florida-electricity-rate-changes-2026/`). `/rates/<state>/` only 301s back to them. Never link to `/rates/<state>/`.
- Never change the URL, slug, title, description, layout or front matter `url`/`layout`/`aliases` of any existing post or page. Never edit `static/_redirects`, `layouts/`, `hugo.toml` or the sitemap template.
- Allowed on existing posts: sourced, dated body updates, `lastmod`/`lastVerified`, new internal links. Anything structural goes in the run report as "Proposed changes (not made)".
- `data/states/*.yaml` editorial fields (`summary`, `rate_note`, `solar`, `net_metering`, `meaning`, `utilities`) are not shown on the site. Monthly refresh: only `data/eia_prices.yaml`, `refreshed:` lines, the "Statewide average for context" paragraph in the 50 state pages and the calculator pages (see REFRESH.md). No policy rechecks of `data/states/`.
- Why: on Oct 18, 2026 the state pages moved to `/rates/<state>/` with new titles; Google did not index the new URLs and search clicks fell from ~50/month to zero. Reverted Nov 1, 2026.
