import { Button, Center } from '@chakra-ui/react';

const SubmitButton = () => {
  return (
    <>
      <Center mb={'100px'}>
        <Button
          hideBelow={'tablet'}
          variant={'unstyled'}
          w={'344px'}
          h={'54px'}
          bg={'orange.500'}
          color={'white'}
          mt={'130px'}
          type="submit"
        >
          등록하기
        </Button>
      </Center>

      <Button
        hideFrom={'tablet'}
        variant={'unstyled'}
        w={'100%'}
        h={'60px'}
        position={'absolute'}
        bg={'orange.500'}
        bottom={0}
        color={'white'}
        borderRadius={0}
        type="submit"
      >
        등록하기
      </Button>
    </>
  );
};

export default SubmitButton;
