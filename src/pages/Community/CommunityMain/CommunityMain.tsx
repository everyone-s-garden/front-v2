import { Box } from '@chakra-ui/react';
import CommunityHeader from './components/CommunityHeader';
import OrderDropdown from './components/OrderDropdown';
import PostType from './components/PostType';
import Search from './components/Search';

const CommunityMain = () => {
  return (
    <>
      <CommunityHeader>
        <Search />
        <PostType />
      </CommunityHeader>

      <Box
        maxW={1194}
        mx={'auto'}
        pt={{ mobile: '20px', tablet: '70px' }}
        px={'20px'}
      >
        <OrderDropdown />
      </Box>
    </>
  );
};

export default CommunityMain;
