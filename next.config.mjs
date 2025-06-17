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
      // === SEO 权重聚合重定向 - 字体页面到主页锚点 ===
      // 字体列表页重定向到主页字体集合区域
      {
        source: '/fonts',
        destination: '/#font-collection',
        permanent: true,
        statusCode: 301,
      },
      
      // 所有字体详情页重定向到主页对应锚点
      {
        source: '/fonts/amiri',
        destination: '/#amiri',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/cairo',
        destination: '/#cairo',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/harmattan',
        destination: '/#harmattan',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/mada',
        destination: '/#mada',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/tajawal',
        destination: '/#tajawal',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/lemonada',
        destination: '/#lemonada',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/reem-kufi',
        destination: '/#reem-kufi',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/aref-ruqaa',
        destination: '/#aref-ruqaa',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/lateef',
        destination: '/#lateef',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/mirza',
        destination: '/#mirza',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/jomhuria',
        destination: '/#jomhuria',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/rakkas',
        destination: '/#rakkas',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/marhey',
        destination: '/#marhey',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/noto-naskh-arabic',
        destination: '/#noto-naskh-arabic',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/el-messiri',
        destination: '/#el-messiri',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/markazi-text',
        destination: '/#markazi-text',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/fonts/scheherazade',
        destination: '/#scheherazade',
        permanent: true,
        statusCode: 301,
      },
      
      // === 现有重定向规则 ===
      // Blog URL correction - 301 redirect to preserve SEO
      {
        source: '/blog/beginners-guide-to-arabic-calligraphy',
        destination: '/blog/beginners-guide-to-calligraphy',
        permanent: true, // 301 redirect
        statusCode: 301, // Explicitly set the status code
      },
      
      // Language redirects (keeping existing ones)
      { source: '/bn', destination: '/', permanent: true },
      { source: '/hi', destination: '/', permanent: true },
      { source: '/ar', destination: '/', permanent: true },
      { source: '/id', destination: '/', permanent: true },
      { source: '/bn/:path*', destination: '/:path*', permanent: true },
      { source: '/hi/:path*', destination: '/:path*', permanent: true },
      { source: '/ar/:path*', destination: '/:path*', permanent: true },
      { source: '/id/:path*', destination: '/:path*', permanent: true },
      
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

export default nextConfig; 