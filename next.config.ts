import type { NextConfig } from 'next';
import { NextConfigComplete } from 'next/dist/server/config-shared';

const nextConfig: NextConfig | NextConfigComplete = {
  async redirects() {
    return [
      {
        source: '/get-started',
        destination: 'https://app.aiva.business',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
