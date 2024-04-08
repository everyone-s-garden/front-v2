import { Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const ItemTitle = ({ children }: PropsWithChildren) => {
  return (
    <Text
      mb={{ mobile: '20px', tablet: '30px' }}
      fontSize={{ mobile: '18px', tablet: '24px' }}
      fontWeight="bold"
      wordBreak="keep-all"
    >
      {children}
    </Text>
  );
};

export default ItemTitle;
