# Solar Examiner

Hugo site for solarexaminer.com — independent reporting on residential and community solar.

## Local preview

```
hugo server
```
Visit http://localhost:1313

## Add a post

Posts are leaf bundles (`content/posts/<slug>/index.md` + `cover.jpg`):

```
hugo new content posts/my-post-slug
scripts/cover.sh <image-url> content/posts/my-post-slug
```
Front matter used by the templates: `title`, `description` (shown as the answer-first lead and on cards), `date`, `categories`, `imageAlt`, `imageCredit`, `lastVerified`, `faq` (list of `q`/`a`, emitted as FAQPage JSON-LD), plus optional `author`, `takeaways`.

Covers are processed with `.Fill "1200x630 webp q80"`; a gray placeholder shows if `cover.jpg` is missing. Social tags fall back to `/og-default.jpg`.

## Deploy: GitHub + Cloudflare Pages

1. Push this folder to a new GitHub repo (e.g. `solarexaminer`).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick the repo.
3. Build settings:
   - Framework preset: **Hugo**
   - Build command: `hugo --minify`
   - Build output directory: `public`
   - Environment variable: `HUGO_VERSION` = `0.123.7`
4. Add the custom domain `solarexaminer.com` under the Pages project's **Custom domains** tab once the first deploy succeeds.
5. Every push to `main` redeploys automatically.

No GitHub Actions workflow is needed — Cloudflare Pages builds Hugo natively.


## Writers

New articles are bylined **John Marshall** or **Craig Leslie** (they write for all three publications: WiFi Weekly, Solar Examiner and FirewallSync). Pick whichever of the two wrote the piece. Existing articles keep their current bylines.

## State hubs (Rates by State)

The 50 state hubs live at `/rates/<state>/` (front matter `url`), with source files still at `content/posts/<state>-electricity-rate-changes-2026/index.md`. They render through `layouts/posts/state-hub.html` (front matter `layout: "state-hub"` and `states: ["<State>"]`). Titles are evergreen ("<State> Electricity Rates and Solar"); the original dated article title is kept as `detailTitle` and its body renders unchanged in the "In depth" section. Old `/posts/<state>-electricity-rate-changes-2026/` URLs 301 to the new ones via `static/_redirects`. Link to hubs as `/rates/<state>/`.

- **Editorial and sourced data:** `data/states/<slug>.yaml` (rate_note, summary, solar, net metering, incentives, utilities, community solar, "what it means", sources, related guides). Hub FAQs live in the post front matter `faq` (the only source for the visible FAQ and FAQPage JSON-LD; answers may use the data tokens).. Text can use the tokens `{rate}` `{prev}` `{change}` `{us}` `{month}` `{prev_month}`, filled from `data/eia_prices.yaml`.
- **Monthly refresh (data-only):** update `data/eia_prices.yaml` (values plus `month`, `prev_month`, `released`) from EIA Electric Power Monthly Table 5.6.A, optionally append the month to `data/eia_series.yaml` (enables the trend line), and set `refreshed:` in each state file whose sections were re-checked. `refreshed` drives the "Last updated" line, WebPage `dateModified` and the sitemap `lastmod`. Re-read any summary sentence that compares a state to others (e.g. "lowest in the country") when the month changes.
- **News linking:** add `states: ["<State>"]` to a state-related post's front matter. The post then gets an above-the-fold link to the hub and an end-of-post box (hub plus the state's two `guides`), and appears in the hub's "Latest <State> news" list. State term pages (`/states/...`) are noindex and kept out of the sitemap.
- **Rules:** every figure needs a cited source and data month; omit what cannot be sourced. Write summary, solar, net metering and "what it means" fresh for each state.
