import { Box, Center, Divider, Heading } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { PostList } from '@/components';
import CommentSection from './components/CommentSection';
import Content from './components/Content';
import Interaction from './components/Interaction';
import { DUMMY_POST } from '@/data/dummyData';
import { useGetPost } from '@/services/whisper/query';

const CommunityDetail = () => {
  const postId = useLocation().pathname.split('/').pop();
  const { data } = useGetPost(Number(postId));

  const commentRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

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
        <CommentSection ref={commentRef} />

        <Divider
          borderColor={'gray.100'}
          w={{ mobile: 'calc(100% + 40px)', tablet: 'auto' }}
          m={{ mobile: '24px -20px', tablet: '32px 0' }}
        />

        <Box mb={6}>
          <Heading
            as={'h1'}
            fontSize={{ mobile: '18px', tablet: '24px' }}
            mb={{ mobile: '16px', tablet: '24px' }}
          >
            지금 인기글을 소개합니다
          </Heading>
          <PostList posts={DUMMY_POST} />
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
            likeCount={data?.likeCount ?? 0}
            commentCount={data?.commentCount ?? 0}
            isLikeClick={false}
            handleClickComment={moveToComment}
          />
        </Center>
      </Box>
    </>
  );
};

export default CommunityDetail;
