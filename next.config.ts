import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.base44.com" },
      { protocol: "https", hostname: "companieslogo.com" },
      { protocol: "https", hostname: "www.fahrenheitmarketing.com" },
    ],
  },
};

export default nextConfig;
