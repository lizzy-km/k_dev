import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: '/projects/movie/:match*',
        destination: 'https://themoviedb-org.vercel.app/:match*',
      },
      {
        source: '/projects/social/',
        destination: 'https://social-q.pages.dev/*',
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: '/projects/movie/:match*',
        destination: 'https://themoviedb-org.vercel.app/:match*',
        permanent: true,
      },
      {
        source: '/old-social-page',
        destination: '/projects/social',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
