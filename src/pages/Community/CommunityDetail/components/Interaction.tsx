import { Box, Icon, IconButton, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { CommentIcon, HeartIcon, ShareIcon } from '@/assets/icons';

const Interaction = () => {
  const [heartClicked, setHeartClicked] = useState(false);
  const [heartCount, setHeartCount] = useState(7);

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
        />
        <Text fontSize={'12px'} fontWeight={'medium'} color={'sub'} minW={2}>
          7
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
      />
    </Box>
  );
};

export default Interaction;
