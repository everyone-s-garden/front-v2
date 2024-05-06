import { Box } from '@chakra-ui/react';
import { PostList } from '@/components';
import CommunityHeader from './components/CommunityHeader';
import Order from './components/Order';
import PostType from './components/PostType';
import Search from './components/Search';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useGetAllPosts } from '@/services/whisper/query';

const CommunityMain = () => {
  const { data, fetchNextPage, hasNextPage } = useGetAllPosts();
  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {
      fetchNextPage();
    },
    hasNextPage,
  });

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
          <PostList posts={data ?? []} />
          <div ref={ref} />
        </Box>
      </Box>
    </>
  );
};

export default CommunityMain;
