import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components';

const Layout = () => {
  return (
    <Container maxW={'auto'} px={0}>
      <Box pos="sticky" top={0} bg="white" zIndex={10}>
        <Header />
      </Box>
      <Box
        overflow={'auto'}
        h={{
          mobile: 'calc(100svh - 100px)',
          tablet: 'calc(100svh - 108px)',
        }}
      >
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
