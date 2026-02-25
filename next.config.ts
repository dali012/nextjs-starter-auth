import type { NextConfig } from 'next';

import './src/env/client';
import './src/env/server';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  typedRoutes: true,
};

export default nextConfig;
