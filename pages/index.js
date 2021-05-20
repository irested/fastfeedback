/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import { Button, Text, Code, Flex } from '@chakra-ui/react';
import { Logo } from '@/styles/theme';

import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';

export default function Index() {
  const auth = useAuth();
  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <Logo color="black" boxSize="64px" />
      {auth.user ? (
        <>
          <EmptyState />
          <Button type="button" variant="ghost" mt="4" onClick={(e) => auth.signout()}>
            Sign Out
          </Button>
        </>
      ) : (
        <Button type="button" variant="link" mt="4" onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
