/* eslint-disable import/no-unresolved */
import React from 'react';
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
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { createSite } from '@/lib/db';

export default function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onCreateSite = (data) => createSite(data);

  return (
    <>
      <Button fontWeight="medium" maxW="200px" onClick={onOpen}>
        Add Your First Site
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
                ref={initialRef}
                type="text"
                placeholder="My site"
                {...register('site', { required: true, maxLength: 80 })}
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
