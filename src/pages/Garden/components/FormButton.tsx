import { Button } from '@chakra-ui/react';

interface FormButtonProps {
  activeState?: boolean;
  label?: string;
  onClick?: () => void;
}

const FormButton = ({
  activeState = false,
  label = '',
  onClick,
}: FormButtonProps) => {
  return (
    <Button
      p={'8px 10px'}
      fontWeight={'medium'}
      color={activeState ? 'black' : 'gray.300'}
      bg={activeState ? 'green.100' : 'white'}
      border={'1px solid'}
      borderColor={activeState ? 'green.500' : 'gray.100'}
      variant={'unstyled'}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default FormButton;
