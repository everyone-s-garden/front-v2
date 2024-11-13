import { Flex, useMediaQuery } from '@chakra-ui/react';

import MainProfile from './components/MainProfile';
import MobilePanel from './components/MobilePanel';
import PcPanel from './components/PcPanel';
import { devices } from '@/styles/theme';

export default function MyPage() {
  const [isLargerThanTablet] = useMediaQuery(devices.tablet);

  return (
    <Flex
      justify="center"
      align="center"
      p="20px"
      maxW="1016px"
      flexDir="column"
      mt={{ mobile: '0', tablet: '20px' }}
      mx="auto"
      gap={{ mobile: '23px', tablet: '35px' }}
    >
      <MainProfile />
      {isLargerThanTablet ? <PcPanel /> : <MobilePanel />}
    </Flex>
  );
}
