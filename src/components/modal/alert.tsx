import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
} from "@chakra-ui/react";

type CreateProps = {
  isOpen: boolean;
  onClose: () => void;
};

function AlertModal(props: CreateProps) {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>注意！</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>推しの名前もしくはメッセージを入力してください。</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AlertModal;
