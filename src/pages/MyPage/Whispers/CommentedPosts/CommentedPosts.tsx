import { List } from '@chakra-ui/react';
import NoContent from '../../components/NoContent';
import WhisperItem from '../../components/WhisperItem';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useGetCommentedPosts } from '@/services/mypage/query';

const CommentedPosts = () => {
  const { data, hasNextPage, fetchNextPage } = useGetCommentedPosts();
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
        content={`등록된 댓글이 없습니다.\n새로운 댓글을 등록해보세요!`}
      />
    );

  return (
    <List w="full">
      {data?.map((item, idx) => (
        <WhisperItem key={item.postId} item={item} idx={idx} />
      ))}

      <div ref={ref} />
    </List>
  );
};

export default CommentedPosts;
