import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/search",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
