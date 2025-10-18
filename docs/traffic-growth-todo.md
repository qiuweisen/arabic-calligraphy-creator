# Traffic Growth Action Plan

All tasks below are aimed at lifting organic traffic, with emphasis on the US desktop segment where current CTR and rankings lag behind other markets.

## Priority 0 – Repair Critical Signals (execute first)
- **Standardize canonical & structured data URLs**  
  - Files: `app/resources/**/page.tsx`, `app/guides/**/page.tsx`, `app/use-cases/**/page.tsx`, `app/fonts/**/page.tsx`, and any other page whose metadata or JSON-LD still references `arabic-calligraphy-creator.com`.  
  - Actions: update `metadata`, `openGraph`, `twitter`, and embedded JSON-LD objects to point to `https://arabic-calligraphy-generator.com`.  
  - Post-check: run a sample through Search Console URL Inspection to confirm the correct canonical is picked up.

- **Expose existing locale versions via hreflang**  
  - File: `app/layout.tsx`.  
  - Actions: extend `metadata.alternates` (or inject `<link rel="alternate" hreflang>` tags) so `/`, `/ar`, `/id`, `/ms`, etc. all reference each other plus an `x-default`. This prevents Google from surfacing the wrong language in SERP and should improve regional CTR.

- **Validate schema coverage after fixes**  
  - Tools: Rich Results Test for homepage and at least one font detail page.  
  - Record status in `docs/changelog.md` so we can track reprocessing dates.

## Priority 1 – Lift Homepage CTR (US Desktop Focus)
- **Refresh snippet-facing copy without full rewrite**  
  - Files: `messages/en.json` (metadata + hero strings), `app/[locale]/page.tsx`.  
  - Actions: reduce repeated “Arabic calligraphy generator” phrasing, add social proof (e.g., 100k+ users, export formats) and trust cues aimed at US designers. Update `metadata.description` to emphasize “instant download / pro templates” style benefits.  
  - Validation: monitor GSC > Performance > Filters: Country=US, Device=Desktop, Page=`/` for CTR change over 28 days.

- **Showcase credibility in-page**  
  - Files: `app/[locale]/page.tsx`, `components/navbar.tsx` / shared components if needed.  
  - Actions: add a small “As seen in / Trusted by” bar or testimonials block above the fold for desktop. Ensure it does not degrade Core Web Vitals.

## Priority 1 – Improve Font Download Conversion
- **Surface download intent in the first viewport**  
  - Files: top performers starting with `app/fonts/amiri/page.tsx`, then replicate to other `app/fonts/*/page.tsx`.  
  - Actions: move `DownloadButton` into a hero strip or sticky bar, add direct file-size/license info beside it, and include a large preview image pulled from CDN. Keep existing descriptive content below the fold.

- **Layer FAQPage schema on existing accordions**  
  - Files: same font pages.  
  - Actions: generate a `FAQPage` JSON-LD block that mirrors the current FAQ accordion content to win FAQ-rich snippets on US queries (CTR currently 0.03% for “amiri font download”).

- **Strengthen `/fonts` index page**  
  - File: `app/fonts/page.tsx`.  
  - Actions: add quick links to most-downloaded fonts, include keyword-rich but natural descriptions, and highlight “Download instantly” messaging to improve its 0.83% CTR.

## Priority 2 – Expand Supporting Traffic Channels
- **Meta refresh for resource library**  
  - Files: `app/resources/page.tsx`, `app/resources/free-arabic-fonts/page.tsx`.  
  - Actions: after canonical fixes, revise titles/descriptions to target secondary US queries (“free Arabic font downloads”, “commercial use Arabic fonts”) and ensure structured data references the generator domain.

- **IndexNow / sitemap hygiene**  
  - Files: `lib/indexnow.ts`, `app/sitemap.ts`.  
  - Actions: once above changes ship, trigger IndexNow submissions for touched URLs and confirm sitemap entries use the correct domain. This accelerates re-crawling post-update.

## Measurement & Tracking
- **Weekly KPI snapshot**  
  - Export GSC data for:  
    - `/` (US Desktop), `/fonts`, `/fonts/amiri`.  
    - Queries: “arabic calligraphy generator”, “amiri font download”.  
  - Log clicks, impressions, CTR, position into `docs/revenue-optimization-todo.md` or a new spreadsheet tab. This keeps visibility on the impact of each sprint.

- **Page-level annotations**  
  - Continue updating `docs/changelog.md` for each deployment affecting SEO so future regressions can be correlated with code pushes.

Focus on finishing Priority 0 and Priority 1 items before attempting broader content production; these changes directly unblock traffic gains identified in recent GSC exports.
