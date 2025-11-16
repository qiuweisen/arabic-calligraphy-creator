# Requirements Document

## Introduction

This specification defines the requirements for optimizing the homepage of the Arabic Calligraphy Generator to **simultaneously improve SEO performance and advertising revenue** while maintaining user experience. The optimization targets all 10 language versions with focus on English-speaking markets (US, UK, Canada) with dual objectives:

1. **SEO Optimization**: Improve search engine visibility, click-through rates (CTR), and keyword rankings through structured content
2. **Ad Revenue Optimization**: Enable In-article ad eligibility and achieve modest RPM improvement (20-50% increase) by improving content density and semantic matching
3. **Multi-Language Consistency**: Apply optimizations across all 10 locales using the translation system

The approach follows modern SEO best practices and Google AdSense optimization guidelines, focusing on user value over keyword stuffing, while preserving the successful "tool-first" user experience and multi-language architecture that currently drives traffic from non-English markets.

### Current Implementation Context

The System currently has:
- **Multi-language support**: 10 locales (en, ar, ur, bn, ms, id, de, hi, fr, tr) with Next.js internationalization
- **Existing hreflang tags**: Properly configured in `app/layout.tsx` and `app/[locale]/layout.tsx`
- **Structured data**: SoftwareApplication, WebApplication, Organization, and FAQPage schemas already implemented
- **Trust indicators**: Trust Bar showing "100,000+ Designers", "4.8/5 Rating", "100% Free"
- **Generator component**: Main tool at `#calligraphy-tool-section` anchor with internal ad placement
- **Manual ad placement**: AdSlotCard positioned between preview area and font preview within CalligraphyGenerator component
- **Current ad performance**: RPM ≈ $0.5-$1 (low due to insufficient content density around ad)
- **17 Arabic fonts**: Amiri, Scheherazade, Noto Naskh Arabic, Aref Ruqaa, Reem Kufi, Lateef, Mirza, Cairo, Jomhuria, Rakkas, Harmattan, Mada, Tajawal, El Messiri, Lemonada, Marhey, Markazi Text
- **Successful non-English markets**: Indonesia (22.78% CTR), France (11.07% CTR), UAE (8.03% CTR)
- **Underperforming English markets**: US (0.68% CTR), UK (6.48% CTR), Canada (8.17% CTR)

### Current Page Structure

```
Hero Section
↓
Trust Bar
↓
CalligraphyGenerator Section
  ├─ Control Area
  ├─ Preview Area
  │    └─ Manual Ad (AdSlotCard) ← Current RPM: $0.5-$1
  ├─ FontPreview
  └─ TemplateBrowser
↓
How to Use Section
↓
Features Section
↓
Use Cases Section
↓
Testimonials Section
↓
FAQ Section
↓
CTA Section
↓
Footer
```

This optimization will enhance the English version for both SEO and ad revenue without disrupting the existing successful multi-language architecture or moving the ad placement.

## Glossary

- **System**: The Arabic Calligraphy Generator web application
- **English Homepage**: The `/en` or default locale landing page of the System
- **Meta Tags**: HTML metadata elements including title, description, and Open Graph tags
- **CTR (Click-Through Rate)**: The percentage of users who click on a search result after seeing it
- **GSC (Google Search Console)**: Google's tool for monitoring search performance
- **Hreflang**: HTML attribute that specifies language and regional targeting
- **Schema Markup**: Structured data in JSON-LD format that helps search engines understand page content
- **Hero Section**: The primary above-the-fold content area on the homepage
- **LSI Keywords**: Latent Semantic Indexing keywords - semantically related terms
- **Canonical URL**: The preferred URL for a page when multiple versions exist

## Requirements

### Requirement 1: Meta Tags Optimization

**User Story:** As a potential user searching for Arabic calligraphy tools on Google, I want to see compelling and clear search results, so that I understand the tool's value and click through to the website.

#### Acceptance Criteria

