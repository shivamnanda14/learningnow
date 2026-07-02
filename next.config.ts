import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mcbjyrxgoxctxflrmcfh.supabase.co",
      },
    ],
  },
};

export default nextConfig;