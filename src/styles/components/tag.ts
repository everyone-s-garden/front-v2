import {
  ComponentStyleConfig,
  StyleFunctionProps,
  defineStyleConfig,
} from '@chakra-ui/react';

const baseStyle = {
  color: 'black',
  fontWeight: 'medium',
  textAlign: 'center',
  width: 'fit-content',
};

const sizeVariants = {
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
};

const variantVariants = {
  whisper: {
    backgroundColor: 'orange.200',
    px: '11px',
    py: '8px',
  },
  faq: (props: StyleFunctionProps) => {
    const { progress } = props;

    return {
      backgroundColor: progress ? 'green.100' : 'orange.500',
      color: progress ? 'green.600' : 'white',
      px: '11px',
      py: '8px',
      borderRadius: '6px',
    };
  },
  userName: {
    backgroundColor: 'orange.500',
    borderRadius: '10px',
    color: 'white',
    fontWeight: 'semiBold',
    px: '10px',
    py: '4px',
  },
  facility: {
    border: '1px solid #414C38',
    borderRadius: '13px',
    px: '12px',
    py: '4px',
  },
  postState: {
    backgroundColor: 'white',
    border: '1px solid #AFAFAF',
    color: '#414C38',
    px: '10px',
    py: '6px',
    borderRadius: '8px',
  },
};

const defaultProps = {
  variant: 'whisper' as const,
  size: 'md' as const,
};

const TagStyleConfig: ComponentStyleConfig = defineStyleConfig({
  baseStyle,
  sizes: sizeVariants,
  variants: variantVariants,
  defaultProps,
});

export default TagStyleConfig;
