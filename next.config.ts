import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/aiva-landing-page',
  assetPrefix: '/aiva-landing-page',
};

export default nextConfig;
