import { Box } from '@chakra-ui/react';
import CommunityHeader from './components/CommunityHeader';
import Order from './components/Order';
import PostList from './components/PostList';
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
        <Order />
        <Box
          mt={{ mobile: '20px', tablet: '27px' }}
          mb={{ mobile: '20px', tablet: '60px' }}
        >
          <PostList posts={[]} />
        </Box>
      </Box>
    </>
  );
};

export default CommunityMain;
