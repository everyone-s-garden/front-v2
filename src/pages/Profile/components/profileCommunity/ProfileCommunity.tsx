import { Flex } from '@chakra-ui/react';
import { PostList } from '@/components';
import { useGetPopularPosts } from '@/services/whisper/query';

const ProfileCommunity = () => {
  const { data: popularPosts } = useGetPopularPosts();

  if (!popularPosts) return;

  return (
    <Flex
      flexDir="column"
      gap={{ mobile: '24px', tablet: '36px' }}
      w={{ tablet: '886px' }}
      mb={{ tablet: '164px' }}
    >
      <PostList posts={popularPosts} />
      <PostList posts={popularPosts} />
      <PostList posts={popularPosts} />
      <PostList posts={popularPosts} />
      <PostList posts={popularPosts} />
    </Flex>
  );
};

export default ProfileCommunity;
