import { Box, Show } from '@chakra-ui/react';

import MobileFooter from './MobileFooter';
import PcFooter from './PcFooter';

const Footer = () => {
  return (
    <Box bgColor={'#131313'} textColor={'white'}>
      <Show below="tablet">
        <MobileFooter />
      </Show>
      <Show above="tablet">
        <PcFooter />
      </Show>
    </Box>
  );
};

export default Footer;
