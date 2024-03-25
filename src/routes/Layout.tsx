import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components';

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
