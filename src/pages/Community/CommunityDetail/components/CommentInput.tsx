import { Box, Flex, FlexProps, Input, Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 255) {
      e.target.value = e.target.value.slice(0, 255);
    }
    setValue(e.target.value);
  };

  // TODO: 등록 성공해야 빈 값 되도록 변경
  return (
    <Flex gap={{ mobile: '12px', tablet: '16px' }} align={'center'} {...rest}>
      <AvatarComponent
        src={userInfo?.profile ?? ''}
        w={{ mobile: '36px', tablet: '44px' }}
        h={{ mobile: '36px', tablet: '44px' }}
      />
      <Box
        w={'full'}
        h={{ mobile: '36px', tablet: '42px' }}
        position={'relative'}
      >
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
          maxLength={255}
          autoFocus={autoFocus}
          disabled={!isLoggedIn}
          placeholder={
            isLoggedIn ? undefined : '로그인 후 댓글을 작성할 수 있습니다.'
          }
          position={'absolute'}
          top={'0px'}
          left={'0px'}
          h={{ mobile: '36px', tablet: '42px' }}
          px={{ mobile: '14px', tablet: '16px' }}
          py={{ mobile: '10px', tablet: '12px' }}
          pr={{ mobile: '70px', tablet: '70px' }}
          borderRadius={'8px'}
          border={'1px solid'}
          borderColor={focus ? 'green.500' : 'gray.100'}
          flexGrow={1}
          value={value}
          onChange={handleChange}
        />
        <Text
          position={'absolute'}
          right={'12px'}
          top={'50%'}
          fontSize={'14px'}
          color={'gray.300'}
          fontWeight={'bold'}
          transform={'translateY(-50%)'}
        >{`${value.length}/255`}</Text>
      </Box>
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
