/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { format, parseISO } from 'date-fns';
import { Box, Divider, Heading, Text } from '@chakra-ui/layout';

const Feedback = ({ author, text, createdAt }) => (
  <Box borderRadius={4} maxWidth="700px" w="full">
    <Heading size="sm" as="h3" mb={0} color="gray.900" fontWeight="medium">
      {author}
    </Heading>
    <Text color="gray.500" mb={4} fontSize="xs">
      {format(parseISO(createdAt), 'PPpp')}
    </Text>
    <Text color="gray.800">{text}</Text>
    <Divider borderColor="gray.200" backgroundColor="gray.200" my={8} />
  </Box>
);
export default Feedback;
