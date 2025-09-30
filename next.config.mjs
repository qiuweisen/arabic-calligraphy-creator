// Bundle analyzer configuration
import createNextIntlPlugin from 'next-intl/plugin';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-icons',
      '@radix-ui/themes',
      'lucide-react',
    ],
    // Note: PPR requires Next.js canary, so we'll skip it for now
    // ppr: true,
  },
  // Moved from experimental in Next.js 15
  serverExternalPackages: ['sharp', 'html2canvas'],
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  
  // Enhanced modular imports
  modularizeImports: {
    '@radix-ui/react-icons': {
      transform: '@radix-ui/react-icons/dist/esm/icons/{{member}}',
    },
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },
  
  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
    // Enable optimization for better performance
    unoptimized: false,
  },
  
  // Static generation optimization
  generateBuildId: async () => {
    return `build-${Date.now()}`
  },
  
  async redirects() {
    return [
      // === 域名统一重定向 - 修复GSC重复内容问题 ===
      // 处理根路径：prod域名根路径重定向到主域名
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'prod.arabic-calligraphy-generator.com',
          },
        ],
        destination: 'https://arabic-calligraphy-generator.com/',
        permanent: true,
        statusCode: 301,
      },
      // 处理子路径：prod域名子路径重定向到主域名（一个或多个路径段）
      {
        source: '/:path+',
        has: [
          {
            type: 'host',
            value: 'prod.arabic-calligraphy-generator.com',
          },
        ],
        destination: 'https://arabic-calligraphy-generator.com/:path+',
        permanent: true,
        statusCode: 301,
      },
      // 处理根路径：staging域名根路径重定向到主域名
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'staging.arabic-calligraphy-generator.com',
          },
        ],
        destination: 'https://arabic-calligraphy-generator.com/',
        permanent: true,
        statusCode: 301,
      },
      // 处理子路径：staging域名子路径重定向到主域名（一个或多个路径段）
      {
        source: '/:path+',
        has: [
          {
            type: 'host',
            value: 'staging.arabic-calligraphy-generator.com',
          },
        ],
        destination: 'https://arabic-calligraphy-generator.com/:path+',
        permanent: true,
        statusCode: 301,
      },
      
      // === 现有重定向规则 ===
      // Blog URL correction - 301 redirect to preserve SEO
      {
        source: '/blog/beginners-guide-to-arabic-calligraphy',
        destination: '/blog/beginners-guide-to-calligraphy',
        permanent: true,
        statusCode: 301,
      },
    ];
  },
  
  // Headers for performance
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(withNextIntl(nextConfig));