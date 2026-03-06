import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { dev }) => {
    // Disable webpack cache in dev to prevent manifest ENOENT on file changes
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
