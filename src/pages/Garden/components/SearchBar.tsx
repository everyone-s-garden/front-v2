import { Box, Flex, Icon, Input, List } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { SearchIcon } from '@/assets/icons';

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ placeholder }, ref) => {
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
          />
          <Icon as={SearchIcon} fill={'gray.400'} w={'20px'} h={'20px'} />
        </Flex>
        <List></List>
      </Box>
    );
  },
);

export default SearchBar;
