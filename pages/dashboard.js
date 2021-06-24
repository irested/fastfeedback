/* eslint-disable import/no-unresolved */
import EmptyState from '@/components/EmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import SiteTable from '@/components/SiteTable';
import TableHeader from '@/components/TableHeader';

import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';

export default function Dashboard() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <TableHeader name="Sites" />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <TableHeader name="Sites" />
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
}
