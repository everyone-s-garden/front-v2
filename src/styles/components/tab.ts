import { ComponentStyleConfig, defineStyleConfig } from '@chakra-ui/react';

const Tabs: ComponentStyleConfig = defineStyleConfig({
  baseStyle: {
    tabs: {
      justifyContent: 'space-between',
      borderBottom: '2px solid',
      borderBottomColor: 'gray.200',
    },
    tab: {
      _selected: {
        fontWeight: 'semiBold',
        color: 'black',
      },
      color: 'gray.200',
      transition: 'none',
    },
  },
  defaultProps: {
    variant: 'orange',
  },
  variants: {
    orange: {},
    green: {},
  },
});

export default Tabs;
