import { List } from '@chakra-ui/react';
import NoContent from '../../components/NoContent';
import WhisperItem from '../../components/WhisperItem';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useGetWhisperLikePosts } from '@/services/mypage/query';

const LikedPosts = () => {
  const { data, hasNextPage, fetchNextPage } = useGetWhisperLikePosts();
  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {
      fetchNextPage();
    },
    hasNextPage,
  });

  if (!data) return;

  if (data.length === 0)
    return (
      <NoContent
        content={`좋아요 누른 글이 없습니다.\n적극적으로 참여해보세요!`}
      />
    );

  return (
    <List w="full">
      {data?.map((item, idx) => (
        <WhisperItem key={item.postId} item={item} idx={idx} />
      ))}

      <div style={{ height: 100 }} ref={ref} />
    </List>
  );
};

export default LikedPosts;
