import type { NextConfig } from "next";
import _withBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = _withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default withBundleAnalyzer(nextConfig);
