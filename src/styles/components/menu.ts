import {
  ComponentStyleConfig,
  StyleFunctionProps,
  defineStyleConfig,
} from '@chakra-ui/react';

const Menu: ComponentStyleConfig = defineStyleConfig({
  baseStyle: {
    list: {
      borderRadius: 10,
      border: '1px solid',
      borderColor: 'gray.200',
      padding: 0,
      zIndex: 2,
    },
    item: {
      color: 'black',
      _hover: {
        bg: 'green.100',
      },
      bg: 'white',
      p: '20px',
      _notLast: {
        borderBottom: '1px solid',
        borderBottomColor: 'gray.200',
      },
      _first: {
        borderTopRadius: 10,
      },
      _last: {
        borderBottomRadius: 10,
      },
    },
  },
  variants: {
    shadow: (props: StyleFunctionProps) => ({
      list: {
        boxShadow: 'md',
      },
      item: {
        _hover: {
          bg: props.colorScheme + '.100',
        },
      },
    }),
    none: (props: StyleFunctionProps) => ({
      item: {
        _hover: {
          bg: props.colorScheme + '.100',
        },
      },
    }),
  },
  defaultProps: {
    colorScheme: 'green',
  },
});

export default Menu;
