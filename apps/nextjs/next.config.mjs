/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
  turbopack: {
    // Workspace root is two levels up (apps/nextjs → apps → workspace root).
    // Without this, Turbopack mis-detects the project dir as the app/ subdirectory
    // and can't resolve hoisted node_modules (@radix-ui/*, next, etc.).
    root: '../../',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/:path*',
      },
    ];
  },
};

export default nextConfig;
