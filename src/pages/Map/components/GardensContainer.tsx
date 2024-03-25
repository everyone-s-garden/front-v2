import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const GardenContainer = chakra(motion.div);

const GardensContainer = () => {
  return (
    <GardenContainer
      w="379px"
      position="absolute"
      zIndex="1"
      h="100%"
      right="0"
      bgColor="white"
      borderWidth="1px 0 0 1px"
      borderColor="gray.200"
      initial={{ x: 379 }}
      animate={{
        x: 0,
        transition: { type: 'tween' },
      }}
      exit={{
        x: 379,
        transition: { type: 'tween' },
      }}
    ></GardenContainer>
  );
};

export default GardensContainer;
