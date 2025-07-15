import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production' || process.env.CI === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/GQO.github.io' : '',
  assetPrefix: isProd ? '/GQO.github.io/' : '', // Note: trailing slash for assetPrefix
  images: {
    unoptimized: true
  }
}

export default nextConfig;