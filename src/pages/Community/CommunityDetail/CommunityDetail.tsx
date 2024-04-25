import { Box, Center, Heading } from '@chakra-ui/react';
import { PostList } from '@/components';
import CommentSection from './components/CommentSection';
import Content from './components/Content';
import Interaction from './components/Interaction';
import { DUMMY_POST } from '@/data/dummyData';

const CommunityDetail = () => {
  return (
    <Box
      maxW={1234}
      mx={'auto'}
      px={'20px'}
      pt={{ mobile: '20px', tablet: '40px' }}
    >
      <Content />
      <CommentSection />

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
        zIndex={3}
        borderTop={{ mobile: '1px solid', tablet: 'none' }}
        borderColor={'gray.100'}
      >
        <Interaction likeCount={7} commentCount={7} isLikeClick={false} />
      </Center>
    </Box>
  );
};

export default CommunityDetail;
