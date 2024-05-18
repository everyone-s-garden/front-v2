import { Box, Container } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components';
import { PATH } from './constants';

const Layout = () => {
  const location = useLocation();

  return (
    <Container minH={'100svh'} maxW={'auto'} px={0}>
      <Box
        pos={location.pathname === PATH.MAP.MAIN ? 'static' : 'sticky'}
        top={0}
        bg="white"
        zIndex={10}
      >
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
