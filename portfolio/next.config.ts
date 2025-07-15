import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: '/GQO.github.io',  // ← Add this line
    assetPrefix: '/GQO.github.io',  // ← Add this line
    images: {
    unoptimized: true
  }
}

export default nextConfig;
