import { Icon, Show, chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { MapArrowBottomIcon, MapArrowLeftIcon } from '@/assets/icons';

const Button = chakra(motion.button);

interface ShowGardensButtonProps {
  showGardens: boolean;
  setShowGardens: Dispatch<SetStateAction<boolean>>;
}

const ShowGardensButton = ({
  showGardens,
  setShowGardens,
}: ShowGardensButtonProps) => {
  return (
    <>
      <Show above="tablet">
        <Button
          position="absolute"
          right="0"
          top="50%"
          zIndex="2"
          bgColor="white"
          cursor="pointer"
          minW="21px"
          h="55px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            borderRadius: '5px 0 0 5px',
            borderWidth: '1px 0 1px 1px',
            borderColor: 'gray.200',
            borderStyle: 'solid',
          }}
          initial={{ y: '-50%' }}
          animate={{
            x: showGardens ? -378 : 0,
            transition: { type: 'tween' },
          }}
          onClick={() => setShowGardens(!showGardens)}
        >
          {showGardens ? (
            <Icon as={MapArrowLeftIcon} transform="rotate(180deg)" />
          ) : (
            <Icon as={MapArrowLeftIcon} />
          )}
        </Button>
      </Show>

      <Show below="tablet">
        <Button
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="55px"
          h="21px"
          left="50%"
          bottom="0"
          zIndex="2"
          bgColor="white"
          sx={{
            borderRadius: '5px 5px 0 0',
            borderWidth: '1px 1px 0 1px',
            borderColor: 'gray.200',
            borderStyle: 'solid',
          }}
          cursor="pointer"
          initial={{ x: '-50%', y: -20 }}
          animate={{
            y: showGardens ? -475 : -20,
            transition: { type: 'tween' },
          }}
          onClick={() => setShowGardens(!showGardens)}
        >
          {showGardens ? (
            <Icon as={MapArrowBottomIcon} />
          ) : (
            <Icon as={MapArrowBottomIcon} transform="rotate(180deg)" />
          )}
        </Button>
      </Show>
    </>
  );
};

export default ShowGardensButton;
