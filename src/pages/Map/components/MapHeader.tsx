import { Box, Flex, Input, Show, Text } from '@chakra-ui/react';
import { useState } from 'react';
import MobileMapHeader from './MobileMapHeader';

const MapHeader = () => {
  const mapHeaderOptions = ['공공', '개인', '둘다 표시'];
  const [mobileHeaderOption, setMobileHeaderOption] = useState(
    mapHeaderOptions[2],
  );
  const [showOption, setShowOption] = useState(false);

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
              fontWeight={mobileHeaderOption === '공공' ? 'medium' : 'regular'}
              color={mobileHeaderOption === '공공' ? undefined : 'gray.400'}
              onClick={() => {
                setMobileHeaderOption('공공');
              }}
            >
              {mapHeaderOptions[0]}
            </Text>
            <Text
              cursor="pointer"
              fontSize="18px"
              fontWeight={mobileHeaderOption === '개인' ? 'medium' : 'regular'}
              color={mobileHeaderOption === '개인' ? undefined : 'gray.400'}
              onClick={() => {
                setMobileHeaderOption('개인');
              }}
            >
              {mapHeaderOptions[1]}
            </Text>
            <Text
              cursor="pointer"
              fontSize="18px"
              fontWeight={
                mobileHeaderOption === '둘다 표시' ? 'medium' : 'regular'
              }
              color={
                mobileHeaderOption === '둘다 표시' ? undefined : 'gray.400'
              }
              onClick={() => {
                setMobileHeaderOption('둘다 표시');
              }}
            >
              {mapHeaderOptions[2]}
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

      <Show below="tablet">
        <MobileMapHeader
          {...{
            showOption,
            setShowOption,
            mobileHeaderOption,
            mapHeaderOptions,
            setMobileHeaderOption,
          }}
        />
      </Show>
    </>
  );
};

export default MapHeader;
