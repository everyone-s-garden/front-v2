import { Center, Text } from '@chakra-ui/react';

const MobileHeader = () => {
  return (
    <Center
      as={'header'}
      h={'53px'}
      pos={'sticky'}
      top={0}
      zIndex={10}
      bg={'white'}
      borderBottom={'1px solid'}
      borderColor={'gray.100'}
      hideFrom={'tablet'}
    >
      <Text fontSize={'18px'} fontWeight={'semiBold'} textAlign={'center'}>
        분양 텃밭 등록하기
      </Text>
    </Center>
  );
};

export default MobileHeader;
