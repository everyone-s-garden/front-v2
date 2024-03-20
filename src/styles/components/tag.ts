import {
  ComponentStyleConfig,
  StyleFunctionProps,
  defineStyleConfig,
} from '@chakra-ui/react';

const TagStyleConfig: ComponentStyleConfig = defineStyleConfig({
  baseStyle: {
    color: 'black',
    fontWeight: 'medium',
    textAlign: 'center',
    width: 'fit-content',
    fontSize: 16,
  },
  sizes: {
    sm: {
      px: '6px',
      py: '4px',
      borderRadius: '6px',
    },
    md: {
      px: '10px',
      py: '6px',
      borderRadius: '6px',
    },
    lg: {
      px: '10px',
      py: '6px',
      borderRadius: '8px',
    },
  },
  variants: {
    whisper: {
      backgroundColor: 'orange.200',
    },
    faq: (props: StyleFunctionProps) => {
      const { progress } = props;

      return {
        backgroundColor: progress ? 'green.100' : 'orange.500',
        color: progress ? 'green.600' : 'white',
      };
    },
    userName: {
      backgroundColor: 'orange.500',
      borderRadius: '12px',
      color: 'white',
    },
    facility: {
      border: '1px solid #414C38',
      borderRadius: '16.7px',
    },
    postState: {
      backgroundColor: 'white',
      border: '1px solid #AFAFAF',
      color: '#414C38',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'whisper',
  },
});

export default TagStyleConfig;
