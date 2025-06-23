import { MetadataRoute } from 'next'

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
  
  // Core pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/fonts`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tutorials`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/use-cases`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },

    {
      url: `${baseUrl}/about/arabic-calligraphy-history`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
  ]

  // Blog post pages
  const blogPages = BLOG_POSTS.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Font detail pages
  const fontPages = FONT_PAGES.map(slug => ({
    url: `${baseUrl}/fonts/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Guides pages
  const guidesPages = GUIDES_PAGES.map(slug => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Tutorials pages
  const tutorialsPages = TUTORIALS_PAGES.map(slug => ({
    url: `${baseUrl}/tutorials/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Resources pages
  const resourcesPages = RESOURCES_PAGES.map(slug => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Use cases pages
  const useCasesPages = USE_CASES_PAGES.map(slug => ({
    url: `${baseUrl}/use-cases/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))



  return [
    ...staticPages,
    ...blogPages,
    ...fontPages,
    ...guidesPages,
    ...tutorialsPages,
    ...resourcesPages,
    ...useCasesPages
  ]
} 