/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
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
  // async redirects() { // Re-adding redirects from previous configuration
  //   return [
  //     // Language redirects
  //     { source: '/bn', destination: '/', permanent: true },
  //     { source: '/hi', destination: '/', permanent: true },
  //     { source: '/ar', destination: '/', permanent: true },
  //     { source: '/id', destination: '/', permanent: true },
  //     { source: '/bn/:path*', destination: '/:path*', permanent: true },
  //     { source: '/hi/:path*', destination: '/:path*', permanent: true },
  //     { source: '/ar/:path*', destination: '/:path*', permanent: true },
  //     { source: '/id/:path*', destination: '/:path*', permanent: true },
      
  //     // HTTP to HTTPS redirect
  //     {
  //       source: '/:path*',
  //       has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
  //       destination: 'https://arabiccalligraphygenerator.site/:path*',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig; 