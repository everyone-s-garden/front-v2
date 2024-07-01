import { Flex } from '@chakra-ui/react';
import { PostList } from '@/components';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useGetProfilePosts } from '@/services/whisper/query';

interface ProfileCommunityProps {
  userId: string;
}

const ProfileCommunity = ({ userId }: ProfileCommunityProps) => {
  const {
    data: popularPosts,
    fetchNextPage,
    hasNextPage,
  } = useGetProfilePosts(userId);

  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {
      fetchNextPage();
    },
    hasNextPage,
  });

  if (!popularPosts) return;

  return (
    <Flex
      flexDir="column"
      gap={{ mobile: '24px', tablet: '36px' }}
      w={{ tablet: '886px' }}
      mb={{ tablet: '164px' }}
    >
      <PostList posts={popularPosts} />
      <div ref={ref} />
    </Flex>
  );
};

export default ProfileCommunity;
