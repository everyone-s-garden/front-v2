import { Flex, FlexProps, Input, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { AvatarComponent } from '@/components';
import { DUMMY_MY_INFO } from '@/data/dummyData';

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
        borderColor={focus ? 'orange.500' : 'gray.100'}
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
            e.key === 'Enter' &&
              handleSubmitComment(commentRef.current?.value ?? '', commentId);
          }}
          autoFocus={autoFocus}
        />
        <Text
          fontSize={{ mobile: '14px', tablet: '16px' }}
          fontWeight={'medium'}
          color={'gray.400'}
          flexShrink={0}
          cursor={'pointer'}
          onClick={() =>
            handleSubmitComment(commentRef.current?.value ?? '', commentId)
          }
        >
          입력
        </Text>
      </Flex>
    </Flex>
  );
};

export default CommentInput;
