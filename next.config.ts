import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/new-portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
