import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "events.lexwitness.com",
        pathname: "/uploads/speakers/**",
      },
    ],
  },
};

export default nextConfig;
