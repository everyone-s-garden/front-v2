import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface ContentProps {
  heightWithoutContent?: number;
}

const Content = ({
  heightWithoutContent = 0,
  children,
}: PropsWithChildren<ContentProps>) => {
  return (
    <Box
      overflow={'auto'}
      h={{
        mobile: `calc(100svh - ${heightWithoutContent}px)`,
        tablet: undefined,
      }}
    >
      {children}
    </Box>
  );
};

export default Content;
