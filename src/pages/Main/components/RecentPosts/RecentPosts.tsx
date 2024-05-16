import { Box, Flex } from '@chakra-ui/react';
import ItemTitle from '../ItemTitle';
import RecentPostItem from './RecentPostItem';
import { useGetRecentGardenPosts } from '@/services/gardenPost/query';

const RecentPosts = () => {
  const { data: recentGardenPosts } = useGetRecentGardenPosts();

  if (!recentGardenPosts) {
    return null;
  }

  return (
    <Box px="20px">
      <Flex flexDir="column" m="0 auto" maxW="1194px">
        <ItemTitle>방금 등록된 따끈따끈한 게시글!</ItemTitle>
        <Flex
          gap={{ mobile: '12px', tablet: '30px' }}
          overflowY="auto"
          pb={{ mobile: '10px', tablet: '30px' }}
        >
          {recentGardenPosts.map((postData, idx) => (
            <RecentPostItem key={idx} postData={postData} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default RecentPosts;
