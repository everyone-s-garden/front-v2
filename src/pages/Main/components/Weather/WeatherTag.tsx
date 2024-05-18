import { Tag } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const WeatherTag = ({ children }: PropsWithChildren) => {
  return (
    <Tag
      fontSize={{ mobile: '14px', tablet: '20px' }}
      fontWeight="semiBold"
      rounded="10px"
      border="1px"
      borderColor="orange.600"
      bg="orange.100"
      color="orange.600"
      w="fit-content"
      p={{ mobile: '6px 8px', tablet: '8px 12px' }}
    >
      {children}
    </Tag>
  );
};

export default WeatherTag;
