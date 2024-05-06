import { Box, BoxProps, Flex, List, Text } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { useLocation } from 'react-router';
import Comment from './Comment';
import CommentInput from './CommentInput';
import CommentOrder from './CommentOrder';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useGetComments, useGetPost } from '@/services/whisper/query';

const CommentSection = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const postId = useLocation().pathname.split('/').pop();
  const { data, fetchNextPage, hasNextPage } = useGetComments(Number(postId));
  const { ref: commentRef } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {
      fetchNextPage();
    },
    hasNextPage,
  });
  const { data: post } = useGetPost(Number(postId));

  return (
    <Box mb={{ mobile: '24px', tablet: '32px' }} {...props} ref={ref}>
      <CommentInput mt={'24px'} mb={{ mobile: '22px', tablet: '28px' }} />
      <Flex justify={'space-between'} align={'center'}>
        <Text
          fontWeight={'medium'}
          color={'sub'}
          fontSize={{ mobile: '14px', tablet: '16px' }}
        >
          댓글 {post?.commentCount || 0}
        </Text>
        <CommentOrder />
      </Flex>

      <List display={'flex'} flexDir={'column'} gap={'30px'} mt={'14px'}>
        {data?.map((comment) => (
          <Comment {...comment} key={comment.commentId} />
        ))}
      </List>
      <div ref={commentRef} />
    </Box>
  );
});

export default CommentSection;
