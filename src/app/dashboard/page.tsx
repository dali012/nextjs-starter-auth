import { headers } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import ThemeToggle from '@/components/theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { auth } from '@/lib/auth';

const dashboardLinks = [
  {
    title: 'Account Settings',
    href: '/account/settings',
    description: 'Manage profile, preferences, and linked providers.',
  },
  {
    title: 'Security',
    href: '/account/security',
    description: 'Inspect password, sessions, and account safety controls.',
  },
];

const getInitials = (name: string) =>
  name
    .split(' ')
    .map(part => part.trim().charAt(0))
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/auth/sign-in');
  }

  const userName = session.user.name ?? 'Builder';
  const userEmail = session.user.email ?? 'No email';
  const userImage = session.user.image ?? undefined;
  const userInitials = getInitials(userName);
  const sessionExpiration = session.session?.expiresAt
    ? new Date(session.session.expiresAt).toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      })
    : 'Unavailable';

  return (
    <main className="from-background via-muted/35 to-background relative isolate min-h-screen overflow-hidden bg-linear-to-b">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="bg-primary/12 absolute top-0 left-[-10%] h-80 w-80 rounded-full blur-3xl" />
        <div className="bg-chart-3/15 absolute right-[-10%] bottom-0 h-96 w-96 rounded-full blur-3xl" />
      </div>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pt-10 pb-16 md:px-10 md:pt-14">
        <header className="animate-in fade-in-0 slide-in-from-top-2 flex flex-wrap items-center justify-between gap-3 duration-700">
          <div className="space-y-2">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Protected workspace
            </Badge>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              You are signed in. This route is guarded by proxy + session
              checks.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline">
              <Link href="/auth/sign-out">Sign out</Link>
            </Button>
            <ThemeToggle />
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="animate-in fade-in-0 slide-in-from-bottom-4 bg-card/80 duration-700">
            <CardHeader>
              <CardTitle>Active Session</CardTitle>
              <CardDescription>
                Snapshot of the current signed-in identity.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-background/70 flex items-center gap-4 rounded-2xl border px-4 py-3">
                <Avatar size="lg">
                  <AvatarImage src={userImage} alt={userName} />
                  <AvatarFallback>{userInitials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 space-y-0.5">
                  <p className="truncate text-base font-medium">{userName}</p>
                  <p className="text-muted-foreground truncate text-sm">
                    {userEmail}
                  </p>
                </div>
              </div>

              <Separator />

              <dl className="grid gap-3 sm:grid-cols-2">
                <div className="bg-background/70 rounded-xl border px-3 py-2">
                  <dt className="text-muted-foreground text-xs uppercase">
                    Session expires
                  </dt>
                  <dd className="text-sm font-medium">{sessionExpiration}</dd>
                </div>
                <div className="bg-background/70 rounded-xl border px-3 py-2">
                  <dt className="text-muted-foreground text-xs uppercase">
                    User ID
                  </dt>
                  <dd className="truncate text-sm font-medium">
                    {session.user.id}
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card className="animate-in fade-in-0 slide-in-from-right-4 bg-card/80 duration-700">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common places users need immediately after sign-in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {dashboardLinks.map(link => (
                <div
                  key={link.href}
                  className="bg-background/70 space-y-2 rounded-2xl border p-4"
                >
                  <p className="text-sm font-medium">{link.title}</p>
                  <p className="text-muted-foreground text-sm">
                    {link.description}
                  </p>
                  <Button asChild size="sm" variant="outline">
                    <Link href={link.href as '/account/[path]'}>
                      Open {link.title}
                    </Link>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  );
}
