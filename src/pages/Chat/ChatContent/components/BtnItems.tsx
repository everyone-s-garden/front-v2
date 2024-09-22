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
        bg="green.300"
        border="1px solid"
        borderColor="green.500"
        w="100%"
        p={{ mobile: '8px', tablet: '0px 24px' }}
        justifyContent="center"
        alignItems="center"
      >
        후기 보내기
      </Button>
      <Button
        variant="unstyled"
        display={{ mobile: 'none', tablet: 'flex' }}
        bg="gray.200"
        p="10px"
      >
        <ETCIcon />
      </Button>
    </Flex>
  );
};

export default BtnItems;
