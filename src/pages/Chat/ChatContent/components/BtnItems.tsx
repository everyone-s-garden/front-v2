import { Button, Flex } from '@chakra-ui/react';
import { ETCIcon } from '@/assets/icons';

const BtnItems = () => {
  return (
    <Flex w={{ mobile: '100%', tablet: 'auto' }} gap="10px">
      <Button
        variant="unstyled"
        display="flex"
        rounded="10px"
        fontSize="16px"
        fontWeight="semiBold"
        bg="orange.300"
        w="100%"
        p={{ mobile: '8px', tablet: '10px 24px' }}
      >
        후기 보내기
      </Button>
      <Button
        variant="unstyled"
        display={{ mobile: 'none', tablet: 'flex' }}
        bg="orange.300"
        p="10px"
      >
        <ETCIcon />
      </Button>
    </Flex>
  );
};

export default BtnItems;
