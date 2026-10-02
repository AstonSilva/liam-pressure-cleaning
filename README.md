# Liam Pressure Cleaning LLC

A custom, responsive Next.js App Router website for residential and commercial exterior cleaning in Central Florida. Built with TypeScript, Tailwind CSS, a custom CSS design system, Lucide icons, and small interactive React components. The homepage is prerendered. No animation framework, analytics, cookie banner, or external font request is included.

## Run locally

Use Node.js 22.13 or later (tested with Node 24.19) and pnpm 11.19.

```sh
npm install -g pnpm@11.19.0
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Next.js (normally http://127.0.0.1:3000).

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

The delivered lockfile pins the tested dependency graph. TypeScript 5.9 and ESLint 9 are intentionally retained for compatibility with Next.js's current lint plugin dependencies. ESLint 10 currently fails in that dependency's React rules; revisit this pin when the upstream plugin supports it. This affects development tooling, not browser code.

## Project structure

```text
app/
  page.tsx                Complete homepage
  layout.tsx              Metadata, language, stylesheet, skip link
  globals.css             Brand tokens and responsive design system
  robots.ts               Search crawling policy
  sitemap.ts              Sitemap from the verified public domain
components/
  header.tsx              Sticky navigation and keyboard-friendly mobile menu
  footer.tsx              Contact links, hours, legal-policy request links
  estimate-form.tsx       Validation, reviewable email draft, copy fallback
  service-link.tsx        Service cards prefill the estimate selection
  logo.tsx                Original-brand web image
  structured-data.tsx     HomeAndConstructionBusiness JSON-LD
  ui/button.tsx           Shared CTA styling
  sections/               Hero, services, before/after, benefits, areas,
                          process, gallery, about, CTA, and contact
lib/
  business.ts             Contact details, services, cities, hours, metadata
  media.ts                Approved project photos, before/after pair, reviews
  estimate.ts             Typed estimate, validation, and email-draft adapter
public/
  logo/                   Original PNG, cropped WebP, favicon
  images/hero/            Hero pressure-washing photo
  images/services/        Reserved for approved service photography
  images/projects/        Service gallery photography
  images/before-after/    Matched before/after photography
```

One public page uses real internal anchors: Home, Services, Areas We Serve, About, and Contact. The gallery and comparison are ready for real photographs. Testimonials are omitted until attributed, approved reviews are added to `lib/media.ts`.

## What to edit

- Business name, phone, email, hours, city coverage, services, social links, and SEO copy: `lib/business.ts`.
- Colors, spacing, typography, and responsive rules: `app/globals.css`.
- Gallery, before/after pair, and verified testimonials: `lib/media.ts`.
- Section-specific copy: `components/sections/`.
- Final domain: `NEXT_PUBLIC_SITE_URL` in the deployment environment. Copy `.env.example` to `.env.local` for local configuration.

Do not invent a domain. Without a verified domain, the site intentionally has `noindex` metadata, disallows crawlers, returns an empty sitemap, and omits the canonical URL. Set the HTTPS origin and rebuild before launching for search indexing. Preview environments should leave it unset. Structured data excludes street address, coordinates, ratings, prices, and other unverified details.

## Logo and photography

The supplied original is preserved at `public/logo/liam-original.png`. `liam-logo.webp` is a tightly cropped derivative preserving the original artwork and proportions. `favicon.png` also derives from the supplied image.

The hero image is stored at `public/images/hero/pressure-washing-hero.webp`. Its factual alternative text is defined in `components/sections/hero.tsx`.

The driveway comparison uses the matched files in `public/images/before-after/`. The accessible keyboard and touch range control reveals the pair.

Gallery images are stored in `public/images/projects/` and configured in `lib/media.ts` with file paths, descriptive alt text, titles, and service categories. The section uses neutral service-gallery language and does not identify the images as verified Liam customer projects.

Use WebP or AVIF, at least 1600px wide for the hero and comparison, and consistent viewpoints for before/after pairs. Next/Image supplies optimized responsive images, stable sizing, and lazy loading below the hero. Photo cards preserve aspect ratio with `object-fit: cover`; the logo always uses contain.

## Estimate delivery

The form is functional without a backend: it validates the visitor's details, prepares a reviewable draft, then offers **Open email app** and **Copy request**. Nothing is sent from the site. The visitor must send the message from their email app. Phone and SMS links also work directly.

`lib/estimate.ts` is the integration boundary for Formspree, a server action using Resend, an email API, or a CRM. These are optional and not configured. To connect one:

1. Add a server action or POST route and re-run the shared validation server-side.
2. Store provider keys in server-only environment variables.
3. Add abuse controls and provider error handling appropriate to your deployment.
4. Update the form to await the provider result; only show a sent confirmation after acceptance.
5. Update the visitor-facing delivery explanation and privacy policy to match the connected provider.

No customer messages, records, secrets, or sample form submissions are bundled. Do not add a public API key or make the current UI claim a request was sent.

## Deploy to Vercel

1. Push this project folder to a Git repository and import it into Vercel. Choose **Next.js**. If it is inside a larger repository, set this folder as the Root Directory.
2. Use a supported Node.js version of 22.13 or later; Node 24 was used for validation.
3. Set `ENABLE_EXPERIMENTAL_COREPACK=1` so Vercel uses the `packageManager` version in `package.json`. Keep the lockfile committed and the default install detection. Build command: `pnpm build`. Leave the output directory at the Next.js default.
4. Add the verified production domain as `NEXT_PUBLIC_SITE_URL`, including `https://` and no path. Leave it unset for unindexed preview deployments.
5. Deploy. After attaching the final domain, verify the canonical, `/robots.txt`, `/sitemap.xml`, and contact actions on that domain.

The site has been built locally; it has not been published to a Vercel account. No Vercel credentials or final domain were supplied.

See the official [Vercel package-manager documentation](https://vercel.com/docs/package-managers), [build configuration](https://vercel.com/docs/builds/configure-a-build), and [Next.js deployment guide](https://nextjs.org/docs/app/getting-started/deploying).

## Before the public launch

- Add the approved Privacy Policy and Terms pages. The footer currently offers functional email links to request these documents, rather than inventing legal text.
- Set the verified domain and rebuild to activate indexing, canonical URLs, and the sitemap.
- Keep the email-draft flow or connect an optional form provider and test real delivery.
- Audit Lighthouse against the deployed production URL. Scores are not claimed; no Lighthouse measurement has been fabricated.

See `QA.md` for the checks performed on this delivery.
