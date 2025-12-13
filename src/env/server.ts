/* eslint-disable n/no-process-env */
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
    DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
    BETTER_AUTH_SECRET: z.string().min(1, 'BETTER_AUTH_SECRET is required'),
    GITHUB_CLIENT_ID: z.string().min(1, 'GITHUB_CLIENT_ID is required'),
    GITHUB_CLIENT_SECRET: z.string().min(1, 'GITHUB_CLIENT_SECRET is required'),
    GOOGLE_CLIENT_ID: z.string().min(1, 'GOOGLE_CLIENT_ID is required'),
    GOOGLE_CLIENT_SECRET: z.string().min(1, 'GOOGLE_CLIENT_SECRET is required'),
  },
  // For Next.js >= 13.4.4, you can just reference process.env:
  experimental__runtimeEnv: process.env,
});
