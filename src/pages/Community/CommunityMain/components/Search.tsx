import { Box, Icon, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { SearchIcon } from '@/assets/icons';

const Search = () => {
  const [value, setValue] = useState('');

  // TODO: params 변경

  return (
    <>
      <Box
        bg={'white'}
        p={'10px'}
        display={'flex'}
        alignItems={'center'}
        gap={'10px'}
        borderRadius={'6px'}
        maxW={'496px'}
        w={'100%'}
        mt={{ mobile: '0', tablet: '20px' }}
        mb={'20px'}
      >
        <Icon
          as={SearchIcon}
          fill={'sub'}
          w={{ mobile: '16px', tablet: '20px' }}
          h={{ mobile: '16px', tablet: '20px' }}
        />
        <Input
          placeholder="검색어를 작성하세요."
          _placeholder={{ color: 'sub' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          p={0}
          borderRadius={0}
          variant="unstyled"
        />
      </Box>
    </>
  );
};

export default Search;
