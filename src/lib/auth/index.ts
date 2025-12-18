/* eslint-disable check-file/no-index */
import { betterAuth } from 'better-auth';

import { env as clientEnv } from '@/env/client';
import { env } from '@/env/server';

import { database } from './adapter';
import { emailAndPassword } from './features/email-password';
import { emailVerification } from './features/email-verification';
import { socialProviders } from './features/social-providers';
import { plugins } from './plugins';

export const auth = betterAuth({
  appName: 'NextBase',
  baseURL: clientEnv.NEXT_PUBLIC_BETTER_AUTH_URL,
  database,
  emailAndPassword,
  emailVerification,
  socialProviders,
  secret: env.BETTER_AUTH_SECRET,
  account: {
    accountLinking: { enabled: true },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60,
    },
  },
  plugins,
});
