# Pool Cleaning Dude — Website

## What This Is
Website for poolcleaningdude.com. Built with Next.js 16 + Tailwind CSS 4, deployed to Cloudflare Workers via `@opennextjs/cloudflare`. Replaced the old GoHighLevel funnel site.

## Brand Identity
Pool Cleaning Dude is the **maintenance/service sub-brand** of Tri-State Aquatic Solutions. Voice is informal, friendly, no-nonsense — "your pool guy, not a corporation." No contracts, honest pricing, local. The opposite of TSAS's premium/professional positioning.

## Target Market
- **Primary:** Main Line PA (Gladwyne, Villanova, Haverford, Bryn Mawr, Ardmore, Radnor, Wayne, Berwyn, Malvern, West Chester, Newtown Square, Media, Glen Mills, Chadds Ford)
- **Secondary:** Northern Delaware (Hockessin, Greenville, Centreville, Montchanin, Wilmington, Pike Creek, Newark, Yorklyn)
- Majority of revenue expected from Main Line PA

## Current State (2026-05-06)
- **Status:** LIVE at poolcleaningdude.com (migrated off Vercel today; Brandon cancelled Vercel)
- **Hosting:** Cloudflare Workers (account `a674fb068af8a009d9efe474a27b01b1`, worker `poolcleaningdude`, preview URL `https://poolcleaningdude.poolops-bryce.workers.dev`)
- **Deploy:** `npm run cf:build && npm run cf:deploy` (manual Wrangler deploy; no GitHub Actions deploy workflow is present in this checkout)
- **GitHub:** https://github.com/brandonbot67/poolcleaningdude
- **DNS:** Cloudflare nameservers (`scott.ns.cloudflare.com`, `samara.ns.cloudflare.com`); zone `53a762f715b8d3b3667b23601281ecf7`. Apex + www are Workers Custom Domains — DNS auto-managed by Cloudflare.
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
- `next.config.ts` — Redirects + security headers + OpenNext dev hook
- `wrangler.jsonc` — Cloudflare Worker config (bindings, compatibility flags, custom domain routes)
- `open-next.config.ts` — OpenNext Cloudflare adapter config

## Decisions
- **URL structure matches old site** — `/contact-us` not `/contact`, `/pool-opening` stays
- **Dynamic area routes** — `/areas/[slug]` with `generateStaticParams` for SSG
- **Main Line PA first** — service areas ordered PA then DE, reflecting revenue priority
- **No "Tri-State" branding** — site says "Main Line PA & Northern Delaware"
- **Separate analytics from TSAS** — own PostHog project, own GTM container, own Meta Pixel
- **posthog-js npm package** — inline snippet caused hydration crash, npm package works
- **Contact form POSTs to API route** — prevents PII in URL (Meta Pixel compliance)

## Recent Marketing Update (2026-03-27)
- Marlo created a new spring lead-gen asset set for immediate use once Brandon gives GO on pool outreach.
- Deliverable: 1 Facebook concept with A/B hook variants targeting DIY-Tired Dave.
- Winning angle on paper: getting Saturdays back instead of spending the first warm weekend fighting the pool cover and chemicals.
- Positioning used: route-based service, no contract, weekly maintenance starting at $65/visit.
- Review package and Catbox image link are saved in `~/.openclaw/workspaces/marlo/memory/2026-03-27.md`.

