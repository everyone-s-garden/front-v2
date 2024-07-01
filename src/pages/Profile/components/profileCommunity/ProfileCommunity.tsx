import { Flex } from '@chakra-ui/react';
import { PostList } from '@/components';
import NoContent from '../noContent/NoContent';
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

  return (
    <Flex
      flexDir="column"
      gap={{ mobile: '24px', tablet: '36px' }}
      w={{ tablet: '886px' }}
      mb={{ tablet: '164px' }}
    >
      {popularPosts && popularPosts?.length !== 0 ? (
        <PostList posts={popularPosts} />
      ) : (
        <NoContent type="post" />
      )}
      <div ref={ref} />
    </Flex>
  );
};

export default ProfileCommunity;
