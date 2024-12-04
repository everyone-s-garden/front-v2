import { useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import MobileHeader from './MobileHeader';
import PcHeader from './PcHeader';
import { devices } from '@/styles/theme';

const Header = () => {
  const [isLargerThanTablet] = useMediaQuery(devices.tablet);
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
    <header>{isLargerThanTablet ? <PcHeader /> : <MobileHeader />}</header>
  );
};

export default Header;
