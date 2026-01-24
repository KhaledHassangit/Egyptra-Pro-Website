import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'z-cdn-media.chatglm.cn',
      },
    ],
    domains: [
      'egyptra.pro',
    ],

  },
};

export default nextConfig;