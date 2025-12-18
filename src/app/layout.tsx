import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import Navbar from '@/components/navbar';
import AuthUiProvider from '@/components/providers/better-auth-ui-provider';
import ThemeProvider from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'NextBase',
    template: '%s · NextBase',
  },
  description:
    'A modern Next.js 16 starter with Better Auth, Drizzle ORM, Neon PostgreSQL, shadcn/ui, and Tailwind CSS v4.',
  keywords: [
    'Next.js Starter',
    'Next.js 16',
    'Better Auth',
    'Drizzle ORM',
    'Neon PostgreSQL',
    'shadcn/ui',
    'Tailwind CSS v4',
  ],
  authors: [{ name: 'NextBase' }],
  creator: 'NextBase',
  openGraph: {
    title: 'NextBase',
    description:
      'The base you start from. Authentication, database, and UI wired for production.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextBase',
    description:
      'A modern Next.js starter with authentication, database, and UI ready.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthUiProvider>
            <Navbar />
            {children}
            <Toaster richColors />
          </AuthUiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
