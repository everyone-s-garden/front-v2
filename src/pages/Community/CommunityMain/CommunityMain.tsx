import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { MobilePostMenu, PostList } from '@/components';
import { PostBoxIcon } from '@/assets/icons';
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
              src={PostBoxIcon}
              iconFill={false}
              iconStroke={false}
              size="large"
              description={`등록된 글이 없습니다.
              새로운 글을 등록해보세요 !`}
              py={{ mobile: '50px', tablet: '80px' }}
            />
          )}
          <div ref={ref} />
        </Box>
      </Box>

      <MobilePostMenu
        pos={'absolute'}
        hideFrom={'tablet'}
        bottom={'160px'}
        right={'20px'}
      />
    </>
  );
};

export default CommunityMain;
