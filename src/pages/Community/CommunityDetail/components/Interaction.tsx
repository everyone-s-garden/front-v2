import {
  Box,
  BoxProps,
  Center,
  Icon,
  IconButton,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { CommentIcon, HeartIcon, ShareIcon } from '@/assets/icons';
import useClipboard from '@/hooks/useClipboard';

interface InteractionProps extends BoxProps {
  likeCount: number;
  commentCount: number;
  isLikeClick: boolean;
  handleClickLikePost: (isLike: boolean) => void;
  handleClickComment: () => void;
}

const Interaction = ({
  likeCount,
  commentCount,
  isLikeClick,
  handleClickLikePost,
  handleClickComment,
  ...rest
}: InteractionProps) => {
  const { isCopied, onCopy } = useClipboard();
  const toast = useToast();

  useEffect(() => {
    if (isCopied) {
      toast({
        position: 'top',
        duration: 1000,
        containerStyle: {
          marginTop: '20px',
        },
        render: () => (
          <Center
            color="white"
            px={'30px'}
            py={'10px'}
            w={'fit-content'}
            mx={'auto'}
            bg="green.500"
            borderRadius={'10px'}
          >
            링크가 복사되었습니다.
          </Center>
        ),
      });
    }
  }, [isCopied, toast]);

  return (
    <>
      <Box
        py={{ mobile: '0', tablet: '30px' }}
        px={{ mobile: '0', tablet: '10px' }}
        bg={{ mobile: 'none', tablet: 'rgba(240, 240, 240, 0.8)' }}
        borderRadius={'20px'}
        w={{ mobile: 'auto', tablet: 'fit-content' }}
        display={'flex'}
        flexDir={{ mobile: 'row', tablet: 'column' }}
        gap={{ mobile: '30px', tablet: '18px' }}
        alignItems={'center'}
        {...rest}
      >
        <Box
          display={'flex'}
          flexDir={{ mobile: 'row', tablet: 'column' }}
          gap={{ mobile: '12px', tablet: '6px' }}
          alignItems={'center'}
        >
          <IconButton
            aria-label="좋아요 버튼"
            icon={
              <Icon
                as={HeartIcon}
                fill={isLikeClick ? 'green.500' : 'none'}
                stroke={isLikeClick ? 'green.500' : 'gray.200'}
                strokeWidth={2}
                w={'24px'}
                h={'24px'}
              />
            }
            w={'48px'}
            h={'48px'}
            bg={'white'}
            borderRadius={'50%'}
            variant={'unstyled'}
            display={'flex'}
            shadow={'md'}
            onClick={() => handleClickLikePost(isLikeClick)}
          />
          <Text fontSize={'12px'} fontWeight={'medium'} color={'sub'} minW={2}>
            {likeCount}
          </Text>
        </Box>

        <Box
          display={'flex'}
          flexDir={{ mobile: 'row', tablet: 'column' }}
          gap={{ mobile: '12px', tablet: '6px' }}
          alignItems={'center'}
        >
          <IconButton
            aria-label="댓글로 이동"
            icon={
              <Icon as={CommentIcon} fill={'green.500'} w={'24px'} h={'24px'} />
            }
            w={'48px'}
            h={'48px'}
            bg={'white'}
            borderRadius={'50%'}
            variant={'unstyled'}
            display={'flex'}
            shadow={'md'}
            onClick={handleClickComment}
          />
          <Text fontSize={'12px'} fontWeight={'medium'} color={'sub'} minW={2}>
            {commentCount}
          </Text>
        </Box>

        <IconButton
          aria-label="공유하기 버튼"
          icon={
            <Icon
              as={ShareIcon}
              fill={'none'}
              stroke={'green.500'}
              w={'24px'}
              h={'24px'}
            />
          }
          w={'48px'}
          h={'48px'}
          bg={'white'}
          borderRadius={'50%'}
          variant={'unstyled'}
          display={'flex'}
          shadow={'md'}
          onClick={() => onCopy(window.location.href)}
        />
      </Box>
    </>
  );
};

export default Interaction;
