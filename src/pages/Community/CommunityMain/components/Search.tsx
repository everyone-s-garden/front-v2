import { Box, Icon, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SearchIcon } from '@/assets/icons';
import useDebounce from '@/hooks/useDebounce';
import { useWhisperStore } from '@/stores/whisperStore';

const Search = () => {
  const [value, setValue] = useState('');
  const setSearchContent = useWhisperStore((state) => state.setSearchContent);
  const searchContent = useDebounce(value, 500);

  useEffect(() => {
    setSearchContent(searchContent);
  }, [searchContent, setSearchContent]);

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
        mt={{ mobile: '0', tablet: '18px' }}
        mb={'18px'}
      >
        <Icon
          as={SearchIcon}
          fill={'sub'}
          w={{ mobile: '16px', tablet: '20px' }}
          h={{ mobile: '16px', tablet: '20px' }}
        />
        <Input
          placeholder="검색어를 작성하세요."
          _placeholder={{ color: 'gray.400' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          p={0}
          borderRadius={0}
          variant="unstyled"
          fontSize={{ mobile: '14px', tablet: '16px' }}
        />
      </Box>
    </>
  );
};

export default Search;