1. WHEN the English Homepage is indexed by search engines, THE System SHALL update the title in `app/layout.tsx` to be more compelling while keeping "Arabic Calligraphy Generator" and staying within 60 characters
2. WHEN the English Homepage is indexed by search engines, THE System SHALL update the meta description in `app/layout.tsx` to highlight key differentiators (17 fonts, AI-powered, instant export) within 155 characters using natural language
3. WHEN the English Homepage is rendered, THE System SHALL maintain existing Open Graph tags in `app/layout.tsx` with updated title and description
4. WHEN the English Homepage is rendered, THE System SHALL maintain existing Twitter Card tags with summary_large_image card type
5. WHEN the English Homepage is rendered, THE System SHALL NOT add meta keywords tags (currently not present, keep it that way)
6. WHEN the English Homepage is rendered, THE System SHALL maintain the existing canonical URL configuration in `app/layout.tsx` alternates section
7. WHEN the English Homepage is rendered, THE System SHALL maintain existing hreflang tags for all 10 supported language versions (en, ar, ur, bn, ms, id, de, hi, fr, tr)

### Requirement 2: Hero Section Content Redesign

**User Story:** As a first-time visitor to the English Homepage, I want to immediately understand what the tool does and why it's valuable, so that I can decide if it meets my needs.

#### Acceptance Criteria

1. WHEN a user views the English Homepage Hero Section in `app/[locale]/page.tsx`, THE System SHALL maintain the existing H1 heading "Arabic Calligraphy Generator" without keyword stuffing
2. WHEN a user views the English Homepage Hero Section, THE System SHALL enhance the subtitle to naturally mention 17 authentic fonts and key differentiators using the translation system
3. WHEN a user views the English Homepage Hero Section, THE System SHALL add a new "Why Choose Us" section below the hero with three value proposition cards highlighting AI-Powered Design, 17 Premium Fonts, and Professional Export
4. WHEN a user views the English Homepage Hero Section, THE System SHALL maintain existing trust indicators in the Trust Bar (100,000+ Designers, 4.8/5 Rating, 100% Free) with authentic data
5. WHEN a user views the English Homepage Hero Section, THE System SHALL maintain the existing primary CTA button that scrolls to the generator tool
6. WHEN a user views the English Homepage Hero Section, THE System SHALL NOT repeat the same keyword more than twice in the visible text

### Requirement 3: Differentiation Section Implementation

**User Story:** As a designer comparing multiple Arabic calligraphy tools, I want to understand what makes this tool unique, so that I can choose the best option for my project.

#### Acceptance Criteria

1. WHEN a user scrolls past the Hero Section on the English Homepage, THE System SHALL display a "Why Designers Choose Our Tool" section with a clear heading
2. WHEN a user views the differentiation section, THE System SHALL display four feature cards explaining AI-Powered Suggestions, Authentic Calligraphy Fonts, Guaranteed Perfect Export, and Instant Preview
3. WHEN a user views each feature card, THE System SHALL display an icon, heading, and descriptive paragraph using natural language
4. WHEN a user views the differentiation section, THE System SHALL NOT use keyword density exceeding 1% for any single keyword

### Requirement 4: Use Cases Section Enhancement

**User Story:** As a potential user with a specific project need, I want to see relevant use cases, so that I can envision how the tool applies to my situation.

#### Acceptance Criteria

1. WHEN a user views the English Homepage, THE System SHALL display a "Perfect for Every Project" section with three use case cards
2. WHEN a user views the use cases section, THE System SHALL display cards for Business Logos, Wedding & Events, and Islamic Art
3. WHEN a user views each use case card, THE System SHALL display a gradient background, icon, heading, and descriptive text
4. WHEN a user views the use cases section, THE System SHALL naturally incorporate LSI keywords including "logo", "wedding", "Islamic art", "Quranic verses" without forced repetition

### Requirement 5: FAQ Section with Semantic Coverage

**User Story:** As a user with questions about the tool's capabilities, I want to find clear answers to common questions, so that I can make an informed decision without contacting support.

#### Acceptance Criteria

