import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  showExitIcon: boolean;
  showButton: boolean;
  buttonContent?: string;
  buttonColor?: 'green' | 'orange';
  buttonDisabled?: boolean;
  handleClickButton?: () => void;
}

const Modal = ({
  isOpen,
  onClose,
  showExitIcon,
  showButton,
  buttonContent,
  buttonColor,
  buttonDisabled,
  handleClickButton,
  children,
}: PropsWithChildren<ModalProps>) => {
  const buttonColorStyles = {
    backgroundColor: buttonColor === 'green' ? 'green.500' : 'orange.500',
    _hover: {},
    _active: {},
    ...(buttonDisabled && { opacity: 0.3 }),
  };

  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backgroundColor="#00000099" />
        <ModalContent
          maxWidth="fit-content"
          borderRadius="10px"
          w="fit-content"
          padding="0px"
        >
          {showExitIcon && <ModalCloseButton />}
          <ModalBody padding="0px">{children}</ModalBody>

          {showButton && (
            <Button
              w="100%"
              h="61px"
              sx={buttonColorStyles}
              borderRadius="0px 0px 10px 10px"
              color="white"
              fontWeight="semibold"
              onClick={handleClickButton}
              disabled={buttonDisabled}
            >
              {buttonContent}
            </Button>
          )}
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default Modal;
