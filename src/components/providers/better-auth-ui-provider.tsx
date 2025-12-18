'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

import { AuthUIProvider } from '@daveyplate/better-auth-ui';

import { authClient } from '@/lib/auth-client';

const AuthUiProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <AuthUIProvider
      authClient={authClient}
      navigate={router.push}
      replace={router.replace}
      onSessionChange={() => {
        router.refresh();
      }}
      magicLink
      Link={Link}
      social={{
        providers: ['google', 'github'],
      }}
      redirectTo="/dashboard"
    >
      {children}
    </AuthUIProvider>
  );
};

export default AuthUiProvider;
