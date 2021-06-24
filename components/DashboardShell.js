/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, Stack, Avatar, Box, Button } from '@chakra-ui/react';
import { Logo } from '@/styles/theme';

import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex backgroundColor="white" mb={[8, 16]} w="full" borderTop="5px solid #0AF5F4">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="60px"
        >
          <Stack spacing={4} isInline justifyContent="center" alignItems="center">
            <NextLink href="/" passHref>
              <Logo color="black" boxSize="24px" />
            </NextLink>
            <NextLink href="/dashboard" passHref>
              <Link>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Stack>
          <Stack spacing={4} isInline alignItems="center">
            <Button variant="ghost" onClick={() => signout()}>
              Log Out
            </Button>
            <Avatar size="sm" src={user?.photoUrl} />
          </Stack>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;
