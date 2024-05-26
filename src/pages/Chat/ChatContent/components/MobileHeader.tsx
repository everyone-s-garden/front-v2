import { Box, Flex, Text } from '@chakra-ui/react';

interface MobileHeaderProps {
  partnerNickname: string;
  partnerMannerGrade: string;
}

const MobileHeader = ({
  partnerNickname,
  partnerMannerGrade,
}: MobileHeaderProps) => {
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
        {partnerNickname}
      </Text>
      <Text fontSize="14px" fontWeight="regular">
        {partnerMannerGrade}
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
