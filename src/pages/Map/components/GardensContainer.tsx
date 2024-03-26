import { Box, Flex, Image, Text, chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { MapNoGardenImg } from '@/assets/images';

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
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap="16px"
        h="100%"
      >
        <Image src={MapNoGardenImg} w="66px" h="66px" />

        <Box>
          <Text fontWeight="semibold" fontSize="18px" color="#80AC49">
            해당 지역에는 텃밭이 없어요!
          </Text>
          <Text fontWeight="regular" fontSize="16px" color="#80AC49">
            지도를 다른 곳으로 움직여보세요.
          </Text>
        </Box>
      </Flex>
    </GardenContainer>
  );
};

export default GardensContainer;
