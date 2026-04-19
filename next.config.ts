import type { NextConfig } from "next";
import _withBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = _withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  poweredByHeader: false,
};

export default withBundleAnalyzer(nextConfig);
