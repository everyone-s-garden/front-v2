import { Box, Center, Divider, Text } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { PostList } from '@/components';
import { ParagraphBoxIcon } from '@/assets/icons';
import CommentSection from './components/CommentSection';
import Content from './components/Content';
import Interaction from './components/Interaction';
import Empty from '@/components/Empty/Empty';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import {
  useCreateComment,
  useCreateLikeComment,
  useCreateLikePost,
  useDeleteLikeComment,
  useDeleteLikePost,
  useGetPopularPosts,
  useGetPost,
} from '@/services/whisper/query';

const CommunityDetail = () => {
  const postId = useLocation().pathname.split('/').pop();
  const { data: post } = useGetPost(Number(postId));
  const {
    data: popularPosts,
    fetchNextPage,
    hasNextPage,
  } = useGetPopularPosts();

  const { mutate: createComment } = useCreateComment();
  const { mutate: createLikePost } = useCreateLikePost();
  const { mutate: deleteLikePost } = useDeleteLikePost();
  const { mutate: createLikeComment } = useCreateLikeComment();
  const { mutate: deleteLikeComment } = useDeleteLikeComment();

  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {
      fetchNextPage();
    },
    hasNextPage,
  });

  const commentRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const handleClickLikePost = (isLike: boolean) => {
    if (isLike) {
      deleteLikePost(Number(postId));

      return;
    }

    createLikePost(Number(postId));
  };

  const handleClickLikeComment = (isLike: boolean, commentId: number) => {
    if (isLike) {
      deleteLikeComment(commentId);

      return;
    }

    createLikeComment(commentId);
  };

  const handleSubmitComment = (content: string, parentCommentId?: number) => {
    if (content.trim() === '') return;

    createComment({
      postId: Number(postId),
      content: content ?? '',
      parentCommentId: parentCommentId ?? null,
    });
  };

  const moveToComment = () => {
    commentRef.current?.scrollIntoView();
  };

  useEffect(() => {
    topRef.current?.scrollIntoView();
  }, [postId]);

  return (
    <>
      <div ref={topRef} />
      <Box
        maxW={1234}
        mx={'auto'}
        px={'20px'}
        pt={{ mobile: '20px', tablet: '40px' }}
      >
        <Content />
        <CommentSection
          ref={commentRef}
          handleClickLikeComment={handleClickLikeComment}
          handleSubmitComment={handleSubmitComment}
        />

        <Divider
          borderColor={'gray.100'}
          w={{ mobile: 'calc(100% + 40px)', tablet: 'auto' }}
          m={{ mobile: '24px -20px', tablet: '32px 0' }}
        />

        <Box mb={6}>
          <Text
            as={'h1'}
            fontSize={{ mobile: '18px', tablet: '24px' }}
            fontWeight={'bold'}
            mb={{ mobile: '16px', tablet: '24px' }}
          >
            지금 인기글을 소개합니다
          </Text>
          {popularPosts && popularPosts.length > 0 ? (
            <PostList posts={popularPosts} />
          ) : (
            <Empty
              src={ParagraphBoxIcon}
              iconFill={true}
              description={`인기글이 없습니다.
              글을 작성하여 인기글이 되어보세요 !`}
              py={{ mobile: '50px', tablet: '150px' }}
            />
          )}
        </Box>

        <Center
          w={{ mobile: 'calc(100% + 40px)', tablet: 'auto' }}
          m={{ mobile: '0 0 0 -20px', tablet: '24px auto 24px auto' }}
          pt={{ mobile: '17px', tablet: 0 }}
          pb={{ mobile: '35px', tablet: 0 }}
          pos={{ mobile: 'sticky', tablet: 'fixed' }}
          bg={{ mobile: 'white', tablet: 'none' }}
          bottom={{ mobile: 0, tablet: 'auto' }}
          top={{ mobile: 'auto', tablet: '50%' }}
          right={{ mobile: 'auto', tablet: '5%' }}
          zIndex={10}
          borderTop={{ mobile: '1px solid', tablet: 'none' }}
          borderColor={'gray.100'}
        >
          <Interaction
            likeCount={post?.likeCount ?? 0}
            commentCount={post?.commentCount ?? 0}
            isLikeClick={post?.isLikeClick ?? false}
            handleClickLikePost={handleClickLikePost}
            handleClickComment={moveToComment}
          />
        </Center>
      </Box>
      <div ref={ref} />
    </>
  );
};

export default CommunityDetail;
