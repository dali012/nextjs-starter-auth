import type { NextConfig } from 'next';

import './src/env/client';
import './src/env/server';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  typedRoutes: true,
};

export default nextConfig;
