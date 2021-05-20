/* eslint-disable import/no-unresolved */
import React from 'react';
import { Heading, Button, Text, Flex } from '@chakra-ui/react';

import DashboardShell from '@/components/DashboardShell';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <DashboardShell>
    <Flex
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Heading as="h2" size="lg" mb={4}>
        You haven't added any sites
      </Heading>
      <Text mb={8}>Welcome 👋 Let's get started.</Text>
      <AddSiteModal />
    </Flex>
  </DashboardShell>
);

export default EmptyState;
