# Delivery verification

Checked September 26, 2026 using the supplied business brief and logo.

## Build

- TypeScript check: passed.
- ESLint: passed, no warnings or errors in project source.
- Optimized Next.js production build: passed.
- Production homepage, `/robots.txt`, and `/sitemap.xml`: HTTP 200.
- Homepage prerendered as static content; interactivity is limited to navigation, service selection, comparison, and the estimate form.

## Responsive and visual checks

- Layout width checks at 320, 375, 390, 430, 768, 1024, and 1440 pixels: no horizontal document overflow.
- Desktop and mobile layouts inspected, including service cards, before/after comparison, coverage list, process, gallery, logo/about section, CTA, contact form, and footer.
- Smallest phone layout uses a single-column service list. Larger phones use two columns; tablet and desktop layouts adapt independently.
- Supplied logo remains undistorted. Corrected the large logo's mobile height during QA.
- Hero, before/after, gallery, and logo image loading verified.
- Visible focus styles, form labels, a skip link, one H1, comfortable touch controls, and reduced-motion CSS are present. This is a practical accessibility review, not a formal WCAG certification.

## Interactions and content

- Every internal anchor resolves to an existing element.
- Service cards navigate to the estimate area and preselect the corresponding service, including the pool-deck naming normalization.
- Mobile menu opens and closes; Escape closes it and restores focus to the toggle.
- Comparison range control responds to keyboard arrow input and updates its accessible percentage label.
- Empty required fields, invalid phone numbers, and invalid email addresses show validation errors. Correcting entries allows the flow to continue.
- A valid request produces an encoded email draft addressed to the supplied business email, with accurate service and contact fields. The interface explicitly says nothing has been sent.
- No test email, call, SMS, or social message was sent.
- All phone links use `tel:+14072238412`; all SMS links use `sms:+14072238412`.
- Supplied Facebook and Instagram URLs are used consistently, with safe new-tab attributes. Link destinations were inspected; no login or social scraping was performed.
- Business hours and all 16 supplied communities match the brief.
- No ratings, customer counts, business history, credentials, warranties, prices, or testimonials were invented.

## SEO and runtime

- Requested title and description, Open Graph and Twitter metadata, favicon, semantic headings, and image descriptions are present.
- JSON-LD parses correctly and contains supplied business details, service areas, and hours, without unverified address or ratings.
- With no verified domain configured, production output correctly uses `noindex, nofollow`, `Disallow: /`, and an empty sitemap. Set `NEXT_PUBLIC_SITE_URL` and rebuild for public launch. The configured-domain branch is implemented and source-reviewed; a real production domain was not provided for end-to-end verification.
- No new browser errors were observed in the final production form and navigation checks. Temporary development refresh errors during dependency changes/builds were resolved by restarting with the final production build.

## Not measured or connected

- No Lighthouse score is claimed. Measure the deployed production URL for the final environment's performance, accessibility, best-practices, and SEO scores.
- No email service, Formspree, Resend, CRM, analytics, or Vercel account is connected. Native call/text and reviewable email drafts are available.
- Approved Privacy Policy and Terms content was not supplied; footer links request those documents by email.
- No physical iOS/Android device lab or cross-browser certification was performed. Responsive checks used the available browser's viewport controls.
