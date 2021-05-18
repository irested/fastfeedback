import Head from 'next/head';
import { Button, Heading, Text, Code } from '@chakra-ui/react';

import { useAuth } from '../lib/auth';

export default function Index() {
  const auth = useAuth();
  return auth.user ? (
    <div>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Heading fontWeight="bold">Fast Feedback</Heading>
      <Text>
        Email: <Code>{auth.user.email}</Code>
      </Text>
      <Button type="button" onClick={(e) => auth.signout()}>
        Sign Out
      </Button>
    </div>
  ) : (
    <Button type="button" onClick={(e) => auth.signinWithGitHub()}>
      Sign In
    </Button>
  );
}
