import { List } from '@chakra-ui/react';
import WhisperItem from '../../components/WhisperItem';
import { useGetCommentedPosts } from '@/services/mypage/query';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

const CommentedPosts = () => {
  const { data, hasNextPage, fetchNextPage } = useGetCommentedPosts();
  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {
      fetchNextPage();
    },
    hasNextPage,
  });

  if (!data) return;

  if (data.length === 0) return <h1>게시글이 존재하지 않습니다.</h1>;
  return (
    <List w="full" maxW={'100%'} px={{ mobile: '20px', tablet: '0px' }}>
      {data?.map((item, idx) => (
        <WhisperItem key={item.postId} item={item} idx={idx} />
      ))}

      <div ref={ref} />
    </List>
  );
};

export default CommentedPosts;
