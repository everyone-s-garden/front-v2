import { chakra } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

interface AlertToastProps {
  show: boolean;
  message: string;
}

const AlertToast = ({ show, message }: AlertToastProps) => {
  const Box = chakra(motion.div);

  return (
    <AnimatePresence>
      {show && (
        <Box
          pos="absolute"
          top="260px"
          left="50%"
          w="195px"
          h="48px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgColor="green.500"
          color="white"
          fontSize="15px"
          fontWeight="medium"
          borderRadius="9px"
          transform="-50%"
          initial={{ opacity: 0, x: '-50%', scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          {message}
        </Box>
      )}
    </AnimatePresence>
  );
};

export default AlertToast;
