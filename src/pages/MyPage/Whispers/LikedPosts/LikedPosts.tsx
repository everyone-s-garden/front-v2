import { List } from '@chakra-ui/react';
import WhisperItem from '../../components/WhisperItem';
import { useGetWhisperLikePosts } from '@/services/mypage/query';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

const LikedPosts = () => {
  const { data, hasNextPage, fetchNextPage } = useGetWhisperLikePosts();
  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {
      fetchNextPage();
    },
    hasNextPage,
  });

  if (!data) return;

  if (data.length === 0) return <h1>게시글이 존재하지 않습니다.</h1>;
  console.log(data);

  return (
    <List w="full" px={{ mobile: '20px', tablet: '0px' }}>
      {data?.map((item, idx) => (
        <WhisperItem key={item.postId} item={item} idx={idx} />
      ))}

      <div style={{ height: 100 }} ref={ref} />
    </List>
  );
};

export default LikedPosts;
