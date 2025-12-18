import { nextCookies } from 'better-auth/next-js';
import { admin, magicLink } from 'better-auth/plugins';

import { sendMagicLink } from './email/send-magic-link';

export const plugins = [
  magicLink({
    sendMagicLink,
  }),
  admin(),
  nextCookies(),
];
