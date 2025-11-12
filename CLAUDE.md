# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
An Arabic Calligraphy Generator web application built with Next.js 15, featuring 13+ premium Arabic fonts, real-time preview, and high-quality downloads.

## Development Commands

### Core Development
- `npm run dev` - Start development server
- `npm run build` - Build the application
- `npm run start` - Start production server
- `npm run lint` - Run Next.js lint

### Testing & Performance
- `npm run test:cls` - Test Cumulative Layout Shift (CLS)
- `npm run test:cls:dev` - Test CLS on local development
- `npm run test:cls:prod` - Test CLS on production
- `npm run lighthouse` - Run Lighthouse audit on local
- `npm run lighthouse:prod` - Run Lighthouse audit on production
- `npm run perf:test` - Run bundle analysis and Lighthouse

### Deployment (Cloudflare)
- `npm run cf:build` - Build for Cloudflare deployment
- `npm run cf:deploy:staging` - Deploy to staging environment
- `npm run cf:deploy:prod` - Deploy to production environment

### Other
- `npm run analyze` - Build with bundle analyzer
- `npm run submit-indexnow` - Submit sitemap to IndexNow

## Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with RTL support
- **UI Components**: Radix UI
- **ORM**: Not used directly (static content app)
- **Hosting**: Cloudflare Workers (via OpenNext)
- **i18n**: next-intl with support for 10 languages (en, ar, ur, bn, ms, id, de, hi, fr, tr)
- **Fonts**: Google Fonts with custom font loading logic

## Key Directory Structure
- `app/` - Next.js application directory (no src/ prefix)
  - `[locale]/` - Internationalized main app (calligraphy generator)
  - `api/` - API routes
  - `blog/` - Blog content
  - `fonts/` - Font detail pages
  - `guides/` - Guide content
  - `tutorials/` - Tutorial content
  - `use-cases/` - Use case content
  - `layout.tsx` - Root layout
- `components/` - React components
  - `ui/` - UI components (Radix UI wrappers)
- `lib/` - Utility functions
  - `fonts/` - Font definitions and utilities
- `messages/` - Translation files
- `.open-next/` - Cloudflare deployment build output
- `wrangler.jsonc` - Cloudflare Workers configuration

## Key Features
- Real-time Arabic calligraphy preview
- 13+ premium Arabic fonts (Amiri, Aref Ruqaa, Cairo, etc.)
- Customization options (color, size, spacing, alignment)
- PNG/SVG export with transparency
- Virtual Arabic keyboard
- Responsive design
- SEO-optimized content

## Configuration

### Cloudflare Deployment
- Configured in `wrangler.jsonc` (production) and `wrangler.staging.jsonc` (staging)
- Uses OpenNext for Next.js compatibility on Cloudflare Workers
- Environment variables managed in `vars` section of config

### Other
- **Fonts**: Defined in `lib/fonts/` with metadata and import logic (13+ Arabic fonts)
- **Tailwind**: Configured in `tailwind.config.ts` with RTL support and custom color palette
- **i18n**: Supported languages defined in `i18n.ts` with direction (LTR/RTL) info

## Important Files
- `app/[locale]/page.tsx` - Main calligraphy generator page
- `lib/fonts/index.ts` - Font registry and utilities
- `wrangler.jsonc` - Production Cloudflare deployment config
- `i18n.ts` - Internationalization configuration (supported languages, directions)
- `tailwind.config.ts` - Tailwind CSS configuration with RTL support

## Development Notes
- The app uses internationalization with path-based locales
- Cloudflare deployment uses OpenNext for Workers compatibility
- Fonts are imported as Next.js Fonts or loaded via CDN
- Critical CSS is optimized for performance

## Git Workflow
- Main branch: master
