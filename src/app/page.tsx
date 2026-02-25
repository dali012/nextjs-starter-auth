import { headers } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import ThemeToggle from '@/components/theme-toggle';
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

const pillars = [
  {
    title: 'Auth-first architecture',
    description:
      'Email/password, magic links, OAuth, and account management are already part of the product skeleton.',
  },
  {
    title: 'Route protection baked in',
    description:
      'The app entry point routes signed-in users into a guarded dashboard instead of leaving flows disconnected.',
  },
  {
    title: 'Ship-ready defaults',
    description:
      'Drizzle + Neon, typed envs, linting, and design tokens are wired so new features can start immediately.',
  },
];

const launchChecklist = [
  'Set environment variables and run database sync.',
  'Enable your OAuth provider keys when needed.',
  'Customize the dashboard cards for your product.',
];

const routeMap = [
  { route: '/auth/sign-up', note: 'Primary acquisition flow' },
  { route: '/auth/sign-in', note: 'Existing user entry' },
  { route: '/dashboard', note: 'Protected post-login workspace' },
  { route: '/account/settings', note: 'User profile + security controls' },
];

export default async function HomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className="from-background via-primary/5 to-background relative isolate overflow-hidden bg-linear-to-b">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="bg-primary/15 absolute -top-28 -left-20 h-72 w-72 rounded-full blur-3xl" />
        <div className="bg-chart-2/20 absolute top-1/4 right-[-8%] h-96 w-96 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.12)_1px,transparent_1px)] bg-size-[46px_46px] opacity-40" />
      </div>

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-10 pb-16 md:px-10 md:pt-14 md:pb-20">
        <header className="animate-in fade-in-0 slide-in-from-top-2 flex items-center justify-between duration-700">
          <Badge variant="outline" className="rounded-full px-4 py-1.5">
            NextBase Starter
          </Badge>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/auth/sign-in">Sign in</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/auth/sign-up">Create account</Link>
            </Button>
            <ThemeToggle />
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 space-y-6 duration-700">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Built for authenticated products
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
                Stop scaffolding. Start shipping.
              </h1>
              <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
                This starter gives you production-grade auth, protected routing,
                and a ready dashboard flow on day one. The homepage is your
                public entry point. Signed-in users are redirected to workspace.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/auth/sign-up">Launch your project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/auth/sign-in">Test sign-in flow</Link>
              </Button>
            </div>

            <dl className="grid gap-3 sm:grid-cols-3">
              <div className="bg-card/70 rounded-2xl border px-4 py-3 backdrop-blur">
                <dt className="text-muted-foreground text-xs uppercase">
                  Starter setup
                </dt>
                <dd className="text-2xl font-semibold">~15 min</dd>
              </div>
              <div className="bg-card/70 rounded-2xl border px-4 py-3 backdrop-blur">
                <dt className="text-muted-foreground text-xs uppercase">
                  Redirect target
                </dt>
                <dd className="text-2xl font-semibold">/dashboard</dd>
              </div>
              <div className="bg-card/70 rounded-2xl border px-4 py-3 backdrop-blur">
                <dt className="text-muted-foreground text-xs uppercase">
                  Auth screens
                </dt>
                <dd className="text-2xl font-semibold">10+</dd>
              </div>
            </dl>
          </div>

          <Card className="animate-in fade-in-0 slide-in-from-right-6 bg-card/80 border-border/60 shadow-lg duration-700">
            <CardHeader>
              <CardTitle>Launch Checklist</CardTitle>
              <CardDescription>
                Keep onboarding tight, then hand users into the dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="space-y-3 text-sm">
                {launchChecklist.map((step, index) => (
                  <li
                    key={step}
                    className="bg-background/70 flex items-start gap-3 rounded-2xl border px-4 py-3"
                  >
                    <span className="bg-primary/10 text-primary mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
              <Separator />
              <div className="space-y-2">
                <p className="text-muted-foreground text-xs uppercase">
                  Route map
                </p>
                <ul className="space-y-2 text-sm">
                  {routeMap.map(item => (
                    <li
                      key={item.route}
                      className="bg-background/70 flex items-center justify-between rounded-xl border px-3 py-2"
                    >
                      <code className="text-primary font-medium">
                        {item.route}
                      </code>
                      <span className="text-muted-foreground text-xs">
                        {item.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Card
              key={pillar.title}
              className="animate-in fade-in-0 slide-in-from-bottom-5 bg-card/70 border-border/60 backdrop-blur duration-700"
              style={{ animationDelay: `${120 + index * 80}ms` }}
            >
              <CardHeader>
                <CardTitle>{pillar.title}</CardTitle>
                <CardDescription>{pillar.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>
      </section>
    </main>
  );
}
