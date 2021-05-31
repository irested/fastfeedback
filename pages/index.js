/* eslint-disable react/no-danger */
/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import { Button, Flex, Link } from '@chakra-ui/react';
import { Logo } from '@/styles/theme';
import NextLink from 'next/link';

import { useAuth } from '@/lib/auth';

export default function Index() {
  const auth = useAuth();
  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes(true)) {
                window.location.href = "/dashboard"
              }
            `,
          }}
        />
        <title>Fast Feedback</title>
      </Head>

      <Logo color="black" boxSize="64px" />
      {auth.user ? (
        <>
          <NextLink href="/dashboard" passHref>
            <Button mt={4} as="a" colorScheme="gray" variant="outline">
              View Feedback
            </Button>
          </NextLink>
        </>
      ) : (
        <Button type="button" variant="link" mt="4" onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
