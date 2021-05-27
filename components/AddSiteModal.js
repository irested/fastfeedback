/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';

import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

export default function AddSiteModal({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const auth = useAuth();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
    };
    createSite(newSite);
    toast({
      title: `Success !`,
      description: "We've added your site.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    mutate('/api/sites', async (data) => ({ sites: [...data.sites, newSite] }), false);
    onClose();
  };

  return (
    <>
      <Button
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{ bg: 'gray.800', transform: 'scale(0.95)' }}
        onClick={onOpen}
      >
        {children}
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="My site"
                {...register('name', { required: true, maxLength: 80 })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                type="url"
                placeholder="https://example.com"
                {...register('url', { required: true, maxLength: 100 })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button fontWeight="medium" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit "
              fontWeight="medium"
              backgroundColor="#99FFFE"
              color="#194D4C"
              ml={3}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
