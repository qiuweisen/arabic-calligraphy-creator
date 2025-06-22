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
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
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
      url: `${baseUrl}/tutorials`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
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

  return [...staticPages, ...blogPages, ...fontPages]
} 