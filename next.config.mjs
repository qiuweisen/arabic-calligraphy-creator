/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:lang(bn|hi|ar|id)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'arabiccalligraphygenerator.site',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://arabiccalligraphygenerator.site/:1',
        permanent: true,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
