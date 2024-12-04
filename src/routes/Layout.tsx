import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components';
import { HEADER_HEIGHT } from '@/components/Header/constants';
import UserFeedbackFab from '@/components/UserFeedbackFab/UserFeedbackFab';

const Layout = () => {
  const [initialized, setInitialized] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_TRAKING_ID);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: location.pathname });
      ReactGA.send('pageview');
    }
  }, [initialized, location]);

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
