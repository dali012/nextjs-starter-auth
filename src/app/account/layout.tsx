import { headers } from 'next/headers';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import type { ReactNode } from 'react';

import ThemeToggle from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';

export default async function AccountLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ path?: string }>;
}>) {
  const { path } = await params;

  if (path && !['settings', 'security'].includes(path)) {
    notFound();
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/auth/sign-in?redirectTo=/account/settings');
  }

  return (
    <main className="from-background via-muted/35 to-background relative isolate min-h-screen overflow-hidden bg-linear-to-b">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="bg-primary/12 absolute top-0 left-[-10%] h-80 w-80 rounded-full blur-3xl" />
        <div className="bg-chart-2/15 absolute right-[-10%] bottom-0 h-96 w-96 rounded-full blur-3xl" />
      </div>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pt-10 pb-16 md:px-10 md:pt-14">
        <header className="animate-in fade-in-0 slide-in-from-top-2 flex flex-wrap items-start justify-between gap-3 duration-700">
          <div className="space-y-2">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Account Area
            </Badge>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Account & Security
            </h1>
            <p className="text-muted-foreground">
              Manage your profile and secure your access from one place.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/auth/sign-out">Sign out</Link>
            </Button>
            <ThemeToggle />
          </div>
        </header>

        <section className="animate-in fade-in-0 slide-in-from-bottom-3 bg-card/80 rounded-2xl border p-4 duration-700 md:p-6">
          {children}
        </section>
      </section>
    </main>
  );
}
