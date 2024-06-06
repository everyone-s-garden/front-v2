import { SystemStyleObject } from '@chakra-ui/react';

export const contentStyles: SystemStyleObject = {
  '.align-right': {
    textAlign: 'right',
  },
  '.align-center': {
    textAlign: 'center',
  },
  '*': {
    fontWeight: 'medium',
    lineHeight: '1.8',
    minH: '1.8em',
  },
  'h1, h1 *': {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  'h2, h2 *': {
    fontSize: '18px',
    fontWeight: 'semiBold',
  },
  'h3, h3 *': {
    fontSize: '14px',
    fontWeight: 'medium',
  },
  em: {
    fontStyle: 'italic',
  },
  strong: {
    fontWeight: 'bold',
  },
};
