import { Center, Text } from '@chakra-ui/react';
import { useBlocker } from 'react-router-dom';
import Modal from './Modal';

interface BlockerModalProps {
  color: 'green' | 'orange';
  blockState: boolean;
}

const BlockerModal = ({ color, blockState }: BlockerModalProps) => {
  const { proceed, reset, state } = useBlocker(
    ({ currentLocation, nextLocation }) =>
      blockState && currentLocation.pathname !== nextLocation.pathname,
  );

  return (
    <Modal
      isOpen={state === 'blocked'}
      onClose={() => reset && reset()}
      handleClickButton={() => proceed && proceed()}
      showButton={true}
      showExitIcon={true}
      buttonColor={color}
      buttonContent={'이동하기'}
      buttonDisabled={false}
    >
      <Center
        w={{ mobile: 'calc(100vw - 40px)', tablet: '400px' }}
        h={{ mobile: '160px', tablet: '200px' }}
        display="flex"
        justifyContent="center"
      >
        <Text
          textAlign="center"
          fontSize={{ mobile: 'inherit', tablet: '18px' }}
          fontWeight="semibold"
        >
          {`작성 중인 내용이 있습니다.\n다른 페이지로 이동하시겠습니까?`}
        </Text>
      </Center>
    </Modal>
  );
};

export default BlockerModal;
