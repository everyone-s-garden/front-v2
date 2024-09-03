import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components';
import { HEADER_HEIGHT } from '@/components/Header/constants';

const Layout = () => {
  return (
    <>
      <Header />
      <Box pt={HEADER_HEIGHT.PC}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
