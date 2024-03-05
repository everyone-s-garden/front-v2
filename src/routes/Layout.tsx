import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

const Layout = () => {
  return (
    <>
      <Container pos="sticky" top={0} bg="white">
        <Header />
      </Container>

      <Outlet />
    </>
  );
};

export default Layout;
