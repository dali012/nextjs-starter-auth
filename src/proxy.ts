import { NextRequest, NextResponse } from 'next/server';

import { auth } from './lib/auth';

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (
    path === '/account/organizations' ||
    path === '/account/teams' ||
    path === '/account/api-keys'
  ) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/account/organizations',
    '/account/teams',
    '/account/api-keys',
  ],
};
