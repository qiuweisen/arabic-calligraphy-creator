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

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arabic-calligraphy-generator.com'
  
  // Core pages - 移除字体相关页面，因为它们现在重定向到主页
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    // 注意：移除了 /fonts 页面，因为现在重定向到主页 #font-collection
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
  ]

  // Blog post pages
  const blogPages = BLOG_POSTS.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // 注意：移除了所有字体详情页面，因为它们现在都重定向到主页的锚点
  // 这样避免了重复内容和SEO冲突，所有权重都聚合到主页
  
  return [...staticPages, ...blogPages]
} 