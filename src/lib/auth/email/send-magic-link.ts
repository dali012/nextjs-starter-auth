import EmailTemplate from '@/components/emails/email-template';
import { env as clientEnv } from '@/env/client';
import { env } from '@/env/server';

import { resend } from './resend';

type MagicLinkData = {
  email: string;
  url: string;
  token: string;
};

export async function sendMagicLink({ email, url, token }: MagicLinkData) {
  const magicLinkUrl = `${url}?token=${token}`;

  await resend.emails.send({
    from: env.FROM_EMAIL,
    to: email,
    subject: 'Sign in to your account',
    react: EmailTemplate({
      action: 'Sign in',
      heading: 'Sign in to your account',
      siteName: 'NextBase',
      baseUrl: clientEnv.NEXT_PUBLIC_BETTER_AUTH_URL,
      url: magicLinkUrl,
      content:
        'Click the button below to securely sign in. This link will expire shortly.',
    }),
  });
}
