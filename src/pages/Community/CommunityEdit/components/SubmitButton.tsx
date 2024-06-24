import { Box, Button } from '@chakra-ui/react';

interface SubmitButtonProps {
  isPending?: boolean;
}

const SubmitButton = ({ isPending = false }: SubmitButtonProps) => {
  return (
    <Box display={{ mobile: 'block', tablet: 'flex' }}>
      <Button
        variant={'unstyled'}
        pos={{ mobile: 'fixed', tablet: 'static' }}
        bottom={0}
        w={{ mobile: '100%', tablet: '344px' }}
        h={{ mobile: '60px', tablet: '54px' }}
        m={{ mobile: 0, tablet: '50px auto 100px auto' }}
        borderRadius={{ mobile: '0', tablet: '10px' }}
        bg={'orange.500'}
        fontWeight={'semiBold'}
        color={'white'}
        type={'submit'}
        isLoading={isPending}
        display={'flex'}
      >
        등록하기
      </Button>
    </Box>
  );
};

export default SubmitButton;
