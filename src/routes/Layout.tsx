import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components';
import { HEADER_HEIGHT } from '@/components/Header/constants';

const Layout = () => {
  return (
    <>
      <Header />
      <Box
        pt={{
          tablet: HEADER_HEIGHT.PC + 'px',
          mobile: HEADER_HEIGHT.MOBILE_NAV + 'px',
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
