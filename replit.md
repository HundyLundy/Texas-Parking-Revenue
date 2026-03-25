# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite, Tailwind CSS, react-helmet-async, react-hook-form, framer-motion

## Project: Texas Parking Revenue (TexasParkingRevenue.com)

B2B parking revenue resource hub for Texas hotel owners, hospital operators, and commercial real estate owners. Lead generation platform for Perfect Parking.

### Site Architecture
- **Homepage** `/` - Hero, who-it-is-for, why parking matters, featured city/asset/decision cards, CTA
- **About** `/about` - Editorial methodology, trust signals
- **Resources** `/resources` - Resource hub index
- **Lead Capture** `/parking-revenue-analysis` - Contact form → POST /api/leads
- **City Pages** `/texas/houston-parking-revenue`, `/texas/dallas-parking-revenue`, `/texas/austin-parking-revenue`
- **Asset Pages** `/texas/hotel-parking-revenue`, `/texas/hospital-parking-management`, `/texas/commercial-real-estate-parking-revenue`
- **Decision Pages** `/resources/self-managed-vs-outsourced-parking`, `/resources/gated-vs-gateless-parking`, etc.
- **Directory** `/directory`, `/directory/properties`, `/directory/vendors`

### Config File
`artifacts/texas-parking-revenue/src/config/site.ts` — central settings for domain, branding, GA4, sponsor slots

### Key Components
- `NavBar`, `Footer`, `Layout` — shared layout
- `MetaTags` — per-page SEO with react-helmet-async (OG tags, canonical URLs, JSON-LD)
- `LeadForm` — form → POST /api/leads
- `CTABlock`, `PerfectParkingBlock` — CTA components
- `ProConTable`, `FAQAccordion` — content components for decision pages
- `CityPageTemplate`, `AssetPageTemplate`, `DecisionPageTemplate` — reusable page templates

### Database Tables
- `leads` — parking revenue analysis lead submissions
- `properties` — Texas property/parking asset records
- `vendors` — parking operator and technology vendors

### API Endpoints
- `POST /api/leads` — submit lead form
- `GET /api/directory/properties?city=&property_type=&featured=` — list properties
- `GET /api/directory/vendors?category=&featured=` — list vendors

### SEO Strategy
- Canonical domain: `texasparkingrevenue.com`
- Secondary redirect: `texasparkingmanagement.com` → 301 to primary
- Topic clusters: Texas parking revenue, hotel parking, hospital parking, CRE parking, city guides
- JSON-LD: Organization, BreadcrumbList, FAQPage schemas

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── texas-parking-revenue/  # React/Vite B2B website
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts
│   └── src/seed.ts         # Database seeder for properties & vendors
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`).
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references
- `pnpm --filter @workspace/scripts run seed` — seed the database with sample Texas parking data

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes in `src/routes/`:
- `health.ts` — GET /api/healthz
- `leads.ts` — POST /api/leads
- `directory.ts` — GET /api/directory/properties, GET /api/directory/vendors

### `artifacts/texas-parking-revenue` (`@workspace/texas-parking-revenue`)

React + Vite frontend. 19+ pages covering Texas parking revenue topics.
- Entry: `src/main.tsx`
- Router: `src/App.tsx` (wouter)
- Config: `src/config/site.ts`
- Pages: `src/pages/`
- Templates: `src/templates/`
- Components: `src/components/`

### `lib/db` (`@workspace/db`)

Database layer. Schema:
- `src/schema/leads.ts`
- `src/schema/properties.ts`
- `src/schema/vendors.ts`

### `lib/api-spec` (`@workspace/api-spec`)

OpenAPI 3.1 spec (`openapi.yaml`) and Orval config. Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `scripts` (`@workspace/scripts`)

- `pnpm --filter @workspace/scripts run seed` — populate DB with sample data
