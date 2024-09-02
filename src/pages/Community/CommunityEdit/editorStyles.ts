import { SystemStyleObject } from '@chakra-ui/react';

const editorStyle: SystemStyleObject = {
  '.tiptap': {
    h: {
      mobile: 'calc(100svh - 480px)',
      tablet: '554px',
    },
    overflow: 'auto',

    lineHeight: { mobile: '24px', tablet: '27px' },

    '&:focus': {
      outline: 'none',
    },

    '*': {
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
    },

    h1: { fontWeight: 'bold', fontSize: '20px' },
    h2: { fontWeight: 'semiBold', fontSize: '18px' },
    h3: { fontSize: '14px' },

    strong: { fontWeight: 'bold' },
    em: { fontStyle: 'italic' },
    u: { textDecoration: 'underline' },

    'p.is-editor-empty:first-of-type::before': {
      color: 'gray.300',
      content: 'attr(data-placeholder)',
      float: 'left',
      height: 0,
      pointerEvents: 'none',
    },
  },
};

const styles = { ...editorStyle };

export default styles;
