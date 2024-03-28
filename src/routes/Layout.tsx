import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components';

const Layout = () => {
  return (
    <Container minH={'100svh'} maxW={'auto'} px={0}>
      <Box pos="sticky" top={0} bg="white" zIndex={10}>
        <Header />
      </Box>
      <Outlet />
    </Container>
  );
};

export default Layout;
