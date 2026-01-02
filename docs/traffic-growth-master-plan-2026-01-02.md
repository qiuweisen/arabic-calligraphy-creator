# Traffic Growth Master Plan (2026-01-02)

## 1) Goal and Scope
- Primary goal: grow organic traffic beyond the current ~600-700 clicks/day plateau.
- Scope: optimize existing high-traffic pages first, then build new tool landing pages to capture high-intent queries.
- Principle: one primary query intent per URL to avoid cannibalization.

## 2) Baseline (GSC Last 28 Days: 2025-12-03 to 2025-12-30)
- Total clicks: 18,970
- Total impressions: 248,271
- CTR: 7.64%
- Avg position: 7.79
- Top pages by clicks:
  - /: 4,675 clicks, 67,070 impressions, CTR 6.97%, pos 9.44
  - /fonts: 4,255 clicks, 77,133 impressions, CTR 5.52%, pos 7.77
  - /ar: 3,733 clicks, 63,596 impressions, CTR 5.87%, pos 7.80
  - /id: 3,404 clicks, 14,692 impressions, CTR 23.17%, pos 5.40
  - /fr: 1,622 clicks, 15,033 impressions, CTR 10.79%, pos 6.23

## 3) Diagnosis (Why main query dropped to ~11.x)
- Intent split across URLs: generator vs fonts/download vs multi-language pages.
- Authority drift: /fonts dominates impressions and can steal "main entry" signals.
- Index noise: staging domain indexed, diluting canonical signals.

## 4) Strategy (Single Source of Truth)
- Assign "Arabic Calligraphy Generator" to one URL only (the homepage /).
- Other pages should "step down" and focus on their own intent:
  - /fonts: fonts library and downloads only.
  - /ar, /id, /fr, /ur, etc: local language intent only.
- Use internal links to vote for / as the primary generator page.

## 5) Phased Plan

### Phase 0 - Index Hygiene (Week 0-1)
Objectives:
- Remove staging domain from index.
- Remove duplicate signals across domains.

Actions:
- Add noindex for staging via host-based response headers or edge rule.
- Ensure 301 from staging to primary domain remains in place.
- Submit removal in Search Console for staging URLs.

Exit criteria:
- GSC impressions for staging drop to near zero.

### Phase 1 - Existing Page Optimization (Week 1-2)
Objectives:
- Increase CTR on highest impression pages.
- Restore main query authority to homepage.

Actions:
- Homepage (/):
  - Add a "What is Arabic Calligraphy Generator" block (80-120 words) after the tool section, not in the first screen.
  - Add "Top styles" module with internal links to style pages.
  - Add FAQ module with schema for key intents (copy/paste, PNG, transparent background, harakat).
- /fonts:
  - Keep metadata focused on fonts, library, downloads.
  - Add a visible internal link to / with anchor "Arabic Calligraphy Generator".
- /ar, /id, /fr, /ur, /bn, /tr, /ms:
  - Localize metadata to local intent and avoid English main query in H1.
  - Add a short cross-language link to / (one line at footer or section end).
- Footer or global nav:
  - Add a consistent internal link to / using the primary anchor.

Exit criteria:
- Homepage CTR moves toward 8%+.
- Main query "arabic calligraphy generator" returns to page 1 (pos 6-8).

### Phase 2 - High-Impression, Low-CTR Landing Pages (Week 2-4)
Objective:
- Capture high-impression queries with poor CTR by matching intent.

Priority pages (English first):
- /arabic-text-generator
- /khat-converter
- /arabic-font-generator
- /calligraphy-generator (if needed for exact match)

Local intent pages (by performance):
- /id/generator-nama-arab
- /ar/khatt-arabi-online (exact slug to be finalized)

Each page must include:
- Clear intent match in title, H1, first 100 words.
- Minimal usage steps and example output.
- FAQ + schema for the exact query intent.
- Internal links to / and /fonts.

Exit criteria:
- CTR improvement on target queries by 2-3 percentage points.
- New pages indexed and receiving impressions.

### Phase 3 - Style Pages Matrix (Week 4-6)
Objective:
- Build topical authority via calligraphy style pages.

Priority styles:
- Kufi, Thuluth, Diwani, Naskh, Nastaliq (5 pages)

Page template:
- Definition and history (short).
- Use cases and visual examples.
- "Try this style" module with generator preset.
- Links to / (generator) and /fonts (font library).

Exit criteria:
- Style pages indexed and receiving impressions for style queries.

### Phase 4 - Localization Expansion (Week 6-8)
Objective:
- Scale winning templates to top markets (ID, AR, BN, UR).

Actions:
- Replicate high-performing landing pages in top locales.
- Ensure hreflang is consistent and canonical is correct.
- Do not reuse English keywords in localized H1.

Exit criteria:
- Localized landing pages indexed with stable impressions.

## 6) Page Ownership Map (Intent to URL)
- Arabic Calligraphy Generator (main): /
- Arabic Fonts / Free Download: /fonts and /resources/free-arabic-fonts
- Arabic Text Generator: /arabic-text-generator
- Khat Converter: /khat-converter
- Arabic Font Generator: /arabic-font-generator
- Local intent:
  - Indonesian: /id (and /id/generator-nama-arab)
  - Arabic: /ar (and /ar/... page for "khatt")
  - French: /fr
  - Urdu/Bengali/Malay/Turkish: /ur, /bn, /ms, /tr

## 7) KPI Targets and Measurement
Primary KPIs:
- Main query ranking: pos 11.87 -> 6-8 within 2-4 weeks.
- Homepage CTR: 6.97% -> 8%+.
- /fonts CTR: 5.52% -> 7%+.
- Staging impressions: near zero.

Secondary KPIs:
- New landing page queries: CTR 4-6%+.
- Total daily clicks: 600-700 -> 900+.

Monitoring cadence:
- Weekly: query-to-page mapping in GSC.
- Bi-weekly: CTR changes on / and /fonts.
- Monthly: landing page coverage and new impressions.

## 8) Dependencies and Risks
Dependencies:
- Localized copy updates for /ar, /id, /fr, /ur, /bn, /tr, /ms.
- Template for landing pages using existing generator components.

Risks and mitigations:
- Cannibalization persists -> tighten metadata and internal links.
- New pages not indexed -> add internal links and include in sitemap.
- Over-optimization -> keep content helpful and intent-focused.

## 9) Execution Checklist (Quick Start)
- [ ] Add noindex for staging and submit GSC removal.
- [ ] Update homepage copy and FAQ schema to emphasize generator intent.
- [ ] Add internal links to / from /fonts and localized pages.
- [ ] Create first two landing pages: /arabic-text-generator and /khat-converter.
- [ ] Build first two style pages: /kufi and /thuluth.
- [ ] Review GSC query-to-page mapping after 2 weeks.
