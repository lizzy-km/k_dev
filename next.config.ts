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
        source: '/movie-app/:match*',
        destination: 'https://themoviedb-org.vercel.app/:match*',
      },
      {
        source: '/social-app/:match*',
        destination: 'https://facebook-k.vercel.app/:match*',
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: '/movie-app/:match*',
        destination: 'https://themoviedb-org.vercel.app/:match*',
        permanent: true,
      },
      {
        source: '/social-app/:match*',
        destination: 'https://facebook-k.vercel.app/:match*',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
