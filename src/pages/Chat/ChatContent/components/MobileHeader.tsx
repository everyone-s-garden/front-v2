import { Box, Flex, Text } from '@chakra-ui/react';

const MobileHeader = () => {
  return (
    <Flex
      display={{ mobile: 'block', tablet: 'none' }}
      h="51px"
      justifyContent="center"
      alignItems="center"
      gap="4px"
      position="relative"
    >
      <Text fontSize="18px" fontWeight="semiBold">
        nickname
      </Text>
      <Text fontSize="14px" fontWeight="regular">
        씨앗 · 1분전
      </Text>
      <Box
        position="absolute"
        bottom="0"
        // left="0"
        // w="100vw"
        h="1px"
        bg="gray.200"
        margin="0 16px"
      />
    </Flex>
  );
};

export default MobileHeader;
