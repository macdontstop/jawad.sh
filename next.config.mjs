/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'i.scdn.co' }, { hostname: 'opengraph.githubassets.com' }],
    formats: ['image/webp'],
  },

  reactStrictMode: true,

  productionBrowserSourceMaps: false,

  experimental: {
    optimizePackageImports: ['@tabler/icons-react', '@vercel/analytics/react', '@vercel/speed-insights/next'],
    staleTimes: {
      dynamic: 30,
      static: 300,
    },
  },

  compress: true,
};

export default nextConfig;
