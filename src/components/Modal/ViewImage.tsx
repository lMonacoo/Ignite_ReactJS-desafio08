import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent bg="pGray.800" w="auto" maxW="900px" maxH="637px">
        <ModalBody p="0px" maxW="900px" maxH="600px">
          <Image
            src={imgUrl}
            alt="Imagem selecionada"
            maxW="900px"
            maxH="600px"
          />
        </ModalBody>
        <ModalFooter p="0px">
          <Link
            mr="auto"
            py={2}
            px={2.5}
            fontSize="sm"
            href={imgUrl}
            isExternal
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
