import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const features = [
  {
    title: 'Authentication as infrastructure',
    description:
      'Email, magic links, OAuth, and multi-tenant support integrated into the base not bolted on later.',
  },
  {
    title: 'App-wide session awareness',
    description:
      'Layouts, routes, and components stay in sync with session state using the App Router.',
  },
  {
    title: 'Production-first defaults',
    description:
      'Security, redirects, database migrations, and edge cases handled before your app grows.',
  },
];

const steps = [
  'Install dependencies and start the dev server.',
  'Configure environment variables and push the database schema.',
  'Customize UI tokens to match your product’s brand.',
];

const stats = [
  {
    label: 'Auth screens',
    value: '6+',
    note: 'Sign-in, sign-up, reset, account, magic link, OAuth',
  },
  {
    label: 'Routes protected',
    value: '100%',
    note: 'Middleware-powered session guards',
  },
  {
    label: 'Setup time',
    value: '~15m',
    note: 'From env to first login',
  },
];

const faqs = [
  {
    question: 'Can I swap the database?',
    answer:
      'Yes. Drizzle is set up for Postgres by default — point DATABASE_URL to any compatible provider and re-run migrations.',
  },
  {
    question: 'How do I theme the UI?',
    answer:
      'Edit CSS tokens in globals.css or override shadcn/ui tokens. The auth UI respects your theme automatically.',
  },
  {
    question: 'Is OAuth included?',
    answer:
      'Yes. OAuth and email/passwordless flows are wired — just add provider secrets to your environment variables.',
  },
  {
    question: 'Does it support multi-tenant apps?',
    answer:
      'Yes. Tenant-aware routes and account contexts are supported and extensible via auth callbacks.',
  },
];

export default function HomePage() {
  return (
    <main className="from-background via-background to-muted/40 relative isolate overflow-hidden bg-linear-to-b">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
      >
        <div className="bg-primary/10 absolute top-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full blur-3xl" />
        <div className="bg-secondary/20 absolute top-[10%] right-[-15%] h-[520px] w-[520px] rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-16 pb-20 md:px-10 md:pt-24">
        <header className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-6 md:max-w-2xl">
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary gap-2 rounded-full"
            >
              <span
                aria-hidden="true"
                className="bg-primary h-2 w-2 rounded-full"
              />
              Production-ready Next.js base
            </Badge>

            <div className="space-y-4">
              <h1 className="text-foreground text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
                Start from a solid base. Ship faster.
              </h1>
              <p className="text-muted-foreground text-lg text-pretty sm:text-xl">
                NextBase is a production-ready foundation for modern Next.js
                products authentication, database, UI, and conventions already
                wired so you can focus on building features.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/auth/sign-up" className="group">
                  Get started
                  <span
                    aria-hidden="true"
                    className="text-lg transition group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link href="/auth/sign-in">Live demo</Link>
              </Button>

              <Badge
                variant="outline"
                className="border-border/80 bg-card/50 rounded-full"
              >
                <span
                  aria-hidden="true"
                  className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500"
                />
                Opinionated. Typed. Production-ready.
              </Badge>
            </div>
          </div>

          {/* Preview card */}
          <Card className="border-border/60 bg-card/80 relative w-full max-w-md self-start shadow-xl backdrop-blur">
            <CardHeader className="text-muted-foreground flex flex-row items-center justify-between text-sm">
              <span>Sign-in preview</span>
              <Badge variant="secondary" className="rounded-full text-xs">
                Session aware
              </Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <Card className="border-border/70 bg-background/80 border-dashed">
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span>Email</span>
                    <span className="text-muted-foreground">
                      you@product.dev
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span>Passwordless</span>
                    <span className="text-muted-foreground">Magic link</span>
                  </div>
                  <p className="border-border/80 bg-muted/60 text-muted-foreground rounded-xl border border-dashed px-4 py-3 text-sm">
                    Protected routes refresh automatically when the session
                    changes.
                  </p>
                  <div className="flex gap-2">
                    <Button className="flex-1">Continue</Button>
                    <Button variant="outline" className="flex-1">
                      SSO
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </header>

        <div className="grid gap-6 md:grid-cols-[2fr,1.2fr]">
          <Card className="border-border/70 bg-card/70 shadow-sm backdrop-blur">
            <CardHeader className="flex items-center justify-between text-sm font-semibold">
              <h2 className="sr-only">Why NextBase</h2>
              <span>Why NextBase</span>
              <Badge variant="secondary" className="rounded-full text-xs">
                Batteries included
              </Badge>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-3">
              {features.map(feature => (
                <Card
                  key={feature.title}
                  className="border-border/70 bg-background/80"
                >
                  <CardHeader className="gap-1">
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/70 shadow-sm backdrop-blur">
            <CardHeader className="flex items-center justify-between text-sm font-semibold">
              <h2 className="sr-only">Getting started</h2>
              <span>Getting started</span>
              <Badge variant="outline" className="rounded-full">
                ~15 min
              </Badge>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-sm">
                {steps.map((step, index) => (
                  <li
                    key={step}
                    className="border-border/60 bg-background/80 flex items-start gap-3 rounded-2xl border px-4 py-3"
                  >
                    <span
                      aria-hidden="true"
                      className="bg-primary/10 text-primary mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
                    >
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        <section aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">
            Project statistics
          </h2>
          <dl className="grid gap-3 sm:grid-cols-3">
            {stats.map(stat => (
              <div
                key={stat.label}
                className="border-border/70 bg-background/80 rouorder p-4 uppercase"
              >
                <dt className="text-muted-foreground/80 text-xs tracking-wide uppercase">
                  {stat.label}
                </dt>
                <dd className="text-foreground text-3xl font-semibold">
                  {stat.value}
                </dd>
                <dd className="text-muted-foreground text-sm">{stat.note}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="faq-heading">
          <Card className="border-border/70 bg-card/70 shadow-sm backdrop-blur">
            <CardHeader>
              <CardTitle id="faq-heading" className="text-2xl">
                FAQ
              </CardTitle>
              <CardDescription>
                Common questions about extending or theming NextBase.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="curpo space-y-3">
                {faqs.map(faq => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger className="cursor-pointer">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <footer className="text-muted-foreground flex flex-col items-center gap-3 pt-4 pb-16 text-center text-sm">
          <Badge
            variant="outline"
            className="border-border text-foreground flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase"
          >
            <span
              aria-hidden="true"
              className="bg-primary h-2 w-2 rounded-full"
            />
            Built on Next.js
          </Badge>
          <p>The foundation is already built. Start where it matters.</p>
          <nav className="flex flex-wrap justify-center gap-3">
            <Link
              href="/account/settings"
              className="hover:text-primary underline underline-offset-4"
            >
              Account
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/auth/sign-in"
              className="hover:text-primary underline underline-offset-4"
            >
              Sign in
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="https://github.com/dali012/nextjs-starter-auth"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary underline underline-offset-4"
            >
              GitHub
            </Link>
          </nav>
        </footer>
      </section>
    </main>
  );
}
