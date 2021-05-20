/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import { Button, Text, Code, Flex } from '@chakra-ui/react';
import { Logo } from '@/styles/theme';

import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';

export default function Dashboard() {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }

  return <EmptyState />;
}
