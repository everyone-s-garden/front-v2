import { Box, BoxProps, Flex, List, Text } from '@chakra-ui/react';
import { forwardRef, useEffect } from 'react';
import { useLocation } from 'react-router';
import { CommentIcon } from '@/assets/icons';
import Comment from './Comment';
import CommentInput from './CommentInput';
import CommentOrder from './CommentOrder';
import Empty from '@/components/Empty/Empty';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useGetComments, useGetPost } from '@/services/whisper/query';
import { useWhisperStore } from '@/stores/whisperStore';

interface CommentSectionProps extends BoxProps {
  handleClickLikeComment: (commentId: number) => void;
  handleSubmitComment: (content: string, parentCommentId?: number) => void;
}

const CommentSection = forwardRef<HTMLDivElement, CommentSectionProps>(
  ({ handleClickLikeComment, handleSubmitComment, ...rest }, ref) => {
    const postId = useLocation().pathname.split('/').pop();
    const { data, fetchNextPage, hasNextPage } = useGetComments(Number(postId));
    const { data: post } = useGetPost(Number(postId));

    const { ref: commentRef } = useInfiniteScroll<HTMLDivElement>({
      fetchData: () => {
        fetchNextPage();
      },
      hasNextPage,
    });

    const resetCommentsParam = useWhisperStore(
      (state) => state.resetCommentsParam,
    );

    useEffect(() => {
      resetCommentsParam();
    }, [resetCommentsParam, postId]);

    return (
      <Box mb={{ mobile: '24px', tablet: '32px' }} {...rest} ref={ref}>
        <CommentInput
          mt={'24px'}
          mb={{ mobile: '22px', tablet: '28px' }}
          handleSubmitComment={handleSubmitComment}
        />
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
          {data && data.length > 0 ? (
            data.map((comment) => (
              <Comment
                {...comment}
                handleClickLikeComment={handleClickLikeComment}
                handleSubmitComment={handleSubmitComment}
                key={comment.commentId}
              />
            ))
          ) : (
            <Empty
              description={`아직 댓글이 없습니다.
      댓글을 남겨보세요.`}
              src={CommentIcon}
              size="small"
              iconFill={true}
              py={'40px'}
            />
          )}
        </List>
        <div ref={commentRef} />
      </Box>
    );
  },
);

export default CommentSection;
