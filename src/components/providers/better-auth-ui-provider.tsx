'use client';

import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

import { AuthUIProvider } from '@daveyplate/better-auth-ui';

import { authClient } from '@/lib/auth-client';

const AuthUiProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <AuthUIProvider
      authClient={authClient}
      navigate={href => {
        router.push(href as never);
      }}
      replace={href => {
        router.replace(href as never);
      }}
      onSessionChange={() => {
        router.refresh();
      }}
      magicLink
      Link={({ href, className, children }) => (
        <NextLink href={href as never} className={className}>
          {children}
        </NextLink>
      )}
      social={{
        providers: ['google', 'github'],
      }}
      organization={false}
      teams={false}
      redirectTo="/dashboard"
    >
      {children}
    </AuthUIProvider>
  );
};

export default AuthUiProvider;
