import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { PostList } from '@/components';
import { PostIcon } from '@/assets/icons';
import CommunityHeader from './components/CommunityHeader';
import Order from './components/Order';
import PostType from './components/PostType';
import Search from './components/Search';
import Empty from '@/components/Empty/Empty';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useGetAllPosts } from '@/services/whisper/query';
import { useWhisperStore } from '@/stores/whisperStore';

const CommunityMain = () => {
  const { data, fetchNextPage, hasNextPage } = useGetAllPosts();
  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {
      fetchNextPage();
    },
    hasNextPage,
  });
  const resetParams = useWhisperStore((state) => state.resetParams);

  useEffect(() => {
    resetParams();
  }, [resetParams]);

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
          {data && data.length > 0 ? (
            <PostList posts={data} />
          ) : (
            <Empty
              src={PostIcon}
              iconFill={false}
              iconStroke={false}
              size="large"
              description={`게시된 게시물이 없습니다.
              새로운 게시물을 업로드 해보세요 !`}
              py={{ mobile: '50px', tablet: '80px' }}
            />
          )}
          <div ref={ref} />
        </Box>
      </Box>
    </>
  );
};

export default CommunityMain;
