import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Use basePath only for GitHub Pages (production), not local dev
  basePath: process.env.NODE_ENV === 'production' ? '/GQO.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/GQO.github.io' : '',
  images: {
    unoptimized: true
  }
}

export default nextConfig;