import { AccountView } from '@daveyplate/better-auth-ui';

const accountPaths = ['settings', 'security'] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return accountPaths.map(path => ({ path }));
}

export default async function AccountPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;

  return <AccountView path={path} />;
}
