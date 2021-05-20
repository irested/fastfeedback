/* eslint-disable import/no-unresolved */
import React from 'react';
import { Heading, Flex, Button, Text } from '@chakra-ui/react';

import DashboardShell from '@/components/DashboardShell';

const FreePlanEmptyState = () => {
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
        Get feedback on your site instantly
      </Heading>
      <Text mb={8}>Start today, then grow with us</Text>
      <Button variant="solid" size="md">
        Upgrade to starter
      </Button>
    </Flex>
  </DashboardShell>;
};

export default FreePlanEmptyState;
