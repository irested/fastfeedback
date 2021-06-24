/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState, useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { mutate } from 'swr';

import { deleteFeedback } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const RemoveButton = ({ feedbackId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef();
  const auth = useAuth();

  const onClose = () => setIsOpen(false);
  const onDelete = () => {
    deleteFeedback(feedbackId);
    mutate(
      ['/api/feedback', auth.user.token],
      async (data) => ({
        feedback: data.feedback.filter((feedback) => feedback.id !== feedbackId),
      }),
      false
    );
    onClose();
  };

  return (
    <>
      <IconButton
        variant="ghost"
        aria-label="Delete Feedback"
        icon={<DeleteIcon />}
        onClick={() => setIsOpen(true)}
      />

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Feedback
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default RemoveButton;
