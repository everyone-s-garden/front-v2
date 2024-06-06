import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components';
import useLoginStore from '@/stores/useLoginStore';

const HiddenHeaderLayout = () => {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  return (
    <Container maxW={'auto'} px={0}>
      <Box
        pos="sticky"
        top={0}
        bg="white"
        zIndex={10}
        display={{ mobile: 'none', tablet: 'block' }}
      >
        <Header loggedIn={isLoggedIn} />
      </Box>
      <Box
        h={{
          mobile: undefined,
          tablet: 'calc(100svh - 108px)',
        }}
      >
        <Outlet />
      </Box>
    </Container>
  );
};

export default HiddenHeaderLayout;
