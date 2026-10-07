# Patterson Injury Lawyers website

Marketing site for Patterson Injury Lawyers ("the PIL"), a Philadelphia personal injury firm.
Next.js 16 (App Router), React 19, Tailwind CSS 4, Framer Motion. Every page is statically generated.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run lint
npm run audit:seo    # on-page SEO check against a running server (defaults to localhost:3000)
```

## Where things live

| What | File |
| --- | --- |
| **All client data**: phones, address, hours, social, GA4 ID, chat widget and intake form IDs, photo paths | `src/config/site.ts` |
| Brand colours and fonts | `src/app/globals.css` (`@theme` block) |
| Practice area copy (8 pages) | `src/content/practice/*.tsx` |
| Montgomery and Delaware County copy | `src/content/locations.tsx` |
| FAQ questions | `src/content/faqs.ts` |
| Blog posts | `src/content/posts.tsx` |
| Navigation and footer links | `src/lib/routes.ts` |
| Titles, descriptions, canonical, OG/Twitter | `src/lib/seo.ts` (`pageMetadata`) |
| Schema markup | `src/lib/schema.ts` |
| Redirects and security headers | `next.config.ts` |
| Contact form (embedded intake form) | `src/components/FormEmbed.tsx`, IDs in `site.ts` |
| Live chat widget | loaded in `src/app/layout.tsx`, ID in `site.ts` |

Shared components are in `src/components`: `Hero` (home and inner-page heroes, breadcrumbs),
`blocks` (CTA band, FAQ section, process timeline, card grid, photo slots, map),
`FaqAccordion`, `Header`, `Footer`, `FormEmbed`, `CookieConsent`, `StickyConsultBar`,
`PracticeTemplate` and `CountyTemplate`.

## Placeholders to replace before launch

Everything below is set in `src/config/site.ts` unless noted.

1. **GA4 ID**: `ga4Id` is `G-XXXXXXXXXX`.
2. **Google Maps**: confirm the pin for `mapsEmbedUrl` and the `geo` coordinates.
3. **Attorney review of legal copy**: practice pages, FAQ, blog posts and the three legal pages are
   general information drafted for the firm and should be reviewed by the attorney before launch.

## Photos

The skyline behind every hero, the Center City photo on `/philadelphia` and the eight practice-area
photos are **AI-generated illustrative images** (Higgsfield, GPT Image 2.5, October 2026). They live in
`public/images/site`. They approximate real places and do not show the firm's office, clients or cases;
the Disclaimer page says so. Replace any of them with real photography by overwriting the file or
changing the path:

| Image | Set in |
| --- | --- |
| Hero skyline, Center City | `images` in `src/config/site.ts` |
| Practice-area photos | `image` in each file under `src/content/practice` |

To add or replace photos from source files (PNG or JPG), which also rebuilds the social share image:

```bash
node scripts/prepare-photos.mjs "/path/to/folder-of-photos"
```

## Brand

The palette comes from the client's logo board: navy `#2B2C6C` and sky `#3ABFEF`. The brief's gold
accent was replaced by sky because the logo has no gold. To change the accent site-wide, edit the
three `--color-accent*` values in `src/app/globals.css`.

Logo files in `public/images/brand`, the favicon/app icons in `src/app` and the share image in
`public/og` are generated from the client's logo package:

```bash
node scripts/prepare-brand-assets.mjs "/path/to/RGB (for digital items)/Hi Res"
```

## Analytics and cookies

The GA4 tag is in `<head>` on every page (root layout) with Google Consent Mode. Analytics storage is
**denied by default** and only granted when a visitor clicks "Accept analytics" in the cookie banner.
"Cookie preferences" in the footer reopens the banner.

## Deploying and connecting pattersoninjury.com

The site is built for Vercel but runs on any Node host that supports Next.js.

1. Put the project in a Git repository and push it to GitHub.
2. In Vercel, import the repository. Framework preset: Next.js. No build settings need changing.
3. Deploy and check the preview URL.
4. Project > Settings > Domains: add `www.pattersoninjury.com` and `pattersoninjury.com`.
   Set `www` as the primary domain and let the apex redirect to it. This matches the canonical URLs,
   sitemap and schema, which all use `https://www.pattersoninjury.com`.
5. In GoDaddy DNS (the domain is currently on GoDaddy's website builder):
   - `A` record, host `@`, value: the IP Vercel shows for the apex domain
   - `CNAME` record, host `www`, value: the target Vercel shows (for example `cname.vercel-dns.com`)
   - remove the old website-builder `A` record and any domain forwarding
   - leave the `MX` and other mail records untouched so `lawpatterson.com` / firm email keeps working
6. Wait for DNS and the SSL certificate, then unpublish the old GoDaddy site.

After launch:

- Check `https://www.pattersoninjury.com/contact-us` returns a **301** to `/contact`.
  `/practice-areas`, `/privacy-policy` and `/terms-and-conditions` keep their old URLs.
- Submit `https://www.pattersoninjury.com/sitemap.xml` in Google Search Console.
- Update the website URL on the Google Business Profile, Facebook and Instagram.
- Run the pages through Google's Rich Results Test, and send a test message through the contact form.
