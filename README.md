# Cup N Saucer — Business Growth Consultancy

A premium, production-ready marketing site built with **Next.js 15 (App Router)**,
**TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed around the brand's
core idea: the cup is vision, the saucer is structure — together, sustainable growth.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Requires Node.js 18.18+ (Node 20 LTS recommended).

## What's inside

- **Pages:** Home, About, Services (+ 16 dynamic service pages), Industries,
  Case Studies (+ dynamic), Insights (+ dynamic articles), Resources, FAQ,
  Contact, Book a Strategy Call, and four Legal pages.
- **SEO:** per-page metadata, Open Graph/Twitter tags, JSON-LD schema
  (Organization, Service, Article, FAQ), `sitemap.ts`, and `robots.ts`.
- **Animations:** subtle, elegant Framer Motion reveals; an animated brand mark
  in the hero. All respect `prefers-reduced-motion`.
- **Forms:** Contact, Consultation (lead capture), per-resource lead capture,
  and Newsletter. They use local success states — wire them to your backend.
- **Accessibility:** semantic HTML, skip-to-content link, visible focus states,
  labelled controls.

## Make it yours

1. **Logo** — the site ships with a faithful **vector recreation** of your mark at
   `public/logo-mark.svg` (used in `src/components/ui/Logo.tsx`). To use your
   original raster file, drop it in `public/images/` and swap the `<LogoMark />`
   for a `next/image`.
2. **Business details** — edit `src/lib/site.ts` (name, email, phone, WhatsApp
   number, address, social links, and the live `url`). These flow into the
   schema, footer, contact page, and metadata.
3. **Content** — everything is data-driven and easy to edit:
   - `src/data/services.ts` — pillars + full service catalogue
   - `src/data/content.ts` — industries, approach, testimonials, case studies, insights
   - `src/data/faq.ts`, `src/data/resources.ts`, `src/data/nav.ts`
4. **Forms** — connect to an API route or service (Formspree, Resend, Mailchimp,
   Brevo). Look for the `// Wire to ...` comments in the form components.
5. **Calendly & Map** — placeholders are marked in `book-consultation/page.tsx`
   and `contact/page.tsx`; paste your embed code there.
6. **Social image** — add `public/images/og-default.jpg` (1200×630).

## Design system

Defined in `tailwind.config.ts` and `src/app/globals.css`, derived from the logo:

| Token        | Value     | Use                       |
|--------------|-----------|---------------------------|
| `ink`        | `#14110C` | primary text / dark bg    |
| `cream`      | `#FBF8F1` | page background           |
| `gold`       | `#A6792E` | primary accent            |
| `gold-light` | `#C9A24B` | highlights / hover        |
| `taupe`      | `#6E6557` | secondary text            |
| `line`       | `#E4DDCD` | hairlines / borders       |

Type: **Cormorant Garamond** (display) + **Inter** (UI), loaded via `next/font`.

## Project structure

```
src/
  app/            # routes, layouts, metadata, sitemap, robots
  components/
    ui/           # primitives (Button, Container, Reveal, Logo, Icons, ...)
    layout/       # Navbar, Footer, FloatingSidebar
    home/         # homepage sections
    forms/        # Contact, Consultation, LeadCapture, Newsletter
  data/           # all editable content
  lib/            # site config, motion variants, schema helpers, utils
public/           # logo-mark.svg + image assets
```

## Performance notes

Built for a 90+ Lighthouse score: `next/font` (no layout shift), system-light
SVG icons, minimal JS (most pages are server components; only interactive bits
are client components), no blocking third-party scripts out of the box.
