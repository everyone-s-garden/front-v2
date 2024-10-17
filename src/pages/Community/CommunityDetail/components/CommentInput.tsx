import { Flex, FlexProps, Input, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { AvatarComponent } from '@/components';
import { DUMMY_MY_INFO } from '@/data/dummyData';
import useLoginStore from '@/stores/useLoginStore';

interface CommentInputProps extends FlexProps {
  commentId?: number;
  autoFocus?: boolean;
  handleSubmitComment: (content: string, parentCommentId?: number) => void;
}

const CommentInput = ({
  commentId,
  autoFocus,
  handleSubmitComment,
  ...rest
}: CommentInputProps) => {
  const [focus, setFocus] = useState(false);
  const commentRef = useRef<HTMLInputElement>(null);

  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  // TODO: 등록 성공해야 빈 값 되도록 변경
  return (
    <Flex gap={{ mobile: '12px', tablet: '16px' }} align={'center'} {...rest}>
      <AvatarComponent
        src={DUMMY_MY_INFO.profile ?? ''}
        w={{ mobile: '36px', tablet: '44px' }}
        h={{ mobile: '36px', tablet: '44px' }}
      />
      <Flex
        h={{ mobile: '36px', tablet: '42px' }}
        px={{ mobile: '14px', tablet: '16px' }}
        py={{ mobile: '10px', tablet: '12px' }}
        borderRadius={'8px'}
        border={'1px solid'}
        borderColor={focus ? 'green.500' : 'gray.100'}
        flexGrow={1}
        align={'center'}
        gap={2}
      >
        <Input
          variant={'unstyled'}
          borderRadius={0}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          fontSize={{ mobile: '14px', tablet: '16px' }}
          fontWeight={'medium'}
          ref={commentRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
          autoFocus={autoFocus}
          disabled={!isLoggedIn}
          placeholder={
            isLoggedIn ? undefined : '로그인 후 댓글을 작성할 수 있습니다.'
          }
        />
        <Text
          fontSize={{ mobile: '14px', tablet: '16px' }}
          fontWeight={'medium'}
          color={'gray.400'}
          flexShrink={0}
          cursor={isLoggedIn ? 'pointer' : 'not-allowed'}
          onClick={() => {
            if (!isLoggedIn) return;

            handleSubmitComment(commentRef.current?.value ?? '', commentId);
            commentRef.current!.value = '';
          }}
        >
          입력
        </Text>
      </Flex>
    </Flex>
  );
};

export default CommentInput;
