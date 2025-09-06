import { MetadataRoute } from 'next'

export function GET(): Response {
  const robots = `User-agent: *
Allow: /

Sitemap: https://arabic-calligraphy-generator.com/sitemap.xml`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}