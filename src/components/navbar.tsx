import { headers } from 'next/headers';
import Link from 'next/link';

import { UserButton } from '@daveyplate/better-auth-ui';

import ThemeToggle from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';

export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold">
          NextBase
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {session ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <UserButton
                size="icon"
                className="cursor-pointer"
                classNames={{
                  content: {
                    menuItem: 'cursor-pointer',
                  },
                }}
              />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/auth/sign-in">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
