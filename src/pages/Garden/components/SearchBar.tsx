import { Box, Flex, Icon, Input } from '@chakra-ui/react';
import { PropsWithChildren, forwardRef, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { SearchIcon } from '@/assets/icons';
import { Garden } from '../GardenEdit/schema';
import { MyGarden } from '../MyGardenEdit/schema';
import useDebounce from '@/hooks/useDebounce';
import useSearchStore from '@/stores/searchStore';

interface SearchBarProps {
  placeholder?: string;
  fieldName: 'gardenName' | 'address';
}

const SearchBar = forwardRef<
  HTMLInputElement,
  PropsWithChildren<SearchBarProps>
>(({ placeholder, fieldName, children }, ref) => {
  const { control, setValue } = useFormContext<MyGarden | Garden>();
  const value = useWatch({ control, name: fieldName });

  const debounceValue = useDebounce(value, 500);
  const setSearchValue = useSearchStore((state) => state.setSearchValue);
  const setShowResults = useSearchStore((state) => state.setShowResults);

  useEffect(() => {
    setSearchValue(debounceValue);
  }, [debounceValue, setSearchValue]);

  return (
    <Box pos={'relative'} flexGrow={1}>
      <Flex
        bg={'gray.50'}
        borderRadius={10}
        align={'center'}
        gap={'10px'}
        p={'14px 11px'}
        h={'40px'}
      >
        <Input
          placeholder={placeholder}
          _placeholder={{ color: 'gray.400' }}
          fontWeight={'medium'}
          ref={ref}
          variant={'unstyled'}
          borderRadius={0}
          value={value}
          onChange={(e) => {
            setValue(fieldName, e.target.value);
          }}
          onBlur={() => {
            setShowResults(false);
          }}
          onFocus={() => setShowResults(true)}
        />
        <Icon as={SearchIcon} fill={'gray.400'} w={'20px'} h={'20px'} />
      </Flex>
      <Box pos={'absolute'} w={'100%'} top={'43px'} zIndex={3} bg={'white'}>
        {children}
      </Box>
    </Box>
  );
});

export default SearchBar;
