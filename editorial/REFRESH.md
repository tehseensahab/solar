# Monthly state refresh runbook

> **Overrides the scheduled-task prompt (Nov 28, 2026).** State pages live at `/rates/<state>/` (built to
> `public/rates/<state>/`), not `/posts/<state>-electricity-rate-changes-2026/`. `apply` also sets `lastmod` and
> `lastVerified` to today on each state page whose figures changed: those two front matter lines are EXPECTED in the
> diff and must not be reverted. If the prompt says otherwise, this file wins.

Run after EIA's Electric Power Monthly release (about the 24th). Tooling: `scripts/refresh.py`.
Needs Python 3 with `pyyaml` and `openpyxl`, `curl`, and Hugo extended (production pins **0.123.7**, see README).

## Steps

1. `python3 scripts/refresh.py check`. If it prints `NO_NEW_RELEASE`, stop (notify only if you were asked to).
2. Branch: `refresh/YYYY-MM` (the run stops if it already exists on origin). Rebase or merge `origin/main` before pushing;
   daily-article PRs land on `main` often.
3. `python3 scripts/refresh.py apply`. It downloads Table 5.6.A, refuses to run unless all 50 states and the U.S. are present,
   then updates:
   - `data/eia_prices.yaml` (month, prev_month, released, every state's rate, change, bill)
   - `refreshed:` on every state file whose numbers changed
   - the "<State> Statewide Average" paragraph and EIA source line in all 50 state pages (/rates/<state>/)
   - the three calculator pages (month labels, U.S. rate, EV worked example, payback table)
   If the index page cannot be read, pass `--released YYYY-MM-DD`. If curl is blocked, WebFetch the table and stop
   if it lacks any state. Never use third-party copies.
4. `python3 scripts/refresh.py audit`. Only its stale-month-label list matters now: each listed file is either a dated
   article (add the path to `scripts/refresh_ignore.txt`) or text to update. Ignore what it prints about state `summary`,
   `rate_note`, `solar` or `meaning` in `data/states/`: since the Nov 1, 2026 revert those fields are not shown on the site.
5. Skip `refresh.py due` and policy rechecks of `data/states/` (unused since the revert). Policy news for a state goes
   into a daily article instead.
6. Never change the URL, slug, title, description, layout or front matter `url`/`layout`/`aliases` of any page, and
   never edit `static/_redirects`, `layouts/`, `hugo.toml` or the sitemap template. State pages are at `/rates/<state>/`.
7. Build with `hugo --minify` (zero errors). Spot-check the three biggest movers in `public/rates/<state>/`:
   the "<State> Statewide Average" paragraph matches the data, the title is unchanged, the canonical is
   `https://solarexaminer.com/rates/<state>/`, byline "Last verified" equals JSON-LD dateModified, exactly one FAQPage JSON-LD.
8. Push the branch. Merge to `main` only when asked (Cloudflare Pages builds every push to `main`).

## State file fields that drive rechecks

- `refreshed:` set by `apply` in data/states (internal only). Page dates come from each state page's `lastVerified`.
- `policy_checked:` the last date someone verified the policy text (net metering, utilities, meaning). `due` flags a state
  when this is older than 30 days.
- `watch:` optional list of dated triggers, so a known decision is checked the month it happens:

      watch:
        - {date: 2026-12-31, what: "ACC vote on APS rate case (E-01345A-25-0102)"}

  `due` also flags any full date written in the state text that has passed since `policy_checked`
  (near words like vote, hearing, expected, effective).

## Keep dated articles as they are

Articles that report a specific month (for example `electricity-prices-by-state-july-2026`) keep their figures.
They are listed in `scripts/refresh_ignore.txt`.

## Brief for research agents

Use one agent per ~10 due states (or none). Give each: the state slugs, today's date, the `policy_checked` date, and:

> Read-only. For each listed state, read `utilities`, `net_metering`, `meaning` of data/states/<slug>.yaml. For each item named as
> pending or dated in the `due` output, make at most 3 searches to find a change on or after <policy_checked>. Prefer
> regulator, legislature or utility documents; if a regulator PDF can't be fetched, search its docket number for another
> official copy before using news, and flag any fallback. Report only confirmed changes: state, field, exact new fact, date,
> primary source URL. One line per unconfirmed item. Do not edit files.

Previous run (October 2026): four agents, about 480k tokens, one confirmed change. Skipping states `due` does not list is
the main saving.

## Notes

- Hugo shortcodes are not used for the rate paragraphs because the `.md` and `llms-full.txt` outputs print raw content.
  `apply` regenerates the text instead.
- `data/eia_series.yaml` stays empty until the full EIA monthly series is read from EIA; never interpolate.
