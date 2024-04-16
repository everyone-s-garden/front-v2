import { Box, Flex, Input, Show, Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import MobileMapHeader from './MobileMapHeader';
import SearchRegionsList from './SearchRegionsList';
import useDebounce from '@/hooks/useDebounce';
import { useGetSearchRegions } from '@/services/regions/query';
import useSearchRegionsInputValue from '@/stores/useSearchRegionsInputValueStore';

interface MapHeaderProps {
  map: naver.maps.Map | null;
}

const MapHeader = ({ map }: MapHeaderProps) => {
  const mapHeaderOptions = ['공공', '개인', '둘다 표시'];
  const [mobileHeaderOption, setMobileHeaderOption] = useState(
    mapHeaderOptions[2],
  );
  const [showOption, setShowOption] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const { searchRegionsInputValue, setSearchRegionsInputValue } =
    useSearchRegionsInputValue();
  const debouncedValue = useDebounce(searchRegionsInputValue, 500);

  const { data } = useGetSearchRegions(debouncedValue);
  const regions: SearchRegions[] = data?.locationSearchResponses;

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
            <Box pos="relative" w="330px" h="100%">
              <Input
                variant="unstyled"
                bgColor="gray.50"
                border="none"
                h="100%"
                padding="0 12px"
                fontSize="14px"
                placeholder="지역명 검색"
                value={searchRegionsInputValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchRegionsInputValue(e.target.value)
                }
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
              />
              <SearchRegionsList
                map={map}
                regions={regions}
                isInputFocused={isInputFocused}
              />
            </Box>
          </Flex>
        </Box>
      </Show>

      <Show below="tablet">
        <MobileMapHeader
          {...{
            map,
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
