import { Center, Text } from '@chakra-ui/react';

interface MobileHeaderProps {
  name: string;
}

const MobileHeader = ({ name }: MobileHeaderProps) => {
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
        {name}
      </Text>
    </Center>
  );
};

export default MobileHeader;