## Social Media Voice Research (2026-05-09)
- Elon audited current PCD web/social voice for future content creation.
- Full analysis saved at `research/social-media/social-media-voice-analysis-2026-05-09.md`.
- Operational voice guide saved at `SOCIAL_VOICE_KIT.md`.
- Ready-to-use captions/templates + 30-day plan saved at `SOCIAL_CONTENT_TEMPLATES.md`.
- Research index/caveats saved at `research/social-media/README.md`.
- Raw Instagram profile/feed pull saved at `research/social-media/instagram_raw_posts.json`; downloaded recent visual samples + contact sheet saved under `research/social-media/assets/`.
- Public Facebook correction pass completed: rendered visible public page, extracted one visible Oct 27 green-to-clean video/post, 11 public image assets, video frames, and contact sheet under `research/social-media/assets/facebook/` + `assets/facebook_contact_sheet.jpg`.
- Coverage caveat: Facebook full internal Page history is not guaranteed because public render hits login wall; future 100% FB audit should use Meta admin/manual review, Meta export, Metricool export, or official API. Do **not** aggressively scrape or evade platform limits.
- Key voice direction: local no-contract pool guy, not corporate pool company — “Fast. Simple. No BS. Green-to-clean proof from the dude who actually does the work.”
- Practical rule for future content: real pool proof first, graphics second. Lean into before/after, satisfying cleaning reels, owner/operator trust, and plainspoken local CTAs.

## Recent Changes
- **2026-08-19:** Conversion pass live. Real SMS links, name+phone-only form, `/pool-closing` page, starting prices on home/services, hero swapped to Brandon at the pool, `/contact` 301s to `/contact-us`.
- **2026-05-19:** Elon generated IG Reel storyboard + video ad via Grok (X Premium+ OAuth). 4-frame pool opening transformation (cover → green → running → swimmable). 8-second 9:16 video with "We Open Pools. You Swim. No Contracts." overlay. Ready to post on PCD Instagram.
  - Storyboard frames: `~/.openclaw/media/tool-image-generation/pcd-storyboard-01-04-*.jpg`
  - Video: `~/.openclaw/media/tool-video-generation/video-1---0026ba05-*.mp4`
  - Caption drafted in Elon session #5255.

## Next Steps
- [x] Hero now uses existing `brandon-pool.jpg` (2026-08-19)
- [ ] More real pool proof shots (field shots exist; need privacy pass)
- [ ] Design polish — the site is functional but visually basic
- [ ] Wire GitHub Actions → `wrangler deploy` for auto-deploy on push to `main`
- [ ] Test `Lead` event tracking on form submit
- [ ] Consider GA4 property via GTM

## Migration Note (2026-05-06)
Site went down (Cloudflare 530) because Brandon cancelled Vercel. Old DNS pointed at a dead Cloudflare Tunnel CNAME (`c855b409-...cfargotunnel.com`). Migrated stack to Cloudflare Workers via `@opennextjs/cloudflare` adapter:
1. Bumped `next` from 16.2.1 → 16.2.5 for OpenNext peer-dep compatibility
2. Added `@opennextjs/cloudflare` + `wrangler` devDeps
3. Added `wrangler.jsonc`, `open-next.config.ts`, `cf:build/preview/deploy` npm scripts
4. Deployed worker `poolcleaningdude` with secrets `OPENROUTER_API_KEY` + `ANTHROPIC_API_KEY`
5. Deleted dead apex/www CNAMEs to `cfargotunnel.com`
6. Attached apex + www as Workers Custom Domains (auto-creates DNS + SSL)
7. Verified all 200 (homepage, /contact-us, /areas/wayne-pa, etc.)

## Metricool Research (2026-05-09)
- Investigated Metricool for PCD social media research.
- PCD is NOT currently in Metricool. Account has 4 brands (302 Photo Booth, boothlaunchpad_, Tri-State Aquatic Solutions, empty slot #6023139).
- Metricool API key works (X-Mc-Auth header). Downloaded full swagger spec.
- Setup guide saved at `research/metricool/METRICOOL-SETUP-GUIDE.md`.
- Once Brandon connects PCD in Metricool (5-min web UI task), agents can pull complete FB+IG post history safely through the API.

## 2026-05-14 — Cash repair-specialist recruiting support
Cash prepared the PoolCleaningDude.com-led repair-specialist send action from the latest TSAS queue. No outbound sent. Package: `/Users/brandonbot/.openclaw/workspaces/cash/drafts/TSAS-PCD-Repair-Specialist-Send-Action-2026-05-14.md`. Brandon sends 7 texts personally as Alex; Cash tracks replies only after send.
