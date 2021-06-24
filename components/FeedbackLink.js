/* eslint-disable react/prop-types */
import { Flex, Link } from '@chakra-ui/react';

export default function FeedbackLink({ paths }) {
  return (
    <Flex
      align={['flex-start', 'center']}
      justifyContent="space-between"
      mb={8}
      width="full"
      mt={1}
      direction={['column', 'row']}
    >
      <Link
        color="blue.500"
        fontWeight="bold"
        fontSize="sm"
        href={`/p/${paths.join('/')}`}
        target="_blank"
      >
        Leave a comment →
      </Link>
      <Link fontSize="xs" color="gray.500" href="/" target="_blank">
        Powered by Fast Feedback (Alpha)
      </Link>
    </Flex>
  );
}
