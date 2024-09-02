import { SystemStyleObject } from '@chakra-ui/react';

export const contentStyles: SystemStyleObject = {
  lineHeight: { mobile: '24px', tablet: '27px' },

  '*': {
    fontWeight: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
  },

  h1: { fontWeight: 'bold', fontSize: '20px' },
  h2: { fontWeight: 'semiBold', fontSize: '18px' },
  h3: { fontSize: '14px' },

  '.align-right': {
    textAlign: 'right',
  },
  '.align-center': {
    textAlign: 'center',
  },

  strong: { fontWeight: 'bold' },
  em: { fontStyle: 'italic' },
  u: { textDecoration: 'underline' },
};
