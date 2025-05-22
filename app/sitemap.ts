import { MetadataRoute } from 'next'

// Define all fonts
const FONTS = [
  // Traditional
  { slug: "amiri" },
  { slug: "scheherazade" },
  { slug: "noto-naskh-arabic" },
  { slug: "el-messiri" },
  { slug: "markazi-text" },
  // Kufi
  { slug: "reem-kufi" },
  // Diwani
  { slug: "aref-ruqaa" },
  // Nastaliq
  { slug: "lateef" },
  { slug: "mirza" },
  // Modern
  { slug: "cairo" },
  { slug: "harmattan" },
  { slug: "mada" },
  { slug: "tajawal" },
  { slug: "lemonada" },
  // Display
  { slug: "jomhuria" },
  { slug: "rakkas" },
  { slug: "marhey" },
]

// Blog posts data
const BLOG_POSTS = [
  'the-rich-history-of-arabic-calligraphy',
  'understanding-the-six-major-arabic-calligraphy-styles',
  'beginners-guide-to-arabic-calligraphy',
  'famous-arabic-calligraphers-through-history',
  'modern-arabic-typography',
  'quran-and-calligraphy'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arabiccalligraphygenerator.site'
  
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
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Font detail pages
  const fontPages = FONTS.map(font => ({
    url: `${baseUrl}/fonts/${font.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog post pages
  const blogPages = BLOG_POSTS.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...fontPages, ...blogPages]
} 