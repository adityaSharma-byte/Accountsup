# AccountsUp — Website

Marketing site for **AccountsUp** (corporate accounting partner, US & Canada).
Built with **Next.js 16** (App Router) + **Tailwind CSS v4**, output as a **static
export** so it deploys to GitHub Pages, Vercel, or any static host.

## Editing content (no code needed)

All copy lives in plain files under `src/content/`:

| File          | What it controls                                                              |
| ------------- | ---------------------------------------------------------------------------- |
| `site.ts`     | Brand name, contact details, phone/email, nav, socials, CTA buttons          |
| `services.ts` | The three services — names, descriptions, features, platforms, tax scope     |
| `home.ts`     | Stats, "why us", process steps, security list, case study, testimonials, FAQ |

Change a value → commit → push. That's the entire edit loop.
Design tokens (colors, fonts) are at the top of `src/app/globals.css`.

## ⚠️ Before you publish — replace placeholders

- **Phone numbers** in `site.ts` are dummy (`555-…`), carried over from the old site.
- **Stats** (500+ clients, 99.8% accuracy) and the **case study / testimonials** in
  `home.ts` are illustrative — confirm they are true or replace them.
- **Footer trust badges** are capabilities (US GAAP, QuickBooks…), not accreditations.
  Add real ISO / GDPR / ProAdvisor logos only if you actually hold them.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

(Requires Node 18.18+ or 20+. This machine uses nvm — run `nvm use` if `node` isn't found.)

## Deploy

### Option A — GitHub Pages (already wired up)

A workflow at `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

1. Create a GitHub repo and push this folder.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Push to `main` → the site builds and publishes automatically.

The custom domain `accountsup.com` is set via `public/CNAME`. Delete/change that file
if you use a different domain. For a GitHub *project* page without a custom domain, set
`basePath` in `next.config.ts` instead.

### Option B — Vercel (zero config)

Import the repo at vercel.com. If you later want server features (ISR, server actions),
remove `output: "export"` from `next.config.ts`.

## Structure

- `src/app` — pages (`/`, `/services`, `/about`, `/contact`) + root layout
- `src/components/layout` — TopBar, Header, Footer
- `src/components/sections` — homepage sections
- `src/components/ui` — Button, Container, Counter, SectionHeading, PageHeader
- `src/content` — all editable copy
