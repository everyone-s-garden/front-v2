import { useMediaQuery } from '@chakra-ui/react';
import MobileHeader from './MobileHeader';
import PcHeader from './PcHeader';
import { devices } from '@/styles/theme';

const Header = ({ loggedIn = false }) => {
  const [isLargerThanTablet] = useMediaQuery(devices.tablet);

  return (
    <header>
      {isLargerThanTablet ? (
        <PcHeader loggedIn={loggedIn} />
      ) : (
        <MobileHeader loggedIn={loggedIn} />
      )}
    </header>
  );
};

export default Header;
