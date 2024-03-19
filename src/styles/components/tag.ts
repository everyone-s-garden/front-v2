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
      px: 6,
      py: 4,
      borderRadius: 6,
    },
    md: {
      px: 10,
      py: 6,
      borderRadius: 6,
    },
    lg: {
      px: 10,
      py: 6,
      borderRadius: 8,
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
      borderRadius: 12,
      color: 'white',
    },
    facility: {
      border: '1px solid #414C38',
      borderRadius: 16.7,
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
