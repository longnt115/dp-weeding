import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'swiperjs.com',
        port: '',
        pathname: '/demos/images/**',
      },
      {
        protocol: 'https',
        hostname: 'promes.vn',
        port: '',
        pathname: '/wp-content/uploads/**',
      }
    ],
  },
};

export default nextConfig;
