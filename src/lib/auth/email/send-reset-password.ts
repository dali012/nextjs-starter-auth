import EmailTemplate from '@/components/emails/email-template';
import { env as clientEnv } from '@/env/client';
import { env } from '@/env/server';

import { resend } from './resend';

export async function sendResetPasswordEmail({
  user,
  url,
}: {
  user: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
  };
  url: string;
}) {
  await resend.emails.send({
    from: env.FROM_EMAIL,
    to: user.email,
    subject: 'Reset your password',
    react: EmailTemplate({
      action: 'Reset password',
      heading: 'Reset your password',
      siteName: 'NextBase',
      baseUrl: clientEnv.NEXT_PUBLIC_BETTER_AUTH_URL,
      url,
      content: `Hi ${user.name ?? 'there'},
                We received a request to reset your password.
                Click the button below to choose a new one.`,
    }),
  });
}
