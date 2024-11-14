import { Flex, FlexProps, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { AvatarComponent } from '@/components';
import { User } from '../../types';
import useLoginStore from '@/stores/useLoginStore';

interface CommentInputProps extends FlexProps {
  commentId?: number;
  autoFocus?: boolean;
  handleSubmitComment: (content: string, parentCommentId?: number) => void;
  userInfo?: User;
}

const CommentInput = ({
  commentId,
  autoFocus,
  handleSubmitComment,
  userInfo,
  ...rest
}: CommentInputProps) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');

  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  // TODO: 등록 성공해야 빈 값 되도록 변경
  return (
    <Flex gap={{ mobile: '12px', tablet: '16px' }} align={'center'} {...rest}>
      <AvatarComponent
        src={userInfo?.profile ?? ''}
        w={{ mobile: '36px', tablet: '44px' }}
        h={{ mobile: '36px', tablet: '44px' }}
      />
      <Input
        variant={'unstyled'}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        fontSize={{ mobile: '14px', tablet: '16px' }}
        fontWeight={'medium'}
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
        h={{ mobile: '36px', tablet: '42px' }}
        px={{ mobile: '14px', tablet: '16px' }}
        py={{ mobile: '10px', tablet: '12px' }}
        borderRadius={'8px'}
        border={'1px solid'}
        borderColor={focus ? 'green.500' : 'gray.100'}
        flexGrow={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Text
        h={{ mobile: '36px', tablet: '42px' }}
        w={{ mobile: '60px', tablet: '72px' }}
        borderRadius={'8px'}
        bgColor={value ? 'green.500' : 'gray.100'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        fontSize={{ mobile: '14px', tablet: '16px' }}
        fontWeight={'medium'}
        color={value ? 'white' : 'gray.400'}
        flexShrink={0}
        cursor={isLoggedIn ? 'pointer' : 'not-allowed'}
        onClick={() => {
          if (!isLoggedIn) return;

          handleSubmitComment(value ?? '', commentId);
          setValue('');
        }}
      >
        입력
      </Text>
    </Flex>
  );
};

export default CommentInput;
