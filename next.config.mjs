/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'i.scdn.co', protocol: 'https' },
      { hostname: 'opengraph.githubassets.com', protocol: 'https' },
      { hostname: 'image.tmdb.org', protocol: 'https' },
    ],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  reactStrictMode: true,

  productionBrowserSourceMaps: false,

  experimental: {
    optimizePackageImports: [
      '@tabler/icons-react',
      '@vercel/analytics/react',
      '@vercel/speed-insights/next',
      'framer-motion',
      'zustand',
    ],
    staleTimes: {
      dynamic: 30,
      static: 300,
    },
  },

  compress: true,

  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default nextConfig;
