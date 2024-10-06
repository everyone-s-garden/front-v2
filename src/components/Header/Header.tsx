import { useMediaQuery } from '@chakra-ui/react';
import MobileHeader from './MobileHeader';
import PcHeader from './PcHeader';
import { devices } from '@/styles/theme';

const Header = () => {
  const [isLargerThanTablet] = useMediaQuery(devices.tablet);

  return (
    <header>{isLargerThanTablet ? <PcHeader /> : <MobileHeader />}</header>
  );
};

export default Header;
