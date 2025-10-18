import { MetadataRoute } from 'next'
import { statSync } from 'node:fs'
import { join } from 'node:path'

const PROJECT_ROOT = process.cwd()
const DEFAULT_LAST_MODIFIED = new Date('2025-01-01T00:00:00Z')
const lastModifiedCache = new Map<string, Date>()

function getLastModified(relativePath: string, fallback: Date = DEFAULT_LAST_MODIFIED): Date {
  if (lastModifiedCache.has(relativePath)) {
    return lastModifiedCache.get(relativePath)!
  }

  try {
    const stats = statSync(join(PROJECT_ROOT, relativePath))
    const date = stats.mtime
    lastModifiedCache.set(relativePath, date)
    return date
  } catch {
    const date = new Date(fallback.getTime())
    lastModifiedCache.set(relativePath, date)
    return date
  }
}

// Blog posts data - using actual directory names (shorter URLs are better)
const BLOG_POSTS = [
  'the-rich-history-of-arabic-calligraphy',
  'six-major-calligraphy-styles',
  'beginners-guide-to-calligraphy',
  'famous-arabic-calligraphers',
  'modern-arabic-typography',
  'quran-and-calligraphy'
]

// Font pages data
const FONT_PAGES = [
  'amiri',
  'scheherazade',
  'noto-naskh-arabic',
  'aref-ruqaa',
  'reem-kufi',
  'cairo',
  'harmattan',
  'mada',
  'tajawal',
  'lemonada',
  'el-messiri',
  'markazi-text',
  'lateef',
  'mirza',
  'jomhuria',
  'rakkas',
  'marhey'
]

// Guides pages data
const GUIDES_PAGES = [
  'arabic-calligraphy-beginner-guide',
  'arabic-font-comparison',
  'best-arabic-fonts-2025',
  'arabic-typography-trends-2025'
]

// Tutorials pages data
const TUTORIALS_PAGES = [
  'how-to-create-arabic-calligraphy-online',
  'arabic-font-selection-guide',
  'arabic-calligraphy-design-tips',
  'download-and-use-arabic-fonts'
]

// Resources pages data
const RESOURCES_PAGES = [
  'free-arabic-fonts'
]

// Use cases pages data
const USE_CASES_PAGES = [
  'wedding-arabic-calligraphy',
  'business-logo-arabic-fonts',
  'social-media-arabic-typography',
  'religious-arabic-calligraphy'
]



export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arabic-calligraphy-generator.com'

  // Core pages - only include pages that have been fully internationalized
  const staticPages = [
    // Homepage - fully internationalized
    {
      url: baseUrl,
      file: 'app/[locale]/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ar`,
      file: 'app/[locale]/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ur`,
      file: 'app/[locale]/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/bn`,
      file: 'app/[locale]/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ms`,
      file: 'app/[locale]/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/id`,
      file: 'app/[locale]/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    // Other pages - keep original English-only URLs until they are internationalized
    {
      url: `${baseUrl}/fonts`,
      file: 'app/fonts/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      file: 'app/guides/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tutorials`,
      file: 'app/tutorials/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      file: 'app/resources/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },

    {
      url: `${baseUrl}/use-cases`,
      file: 'app/use-cases/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      file: 'app/blog/page.tsx',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      file: 'app/faq/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      file: 'app/contact/page.tsx',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      file: 'app/privacy-policy/page.tsx',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      file: 'app/terms-of-service/page.tsx',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about-us`,
      file: 'app/about-us/page.tsx',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/features`,
      file: 'app/features/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },

    {
      url: `${baseUrl}/about/arabic-calligraphy-history`,
      file: 'app/about/arabic-calligraphy-history/page.tsx',
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
  ]

  const staticPageEntries = staticPages.map(({ file, ...rest }) => ({
    ...rest,
    lastModified: getLastModified(file),
  }))

  // Blog post pages
  const blogPages = BLOG_POSTS.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: getLastModified(`app/blog/${slug}/page.tsx`),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Font detail pages
  const fontPages = FONT_PAGES.map(slug => ({
    url: `${baseUrl}/fonts/${slug}`,
    lastModified: getLastModified(`app/fonts/${slug}/page.tsx`),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Guides pages
  const guidesPages = GUIDES_PAGES.map(slug => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: getLastModified(`app/guides/${slug}/page.tsx`),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Tutorials pages
  const tutorialsPages = TUTORIALS_PAGES.map(slug => ({
    url: `${baseUrl}/tutorials/${slug}`,
    lastModified: getLastModified(`app/tutorials/${slug}/page.tsx`),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Resources pages
  const resourcesPages = RESOURCES_PAGES.map(slug => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: getLastModified(`app/resources/${slug}/page.tsx`),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Use cases pages
  const useCasesPages = USE_CASES_PAGES.map(slug => ({
    url: `${baseUrl}/use-cases/${slug}`,
    lastModified: getLastModified(`app/use-cases/${slug}/page.tsx`),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))



  return [
    ...staticPageEntries,
    ...blogPages,
    ...fontPages,
    ...guidesPages,
    ...tutorialsPages,
    ...resourcesPages,
    ...useCasesPages
  ]
} 
