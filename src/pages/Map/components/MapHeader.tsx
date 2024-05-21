import { Box, Flex, Input, Show, Text } from '@chakra-ui/react';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import MobileMapHeader from './MobileMapHeader';
import SearchRegionsList from './SearchRegionsList';
import useDebounce from '@/hooks/useDebounce';
import { useGetSearchRegions } from '@/services/regions/query';
import useSearchRegionsInputValue from '@/stores/useSearchRegionsInputValueStore';

interface MapHeaderProps {
  map: naver.maps.Map | null;
  mapHeaderOptionsArray: string[];
  headerOption: string;
  setHeaderOption: Dispatch<SetStateAction<string>>;
}

const MapHeader = ({
  map,
  mapHeaderOptionsArray,
  headerOption,
  setHeaderOption,
}: MapHeaderProps) => {
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
              fontWeight={headerOption === '공공' ? 'medium' : 'regular'}
              color={headerOption === '공공' ? undefined : 'gray.400'}
              onClick={() => {
                setHeaderOption('공공');
              }}
            >
              {mapHeaderOptionsArray[0]}
            </Text>
            <Text
              cursor="pointer"
              fontSize="18px"
              fontWeight={headerOption === '개인' ? 'medium' : 'regular'}
              color={headerOption === '개인' ? undefined : 'gray.400'}
              onClick={() => {
                setHeaderOption('개인');
              }}
            >
              {mapHeaderOptionsArray[1]}
            </Text>
            <Text
              cursor="pointer"
              fontSize="18px"
              fontWeight={headerOption === '둘다 표시' ? 'medium' : 'regular'}
              color={headerOption === '둘다 표시' ? undefined : 'gray.400'}
              onClick={() => {
                setHeaderOption('둘다 표시');
              }}
            >
              {mapHeaderOptionsArray[2]}
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
                onBlur={() => {
                  setTimeout(() => {
                    setIsInputFocused(false);
                  }, 250);
                }}
              />
              {isInputFocused && (
                <SearchRegionsList
                  map={map}
                  regions={regions}
                  isInputFocused={isInputFocused}
                />
              )}
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
            headerOption,
            mapHeaderOptionsArray,
            setHeaderOption,
          }}
        />
      </Show>
    </>
  );
};

export default MapHeader;