1. WHEN a user views the English Homepage, THE System SHALL display a "Frequently Asked Questions" section with at least six questions
2. WHEN a user views the FAQ section, THE System SHALL display questions covering tool differentiation, commercial use, Arabic knowledge requirements, export formats, font count, and usage limits
3. WHEN a user views each FAQ item, THE System SHALL display answers using natural language that addresses user intent
4. WHEN a user views the FAQ section, THE System SHALL naturally cover semantic variations including "calligraphy tool", "font generator", "commercial projects", "export options"

### Requirement 6: Structured Data Implementation

**User Story:** As a search engine crawler, I want to understand the page content through structured data, so that I can display rich results in search listings.

#### Acceptance Criteria

1. WHEN the English Homepage is rendered, THE System SHALL maintain existing SoftwareApplication, WebApplication, and Organization schemas in `app/[locale]/page.tsx`
2. WHEN the English Homepage is rendered, THE System SHALL maintain existing FAQPage schema with mainEntity array containing FAQ questions and answers
3. WHEN the English Homepage is rendered, THE System SHALL enhance existing schemas with additional properties if missing (e.g., priceValidUntil already added)
4. WHEN structured data is validated using Google's Rich Results Test, THE System SHALL pass validation without errors
5. WHEN aggregate rating is displayed in schemas, THE System SHALL use authentic rating data (currently removed, only add back with real data)

### Requirement 7: Multi-Language Architecture Preservation

**User Story:** As a user from a non-English speaking market, I want to continue accessing the site in my preferred language with the same quality experience, so that the English optimization doesn't negatively impact my usage.

#### Acceptance Criteria

1. WHEN any language version page is rendered, THE System SHALL maintain existing hreflang tags in `app/layout.tsx` and `app/[locale]/layout.tsx` pointing to all language alternatives (en, ar, ur, bn, ms, id, de, hi, fr, tr)
2. WHEN any language version page is rendered, THE System SHALL maintain the existing canonical URL configuration where English points to base URL and other locales point to `/{locale}`
3. WHEN any language version page is indexed, THE System SHALL NOT include noindex directives
4. WHEN a user navigates internal links, THE System SHALL maintain language consistency within the same locale using Next.js internationalization
5. WHEN non-English pages are monitored in GSC, THE System SHALL maintain or improve existing CTR and ranking metrics for Indonesian (22.78%), French (11.07%), and UAE (8.03%) markets

### Requirement 8: Internal Linking Strategy

**User Story:** As a user exploring the website, I want to easily discover related content and tools, so that I can find everything I need without leaving the site.

#### Acceptance Criteria

1. WHEN a user views the English Homepage footer, THE System SHALL display a "Generator Tools" section with links to key tool variations
2. WHEN a user views generator tool links, THE System SHALL display anchor text including "Arabic Calligraphy Generator", "Arabic Font Generator", "Arabic Logo Generator", "Arabic Name Generator", "Kufic Script Generator"
3. WHEN a user clicks generator tool links, THE System SHALL navigate to the main generator section using anchor links
4. WHEN a user views internal links in any language version, THE System SHALL maintain links within the same locale
5. WHEN a user views the footer, THE System SHALL display a language switcher with links to all supported locales

### Requirement 9: Social Proof Display

**User Story:** As a potential user evaluating the tool's credibility, I want to see evidence of its popularity and quality, so that I can trust it's a reliable solution.

#### Acceptance Criteria

1. WHEN a user views the English Homepage, THE System SHALL maintain the existing Trust Bar section with three statistics (currently shows "100,000+ Designers", "4.8/5 Rating", "100% Free")
2. WHEN a user views the social proof section, THE System SHALL display authentic statistics based on real data or reasonable estimates
3. WHEN statistics are displayed, THE System SHALL use authentic data from the System's analytics or database
4. WHEN statistics are displayed, THE System SHALL NOT simulate fake real-time updates
5. WHEN displaying user count or ratings, THE System SHALL ensure numbers are realistic and verifiable (current "100,000+ Designers" and "4.8/5 Rating" should be validated or adjusted)

### Requirement 10: Generator Tools Anchor Links

**User Story:** As a user searching for specific calligraphy variations (fonts, logos, names, Kufic), I want to quickly access the main generator tool, so that I can start creating without navigating through multiple pages.

