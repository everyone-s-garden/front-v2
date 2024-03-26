import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { NextIcon, PrevIcon } from '@/assets/icons';

const IconButtonContainer = chakra(motion.div);
const IconButton = chakra(motion.button);

interface ShowGardensButtonProps {
  showGardens: boolean;
  setShowGardens: Dispatch<SetStateAction<boolean>>;
}

const ShowGardensButton = ({
  showGardens,
  setShowGardens,
}: ShowGardensButtonProps) => {
  return (
    <IconButtonContainer
      position="absolute"
      right="0"
      top="50%"
      zIndex="2"
      bgColor="white"
      borderRadius="5px 0 0 5px"
      cursor="pointer"
      initial={{ y: '-50%' }}
      animate={{
        x: showGardens ? -379 : 0,
        y: '-50%',
        transition: { type: 'tween' },
      }}
    >
      <IconButton
        as={showGardens ? NextIcon : PrevIcon}
        minW="21px"
        h="55px"
        fill="gray.300"
        borderRadius="5px 0 0 5px"
        borderWidth="1px 0 1px 1px"
        borderColor="gray.200"
        onClick={() => setShowGardens(!showGardens)}
      />
    </IconButtonContainer>
  );
};

export default ShowGardensButton;
