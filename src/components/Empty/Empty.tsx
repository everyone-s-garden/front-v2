import { As, Center, Icon, Text } from '@chakra-ui/react';
import { FONT_SIZE, IMAGE_SIZE } from './constants';

interface EmptyProps {
  size?: 'small' | 'medium' | 'large';
  src?: As;
  iconFill?: boolean;
  iconStroke?: boolean;
  description?: string;
}

const Empty = ({
  size = 'medium',
  iconFill = false,
  iconStroke = false,
  src,
  description = '',
}: EmptyProps) => {
  return (
    <Center flexDir={'column'} gap={'10px'}>
      {src && (
        <Icon
          as={src}
          stroke={iconStroke ? 'gray.200' : 'none'}
          fill={iconFill ? 'gray.200' : 'none'}
          alt="빈 값을 나타내는 아이콘"
          w={IMAGE_SIZE[size]}
          h={IMAGE_SIZE[size]}
        />
      )}
      <Text
        textAlign={'center'}
        fontSize={FONT_SIZE[size]}
        fontWeight={'semiBold'}
        color={'sub'}
      >
        {description}
      </Text>
    </Center>
  );
};

export default Empty;
