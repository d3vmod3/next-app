import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 this replaces next export

  images: {
    unoptimized: true, // needed if using next/image with static export
    domains: ["source.unsplash.com", "logo.clearbit.com", "robohash.org"],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
