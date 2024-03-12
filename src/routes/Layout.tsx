import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

const Layout = () => {
  return (
    <>
      <Box pos="sticky" top={0} bg="white">
        <Header />
      </Box>

      <Outlet />
    </>
  );
};

export default Layout;
