import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler:true,
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
      {
        protocol: 'https',
        hostname: 'egyptra.pro',
      },
    ],
  },
};

export default nextConfig;