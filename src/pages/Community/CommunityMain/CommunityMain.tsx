import { Box } from '@chakra-ui/react';
import { PostList } from '@/components';
import CommunityHeader from './components/CommunityHeader';
import Order from './components/Order';
import PostType from './components/PostType';
import Search from './components/Search';
import { DUMMY_POST } from '@/data/dummyData';

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
          <PostList posts={DUMMY_POST} />
        </Box>
      </Box>
    </>
  );
};

export default CommunityMain;
