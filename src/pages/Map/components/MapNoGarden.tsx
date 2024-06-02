import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { MapNoGardenImg } from '@/assets/images';

const MapNoGarden = () => {
  return (
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
  );
};

export default MapNoGarden;
