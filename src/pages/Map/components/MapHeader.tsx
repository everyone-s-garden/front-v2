import { Box, Flex, Input, Show, Text } from '@chakra-ui/react';
import { useState } from 'react';

const MapHeader = () => {
  const [mapHeaderOption, setMapHeaderOption] = useState(3);

  const handelActiveOption = (id: number) => {
    setMapHeaderOption(id);
  };

  return (
    <>
      <Show above="tablet">
        <Box w="1187px" h="57px" margin="0 auto" padding="0 20px">
          <Flex w="100%" h="36px" alignItems="center" gap="30px">
            <Text cursor="pointer" fontSize="15px" fontWeight="regular">
              분양주체
            </Text>
            <Text
              cursor="pointer"
              fontSize="18px"
              fontWeight={mapHeaderOption === 1 ? 'medium' : 'regular'}
              color={mapHeaderOption === 1 ? undefined : 'gray.400'}
              onClick={() => {
                handelActiveOption(1);
              }}
            >
              공공
            </Text>
            <Text
              cursor="pointer"
              fontSize="18px"
              fontWeight={mapHeaderOption === 2 ? 'medium' : 'regular'}
              color={mapHeaderOption === 2 ? undefined : 'gray.400'}
              onClick={() => {
                handelActiveOption(2);
              }}
            >
              개인
            </Text>
            <Text
              cursor="pointer"
              fontSize="18px"
              fontWeight={mapHeaderOption === 3 ? 'medium' : 'regular'}
              color={mapHeaderOption === 3 ? undefined : 'gray.400'}
              onClick={() => {
                handelActiveOption(3);
              }}
            >
              둘다 표시
            </Text>
            <Input
              variant="unstyled"
              bgColor="gray.50"
              border="none"
              maxW="330px"
              h="100%"
              padding="0 12px"
              fontSize="14px"
              placeholder="지역명 검색"
            />
          </Flex>
        </Box>
      </Show>
    </>
  );
};

export default MapHeader;
