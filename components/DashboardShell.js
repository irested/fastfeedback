/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Button,
  Text,
} from '@chakra-ui/react';
import { Logo } from '@/styles/theme';

import { useAuth } from '@/lib/auth';
import AddSiteModal from './AddSiteModal';

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
            <Logo color="black" boxSize="24px" />
            <Link>Feedback</Link>
            <Link>Sites</Link>
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
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="black">Sites /</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-between">
          <Heading mb={8}>My Sites</Heading>
          <AddSiteModal>+ Add Site</AddSiteModal>
        </Flex>

        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;
