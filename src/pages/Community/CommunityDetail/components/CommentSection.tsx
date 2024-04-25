import { Box, BoxProps, Flex, List, Text } from '@chakra-ui/react';
import { forwardRef } from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import CommentOrder from './CommentOrder';
import { DUMMY_COMMENT } from '@/data/dummyData';

const CommentSection = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  {
    return (
      <Box mb={{ mobile: '24px', tablet: '32px' }} {...props} ref={ref}>
        <CommentInput mt={'24px'} mb={{ mobile: '22px', tablet: '28px' }} />
        <Flex justify={'space-between'} align={'center'}>
          <Text
            fontWeight={'medium'}
            color={'sub'}
            fontSize={{ mobile: '14px', tablet: '16px' }}
          >
            댓글 {DUMMY_COMMENT.parents.length}
          </Text>
          <CommentOrder />
        </Flex>

        <List display={'flex'} flexDir={'column'} gap={'30px'} mt={'14px'}>
          {DUMMY_COMMENT.parents.map((comment) => (
            <Comment {...comment} key={comment.commentId} />
          ))}
        </List>
      </Box>
    );
  }
});

export default CommentSection;
