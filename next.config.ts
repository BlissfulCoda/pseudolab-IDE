import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    // Disable webpack cache in dev to prevent manifest ENOENT on file changes
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
