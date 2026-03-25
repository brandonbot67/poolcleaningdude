# Pool Cleaning Dude — Website

## What This Is
Website for poolcleaningdude.com. Built with Next.js 16 + Tailwind CSS 4, deployed to Vercel. Replaced the old GoHighLevel funnel site.

## Brand Identity
Pool Cleaning Dude is the **maintenance/service sub-brand** of Tri-State Aquatic Solutions. Voice is informal, friendly, no-nonsense — "your pool guy, not a corporation." No contracts, honest pricing, local. The opposite of TSAS's premium/professional positioning.

## Target Market
- **Primary:** Main Line PA (Gladwyne, Villanova, Haverford, Bryn Mawr, Ardmore, Radnor, Wayne, Berwyn, Malvern, West Chester, Newtown Square, Media, Glen Mills, Chadds Ford)
- **Secondary:** Northern Delaware (Hockessin, Greenville, Centreville, Montchanin, Wilmington, Pike Creek, Newark, Yorklyn)
- Majority of revenue expected from Main Line PA

## Current State (2026-03-23)
- **Status:** LIVE at poolcleaningdude.com
- **Hosting:** Vercel (manual CLI deploy, GitHub auto-deploy needs Vercel app repo access)
- **GitHub:** https://github.com/brandonbot67/poolcleaningdude
- **DNS:** GoDaddy, A record → 76.76.21.21, www CNAME → cname.vercel-dns.com
- **Pages:** 27 total (homepage, services, contact-us, pool-opening, about, 22 area pages)
- **Contact form:** Wired to GHL PCD sub-account (location: GRCLPh6B7KwWCf8PRIUt)
- **GHL Login:** brandonbot67@gmail.com (NOT brandon@boothlaunchpad.com — that email has no MX records)
- **Analytics:**
  - PostHog: `phc_coeTLrzdu6Sa1QamyXR3ysiKdlagXCT322TPjRDDxUU` (PCD-specific project)
  - GTM: `GTM-WK69CW77` (PCD-specific container)
  - Meta Pixel: `1450089306162928` (Pool Cleaning Dude Event Data)
- **GSC:** Verified (sc-domain:poolcleaningdude.com), sitemap submitted
- **SEO:** JSON-LD LocalBusiness + Service + Breadcrumb schema on all pages, sitemap.xml, robots.txt, canonical URLs, OG tags
- **Copy:** Passed three-voice pool-copy-review (CPO, inground owner, above ground owner)

## SEO Migration Notes
- Old GHL site had 203 words total, 2 indexed pages, 5 clicks in 90 days
- All existing URLs preserved: `/`, `/contact-us`, `/pool-opening`
- `/import` (GHL artifact) 301 redirects to `/`
- Migration risk was near-zero due to minimal existing equity

## Key Files
- `src/lib/config.ts` — Site config (phone, address, 22 service areas, 6 services, testimonials)
- `src/lib/schema.ts` — JSON-LD generators (LocalBusiness, Service, Breadcrumb)
- `src/lib/areas.ts` — 22 area pages with unique content per location
- `src/components/Analytics.tsx` — GTM, Meta Pixel, PostHog (all PCD-specific)
- `src/components/ContactForm.tsx` — Form → /api/contact → GHL upsert
- `src/app/api/contact/route.ts` — GHL contact upsert API route
- `src/app/layout.tsx` — Root layout with Header, Footer, Analytics, schema
- `next.config.ts` — Redirects and security headers

## Decisions
- **URL structure matches old site** — `/contact-us` not `/contact`, `/pool-opening` stays
- **Dynamic area routes** — `/areas/[slug]` with `generateStaticParams` for SSG
- **Main Line PA first** — service areas ordered PA then DE, reflecting revenue priority
- **No "Tri-State" branding** — site says "Main Line PA & Northern Delaware"
- **Separate analytics from TSAS** — own PostHog project, own GTM container, own Meta Pixel
- **posthog-js npm package** — inline snippet caused hydration crash, npm package works
- **Contact form POSTs to API route** — prevents PII in URL (Meta Pixel compliance)

## Next Steps
- [ ] Pool photos / hero images (need from Brandon)
- [ ] Design polish — the site is functional but visually basic
- [ ] Grant Vercel GitHub app access to repo for auto-deploy
- [ ] Add `Lead` event tracking to Meta Pixel on form submit (already in code, needs testing)
- [ ] Consider GA4 property via GTM
