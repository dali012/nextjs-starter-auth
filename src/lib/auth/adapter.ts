import { drizzleAdapter } from 'better-auth/adapters/drizzle';

import { db } from '@/db/drizzle';
import { authSchema } from '@/db/schemas/auth-schema';

export const database = drizzleAdapter(db, {
  provider: 'pg',
  schema: {
    ...authSchema,
  },
});
