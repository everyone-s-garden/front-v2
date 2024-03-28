import { Box, Heading, Show, Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const CommunityHeader = ({ children }: PropsWithChildren) => {
  return (
    <Box
      bg={'orange.100'}
      pt={{ mobile: '23px', tablet: '28px' }}
      px={'20px'}
      pb={{ mobile: '23px', tablet: '20px' }}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
    >
      <Show above="tablet">
        <Heading as={'h3'} fontWeight={'bold'} fontSize={'24px'} mb={'12px'}>
          속닥속닥
        </Heading>
        <Text color={'sub'}>
          정보 공유 및 텃밭 자랑, 궁금한 것을 질문해요 !
        </Text>
      </Show>
      {children}
    </Box>
  );
};

export default CommunityHeader;
