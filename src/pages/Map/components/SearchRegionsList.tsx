import { Box } from '@chakra-ui/react';
import SearchRegionsListText from './SearchRegionsListText';

interface SearchRegionListProps {
  map: naver.maps.Map | null;
  regions: SearchRegions[];
  isInputFocused: boolean;
}

const SearchRegionsList = ({
  map,
  regions,
  isInputFocused,
}: SearchRegionListProps) => {
  return (
    <Box
      pos="absolute"
      top="40px"
      zIndex="1"
      bgColor="white"
      w="100%"
      maxH="220px"
      overflow="auto"
      borderRadius="11px"
    >
      {isInputFocused && regions?.length === 0 && (
        <SearchRegionsListText hasRegions={false}>
          검색 결과가 없습니다. 정확한 검색어를 입력해주세요.
        </SearchRegionsListText>
      )}
      {regions?.map((region, i) => (
        <SearchRegionsListText
          region={region}
          hasRegions={true}
          key={i}
          map={map}
        >
          {region.position}
        </SearchRegionsListText>
      ))}
    </Box>
  );
};

export default SearchRegionsList;
