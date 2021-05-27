/* eslint-disable import/no-unresolved */
import React from 'react';
import { Heading, Text, Flex } from '@chakra-ui/react';

import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
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
    <AddSiteModal>Add Your First Site</AddSiteModal>
  </Flex>
);

export default EmptyState;
