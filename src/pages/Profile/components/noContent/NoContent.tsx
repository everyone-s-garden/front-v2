import { Flex, Icon, Text } from '@chakra-ui/react';
import { NoGardenIcon, NoPostIcon } from '@/assets/icons';

interface NoContentProps {
  type: 'garden' | 'post';
}

const NoContent = ({ type }: NoContentProps) => {
  const content = type === 'garden' ? '텃밭' : '글';
  const imgSrc = type === 'garden' ? NoGardenIcon : NoPostIcon;

  return (
    <Flex
      w="full"
      h={{ mobile: 'calc(100vh - 453px)', desktop: 'fit-content' }}
      left="0px"
      position={{ mobile: 'absolute', tablet: 'static' }}
      flexDir="column"
      gap={{ mobile: '16px', desktop: '24px' }}
      alignItems="center"
      justifyContent="center"
    >
      <Icon
        w={{ mobile: '54px', desktop: '88px' }}
        h={{ mobile: '54px', desktop: '88px' }}
        as={imgSrc}
      />
      <Text
        fontSize={{ mobile: '14px', desktop: '20px' }}
        fontWeight="semiBold"
        color="gray.500"
        textAlign="center"
      >
        등록된 {content}이 없습니다. <br /> 새로운 {content}을 등록해보세요 !
      </Text>
    </Flex>
  );
};

export default NoContent;
