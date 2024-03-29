import { ComponentStyleConfig, defineStyleConfig } from '@chakra-ui/react';

const Button: ComponentStyleConfig = defineStyleConfig({
  baseStyle: {
    borderRadius: '10px',
    fontWeight: 'medium',
  },
});

export default Button;
