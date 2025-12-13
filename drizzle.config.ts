import { defineConfig } from 'drizzle-kit';

import { env } from '@/env/server';

export default defineConfig({
  schema: './src/db/schemas/*.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
