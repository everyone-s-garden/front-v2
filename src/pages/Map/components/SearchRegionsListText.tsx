import { Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { useNavermaps } from 'react-naver-maps';
import useSearchRegionsInputValue from '@/stores/useSearchRegionsInputValueStore';

interface SearchRegionsListTextProps {
  region?: SearchRegions;
  map?: naver.maps.Map | null;
  hasRegions: boolean;
}

const SearchRegionsListText = ({
  region,
  map,
  hasRegions,
  children,
}: PropsWithChildren<SearchRegionsListTextProps>) => {
  const navermaps = useNavermaps();
  const { setSearchRegionsInputValue } = useSearchRegionsInputValue();

  const handleClickList = () => {
    if (hasRegions && region && map) {
      map.setZoom(16);
      map.panTo(new navermaps.LatLng(region.latitude, region.longitude));
      setSearchRegionsInputValue(region.position);
    }
  };

  return (
    <Text
      h="45px"
      display="flex"
      paddingLeft="15px"
      alignItems="center"
      borderBottom="1px solid"
      borderBottomColor="gray.100"
      fontSize="13px"
      fontWeight="medium"
      cursor="pointer"
      color={hasRegions ? 'black' : 'gray.400'}
      _hover={{
        bgColor: 'gray.50',
      }}
      overflow="hidden"
      onClick={handleClickList}
    >
      {children}
    </Text>
  );
};

export default SearchRegionsListText;
