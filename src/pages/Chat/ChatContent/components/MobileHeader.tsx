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
      position="relative"
      display={{ mobile: 'flex', tablet: 'none' }}
      h="51px"
      w="100%"
      flexDir="column"
    >
      <Flex justifyContent="center" alignItems="center" gap="4px" h="100%">
        <Text fontSize="18px" fontWeight="semiBold">
          {partnerNickname}
        </Text>
        <Text fontSize="14px" fontWeight="regular">
          {partnerMannerGrade}
        </Text>
      </Flex>
      <Box
        position="absolute"
        w="100vw"
        h="1px"
        bg="gray.200"
        bottom="0"
        left="-20px"
      />
    </Flex>
  );
};

export default MobileHeader;
