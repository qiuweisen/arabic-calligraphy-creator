import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/', '/404', '/500', '/*.json$'],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/llms.txt', '/llms-full.txt'],
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/llms.txt', '/llms-full.txt'],
        disallow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/', '/404', '/500', '/*.json$'],
      },
    ],
    sitemap: 'https://arabic-calligraphy-generator.com/sitemap.xml',
    host: 'https://arabic-calligraphy-generator.com',
  }
} 