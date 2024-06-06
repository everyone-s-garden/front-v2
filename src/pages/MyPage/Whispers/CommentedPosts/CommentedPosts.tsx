import { List } from '@chakra-ui/react';
import WhisperItem from '../../components/WhisperItem';
import { whisperMockData } from '../../mockData';
import { useGetCommentedPosts } from '@/services/mypage/query';

const CommentedPosts = () => {
  const { data } = useGetCommentedPosts();

  if (!data) return;
  const postData = data.postInfos;
  if (postData.length === 0) return <h1>게시글이 없습니다.</h1>;
  return (
    <List w="full" px={{ mobile: '20px', tablet: '0px' }}>
      {whisperMockData.map((item, idx) => (
        <WhisperItem key={item.id} item={item} idx={idx} />
      ))}
    </List>
  );
};

export default CommentedPosts;
