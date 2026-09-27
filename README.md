# Solar Examiner

Hugo site for solarexaminer.com — independent reporting on residential and community solar.

## Local preview

```
hugo server
```
Visit http://localhost:1313

## Add a post

```
hugo new content posts/my-post-slug.md
```
Front matter fields used by the templates:
- `title`, `date`
- `categories`: one of `reports`, `reviews`, `guides`, `policy` (drives the nav)
- `dek`: one-sentence subhead shown on cards and the hero
- `readtime`: e.g. `"6 min read"`
- `author`
- `weight`: any integer — only used to vary the card artwork pattern

You can drop a `<div class="stat-strip">...</div>` block (see existing posts for the markup) into any post body for a data callout row.

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
