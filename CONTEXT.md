# Pool Cleaning Dude — Website

## What This Is
New website for poolcleaningdude.com, replacing the old GoHighLevel funnel site. Built with Next.js 16 + Tailwind CSS 4, deploying to Vercel.

## Brand Identity
Pool Cleaning Dude is the **maintenance/service sub-brand** of Tri-State Aquatic Solutions. Voice is informal, friendly, no-nonsense — "your pool guy, not a corporation." No contracts, honest pricing, local. The opposite of TSAS's premium/professional positioning.

## SEO Migration Context
- Old site was on GHL with 203 words total, 2 indexed pages, 5 clicks in 90 days
- Existing SEO equity is near-zero — migration risk is LOW
- **Preserved URLs**: `/`, `/contact-us`, `/pool-opening` (all match old site exactly)
- `/import` redirects to `/` (was a GHL artifact)
- Domain stays poolcleaningdude.com, just repoint DNS to Vercel
- JSON-LD LocalBusiness + Service schema on all pages (old site had none)
- Proper sitemap.xml and robots.txt (old site had empty ones)

## Current State (2026-03-23)
- **Status**: Scaffolded, builds clean, ready for design polish and Vercel deploy
- All 10 pages built: homepage, services, contact-us, pool-opening, about, 5 area pages
- Dynamic area pages with unique content per location
- All SEO infrastructure in place: schema, sitemap, robots, canonical URLs, OG tags
- Contact form is frontend-only (needs backend — likely GHL webhook or API route)

## Key Files
- `src/lib/config.ts` — Site-wide config (phone, address, services, testimonials, areas)
- `src/lib/schema.ts` — JSON-LD generators (LocalBusiness, Service, Breadcrumb)
- `src/lib/areas.ts` — Service area data with unique content per location
- `src/app/layout.tsx` — Root layout with Header, Footer, global schema
- `next.config.ts` — Redirects and security headers

## Decisions
- **URL structure matches old site** — `/contact-us` not `/contact`, `/pool-opening` stays
- **Dynamic area routes** — `/areas/[slug]` with `generateStaticParams` for SSG
- **No dark mode** — removed to keep brand clean and simple
- **Inter font** — clean, modern, works well for informal service brand
- **Pool Cleaning Dude sits under TSAS in AI Agent OS** — same business, different brand voice

## Next Steps
- [ ] Design polish — hero images, pool photos, color refinement
- [ ] Wire up contact form (GHL webhook or Next.js API route + email)
- [ ] Create GitHub repo and push
- [ ] Deploy to Vercel
- [ ] Repoint poolcleaningdude.com DNS to Vercel
- [ ] Submit sitemap to GSC
- [ ] Add Google Analytics / Meta Pixel
- [ ] Run pool-copy-review skill on all page content
