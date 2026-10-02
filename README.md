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
