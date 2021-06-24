/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Code, Switch } from '@chakra-ui/react';

import { Table, Tr, Th, Td } from './Table';
import RemoveButton from './RemoveButton';

const FeedbackTable = ({ allFeedback }) => (
  <Table>
    <thead>
      <Tr>
        <Th>Name</Th>
        <Th>Feedback</Th>
        <Th>Route</Th>
        <Th>Visible</Th>
        <Th>{''}</Th>
      </Tr>
    </thead>
    <tbody>
      {allFeedback.map((feedback) => (
        <Box as="tr" key={feedback.id}>
          <Td fontWeight="medium">{feedback.author}</Td>
          <Td>{feedback.text}</Td>
          <Td>
            <Code>{'/'}</Code>
          </Td>
          <Td>
            <Switch defaultChecked={feedback.status === 'active'} colorScheme="green" size="md" />
          </Td>
          <Td>
            <RemoveButton feedbackId={feedback.id} />
          </Td>
        </Box>
      ))}
    </tbody>
  </Table>
);

export default FeedbackTable;