#### Acceptance Criteria

1. WHEN a user views the English Homepage below the Hero Section, THE System SHALL add a new "Generator Tools" section with six tool variation links pointing to "#calligraphy-tool-section"
2. WHEN a user views each tool variation link, THE System SHALL display a label, description, and href pointing to "#calligraphy-tool-section" (the existing generator anchor ID)
3. WHEN a user views the tool variations, THE System SHALL include entries for "Arabic Calligraphy Generator", "Arabic Font Generator", "Arabic Logo Generator", "Arabic Name Generator", "Kufic Script Generator", "Kufic Calligraphy Generator"
4. WHEN a user clicks any tool variation link, THE System SHALL scroll to the existing generator component using the "#calligraphy-tool-section" anchor
5. WHEN search engines index the page, THE System SHALL expose these anchor texts for semantic keyword coverage without creating duplicate pages

### Requirement 11: Content Density Section for SEO and Ad Context

**User Story:** As a website owner, I want to add structured content to enable In-article ads and improve SEO semantic understanding across all language versions, while maintaining the tool-first user experience and setting realistic expectations for ad revenue improvement.

#### Acceptance Criteria

1. WHEN any language version homepage is rendered, THE System SHALL display a "Calligraphy Styles Content Section" positioned after the CalligraphyGenerator component
2. WHEN a user views the content section, THE System SHALL display 200-400 words of structured content with h2, h3, and p tags using the translation system
3. WHEN the content section is rendered, THE System SHALL naturally incorporate relevant keywords while providing genuine educational value to users
4. WHEN the content section is displayed, THE System SHALL use existing styling (max-w-4xl, prose classes, bg-gradient-to-b from-white to-amber-50) and support RTL languages
5. WHEN Google AdSense crawls the page, THE System SHALL provide sufficient semantic context to enable In-article ad placement with modest RPM improvement expectations (20-50% increase from $0.5-$1 baseline)
6. WHEN the content section is added, THE System SHALL NOT move or modify the existing AdSlotCard placement within CalligraphyGenerator
7. WHEN users interact with the page, THE System SHALL maintain the "tool-first" experience with content being optional to view (positioned after generator)
8. WHEN content is added to all language versions, THE System SHALL use the translation system to ensure consistency across locales with proper RTL support for Arabic/Urdu

### Requirement 12: Performance and Accessibility Compliance

**User Story:** As a user on any device or connection speed, I want the optimized homepage to load quickly and be accessible, so that I have a smooth experience regardless of my circumstances.

#### Acceptance Criteria

1. WHEN the English Homepage is loaded, THE System SHALL achieve a Lighthouse Performance score of at least 90
2. WHEN the English Homepage is loaded, THE System SHALL achieve a Lighthouse Accessibility score of at least 95
3. WHEN the English Homepage is loaded, THE System SHALL achieve a Lighthouse SEO score of 100
4. WHEN images are displayed, THE System SHALL include descriptive alt text
5. WHEN interactive elements are rendered, THE System SHALL be keyboard navigable and screen reader compatible

### Requirement 13: Ad Revenue and User Experience Monitoring

**User Story:** As a website owner, I want to track the impact of content optimization on both ad performance and user experience across all languages, with realistic expectations for improvement.

#### Acceptance Criteria

1. WHEN the optimized content is deployed, THE System SHALL maintain the existing AdSlotCard placement within CalligraphyGenerator without modification
2. WHEN AdSense reports are reviewed, THE System SHALL show modest ad performance improvement with realistic expectations (20-50% RPM increase, targeting $0.6-$1.5 from $0.5-$1 baseline)
3. WHEN GA4 events are tracked, THE System SHALL record content section visibility, scroll depth, and tool usage rates to understand user behavior across all locales
4. WHEN user experience metrics are monitored, THE System SHALL prioritize tool usage rate and session quality over ad revenue metrics
5. WHEN In-article ad eligibility is achieved, THE System SHALL track whether Google serves In-article ads and their performance
6. WHEN content is viewed across different languages, THE System SHALL monitor engagement patterns to validate the multi-language approach
