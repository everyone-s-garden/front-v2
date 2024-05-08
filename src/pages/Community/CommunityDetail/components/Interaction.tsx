import { Box, BoxProps, Icon, IconButton, Text } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { CommentIcon, HeartIcon, ShareIcon } from '@/assets/icons';

interface InteractionProps extends BoxProps {
  likeCount: number;
  commentCount: number;
  isLikeClick: boolean;
  handleClickComment: () => void;
}

const Interaction = ({
  likeCount,
  commentCount,
  isLikeClick,
  handleClickComment,
  ...rest
}: InteractionProps) => {
  const [heartClicked, setHeartClicked] = useState(isLikeClick);
  const [heartCount, setHeartCount] = useState(likeCount);

  const handleClickShare = useCallback(() => {
    if (!navigator.canShare()) {
      alert('이 브라우저에서는 공유 기능을 지원하지 않습니다.');

      return;
    }

    navigator
      .share({
        title: '모두의 텃밭 속닥속닥',
        url: window.location.href,
      })
      .then(() => console.log('공유 성공'))
      .catch((error) => console.error('공유 실패: ', error));
  }, []);

  return (
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
              fill={heartClicked ? 'orange.500' : 'none'}
              stroke={heartClicked ? 'orange.500' : 'gray.200'}
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
          onClick={() => {
            setHeartClicked(!heartClicked);
            setHeartCount(heartClicked ? heartCount - 1 : heartCount + 1);
          }}
        />
        <Text fontSize={'12px'} fontWeight={'medium'} color={'sub'} minW={2}>
          {heartCount}
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
        onClick={handleClickShare}
      />
    </Box>
  );
};

export default Interaction;
