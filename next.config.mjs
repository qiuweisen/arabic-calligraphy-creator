// 暂时移除bundle analyzer以避免构建问题
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-icons',
      '@radix-ui/themes',
      'lucide-react',
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  modularizeImports: {
    '@radix-ui/react-icons': {
      transform: '@radix-ui/react-icons/dist/esm/icons/{{member}}',
    },
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev',
        port: '',
        pathname: '/**', // Allow any path under this hostname
      },
      // You can add other remote patterns here if needed in the future
    ],
  },
  async redirects() {
    return [

      
      // === 现有重定向规则 ===
      // Blog URL correction - 301 redirect to preserve SEO
      {
        source: '/blog/beginners-guide-to-arabic-calligraphy',
        destination: '/blog/beginners-guide-to-calligraphy',
        permanent: true, // 301 redirect
        statusCode: 301, // Explicitly set the status code
      },
      
      // Legacy language redirects (keeping existing ones for old URLs)
      { source: '/bn', destination: '/', permanent: true },
      { source: '/hi', destination: '/', permanent: true },
      { source: '/id', destination: '/', permanent: true },
      { source: '/bn/:path*', destination: '/:path*', permanent: true },
      { source: '/hi/:path*', destination: '/:path*', permanent: true },
      { source: '/id/:path*', destination: '/:path*', permanent: true },
      // Note: /ar routes are now handled by next-intl, so removed from redirects
      
      // HTTP to HTTPS redirect
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://arabic-calligraphy-generator.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);