import { Box, Button, Flex, Icon, Input, Text } from '@chakra-ui/react';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { MobileMapArrowIcon } from '@/assets/icons';
import SearchRegionsList from './SearchRegionsList';
import useDebounce from '@/hooks/useDebounce';
import { useGetSearchRegions } from '@/services/regions/query';
import useSearchRegionsInputValueStroe from '@/stores/useSearchRegionsInputValueStore';

interface MobileMapHeaderProps {
  map: naver.maps.Map | null;
  showOption: boolean;
  setShowOption: Dispatch<SetStateAction<boolean>>;
  mobileHeaderOption: string;
  mapHeaderOptions: string[];
  setMobileHeaderOption: Dispatch<SetStateAction<string>>;
}

const MobileMapHeader = ({
  map,
  showOption,
  setShowOption,
  mobileHeaderOption,
  mapHeaderOptions,
  setMobileHeaderOption,
}: MobileMapHeaderProps) => {
  const { searchRegionsInputValue, setSearchRegionsInputValue } =
    useSearchRegionsInputValueStroe();
  const debouncedValue = useDebounce(searchRegionsInputValue, 500);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const { data } = useGetSearchRegions(debouncedValue);

  const regions: SearchRegions[] = data?.locationSearchResponses;

  return (
    <Flex h="67px" gap="8px" alignItems="center" padding="20px">
      <Box position="relative">
        <Button
          borderRadius="7px"
          w="100px"
          h="36px"
          bgColor="green.100"
          color="green.700"
          fontWeight="medium"
          fontSize="14px"
          _hover={{}}
          _active={{}}
          display="flex"
          gap="5px"
          onClick={() => {
            setShowOption(!showOption);
          }}
        >
          {mobileHeaderOption}
          <Icon
            as={MobileMapArrowIcon}
            w="9px"
            h="8px"
            transform={showOption ? 'rotate( 180deg )' : undefined}
            transition="transform 0.3s ease"
          />
        </Button>
        {showOption && (
          <Box
            position="absolute"
            w="100%"
            borderRadius="7px"
            bgColor="white"
            overflow="hidden"
            zIndex="1"
          >
            {mapHeaderOptions.map((option, i) => (
              <Text
                padding="4px 16px"
                color="green.700"
                _hover={{
                  bgColor: 'green.100',
                }}
                cursor="pointer"
                onClick={() => {
                  setShowOption(!showOption);
                  setMobileHeaderOption(option);
                }}
                key={i}
              >
                {option}
              </Text>
            ))}
          </Box>
        )}
      </Box>
      <Box pos="relative" w="calc(100% - 100px)">
        <Input
          w="100%"
          h="36px"
          variant="unstyled"
          bgColor="gray.50"
          border="none"
          padding="0 12px"
          fontSize="14px"
          placeholder="지역명 검색"
          value={searchRegionsInputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchRegionsInputValue(e.target.value)
          }
          onFocus={() => {
            setIsInputFocused(true);
          }}
          onBlur={() => setIsInputFocused(false)}
        />
        <SearchRegionsList
          map={map}
          regions={regions}
          isInputFocused={isInputFocused}
        />
      </Box>
    </Flex>
  );
};
export default MobileMapHeader;
