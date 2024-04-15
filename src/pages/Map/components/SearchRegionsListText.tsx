import { Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface SearchRegionsListTextProps {
  hasRegions: boolean;
}

const SearchRegionsListText = ({
  children,
  hasRegions,
}: PropsWithChildren<SearchRegionsListTextProps>) => {
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
    >
      {children}
    </Text>
  );
};

export default SearchRegionsListText;
