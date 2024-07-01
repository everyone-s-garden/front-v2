import { Flex } from '@chakra-ui/react';
import { PostList } from '@/components';
import { useGetProfilePosts } from '@/services/whisper/query';

interface ProfileCommunityProps {
  userId: string;
}

const ProfileCommunity = ({ userId }: ProfileCommunityProps) => {
  const { data: popularPosts } = useGetProfilePosts(userId);

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
