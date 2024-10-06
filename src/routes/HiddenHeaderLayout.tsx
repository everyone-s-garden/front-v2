import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components';
import { HEADER_HEIGHT } from '@/components/Header/constants';

const HiddenHeaderLayout = () => {
  return (
    <>
      <Box display={{ mobile: 'none', tablet: 'block' }}>
        <Header />
      </Box>
      <Box
        pt={{
          tablet: HEADER_HEIGHT.PC + 'px',
          mobile: 0,
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default HiddenHeaderLayout;
