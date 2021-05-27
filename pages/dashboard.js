/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import EmptyState from '@/components/EmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';

import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import SiteTable from '@/components/SiteTable';

export default function Dashboard() {
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher);

  console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
}
