import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components';
import { HEADER_HEIGHT } from '@/components/Header/constants';
import UserFeedbackFab from '@/components/UserFeedbackFab/UserFeedbackFab';
import useLoginStore from '@/stores/useLoginStore';

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
      <UserFeedbackFab />
    </>
  );
};

export default Layout;
