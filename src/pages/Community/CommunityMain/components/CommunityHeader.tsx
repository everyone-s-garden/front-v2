import { Flex, Heading, Show, Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const CommunityHeader = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      h={{ mobile: '127px', tablet: '218px' }}
      bg={'green.100'}
      pt={{ mobile: '23px', tablet: '28px' }}
      px={'20px'}
      pb={{ mobile: '23px', tablet: '20px' }}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Show above="tablet">
        <Heading
          as={'h1'}
          fontWeight={'bold'}
          fontSize={'24px'}
          margin="0 0 12px 0"
        >
          속닥속닥
        </Heading>
        <Text color={'sub'}>
          정보 공유 및 텃밭 자랑, 궁금한 것을 질문해요 !
        </Text>
      </Show>
      {children}
    </Flex>
  );
};

export default CommunityHeader;
