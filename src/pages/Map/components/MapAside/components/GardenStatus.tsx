import { Box, Flex, Text } from '@chakra-ui/react';

interface GardenStatusProps {
  gardenStatus?: 'ACTIVE' | 'INACTIVE';
  type: 'normal' | 'detail';
}

const GardenStatus = ({ gardenStatus, type }: GardenStatusProps) => {
  return (
    <Flex
      position={type === 'detail' ? 'absolute' : undefined}
      zIndex={type === 'detail' ? '1' : undefined}
      top="18px"
      right="18px"
      justifyContent="center"
      alignItems="center"
      marginBottom="12px"
      gap="5px"
      w={type === 'normal' ? '74px ' : '80px'}
      h={type === 'normal' ? '28px' : '32px'}
      bgColor="green.100"
      borderRadius="8px"
      border="1px solid"
      borderColor="green.500"
    >
      {gardenStatus === 'ACTIVE' && (
        <Box w="9px" h="9px" bgColor="green.500" borderRadius="50%" />
      )}

      <Text fontSize={type === 'normal' ? '14px' : '16px'}>
        {gardenStatus === 'ACTIVE' ? '모집 중' : '마감'}
      </Text>
    </Flex>
  );
};

export default GardenStatus;
