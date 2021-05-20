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

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="whiteAlpha.900"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline justifyContent="center" alignItems="center">
          <Logo color="black" boxSize="24px" />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Stack spacing={4} isInline alignItems="center">
          <Link>Account</Link>
          <Avatar size="sm" src={auth.user.photoUrl} />
        </Stack>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} justifyContent="center">
        <Flex flexDirection="column" w="100%" maxW="800px">
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="black">Sites /</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={4}>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
