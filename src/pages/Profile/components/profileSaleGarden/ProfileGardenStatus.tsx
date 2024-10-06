import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface ProfileGardenStatusProps {
  garden: GardenForSale | undefined;
}

function ProfileGardenStatus({ garden }: ProfileGardenStatusProps) {
  const gardenStatusArr = ['모집 중', '상시모집', '마감'];
  const [gardenStatus] = useState(
    garden?.gardenStatus === 'ACTIVE' ? gardenStatusArr[0] : gardenStatusArr[2],
  );

  return (
    <Flex
      pos="absolute"
      top={{ mobile: '8px', tablet: '10px' }}
      left={{ mobile: '8px', tablet: '10px' }}
      h="28px"
      p="7px"
      bgColor={gardenStatus !== gardenStatusArr[2] ? 'green.100' : 'white'}
      justifyContent="center"
      alignItems="center"
      w="fit-content"
      borderRadius="10px"
      border="1px solid"
      borderColor={
        gardenStatus !== gardenStatusArr[2] ? 'green.500' : 'gray.300'
      }
    >
      <Flex gap="5px" alignItems="center">
        {gardenStatus === gardenStatusArr[0] && (
          <Box w="9px" h="9px" bgColor="orange.600" borderRadius="50%" />
        )}
        <Text
          color={gardenStatus === gardenStatusArr[2] ? 'gray.300' : 'black'}
        >
          {gardenStatus}
        </Text>
      </Flex>
    </Flex>
  );
}

export default ProfileGardenStatus;
