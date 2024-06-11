import { Box, Button, Flex, Image, ListItem, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AvatarComponent, TagComponent } from '@/components';
import {
  GardenImageDefaultIcon,
  HeartUnfiledIcon,
  TextBubbleBlackIcon,
} from '@/assets/icons';
import { IWhipser } from '../type';
import MenuButton from './MenuButton';
import MobileCheckbox from './MobileCheckbox';
import Overlay from './Overlay';

interface WhisperProps {
  item: IWhipser;
  menu?: boolean;
  checkboxOpen?: boolean;
  idx: number;
}

const WhisperItem = ({ item, menu, checkboxOpen, idx }: WhisperProps) => {
  // eslint-disable-next-line
  const [report] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const handleCheckbox = (idx: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };
  useEffect(() => {
    if (!checkboxOpen) {
      setCheckedItems({});
    }
  }, [checkboxOpen]);

  return (
    <ListItem
      display="flex"
      pb={{ mobile: '0', tablet: '28px' }}
      borderBottom={{ mobile: 'none', tablet: '1px solid' }}
      borderColor={{ mobile: 'white', tablet: 'gray.100' }}
      flexDir={{ mobile: 'row-reverse', tablet: 'row' }}
      mt={{ mobile: '16px', tablet: '0' }}
      mb={{ mobile: '24px', tablet: '28px' }}
    >
      <Box>
        <Flex align="center" mb={{ mobile: '8px', tablet: '12px' }}>
          <Box display={{ mobile: 'none', tablet: 'block' }}>
            <TagComponent tagLabel="텃밭 자랑" />
          </Box>
          <Text
            fontSize="16px"
            fontWeight="semiBold"
            ml={{ mobile: '0', tablet: '12px' }}
            lineHeight={{ mobile: '24px' }}
          >
            {item.title}
          </Text>
        </Flex>
        <Text display={{ mobile: 'none', tablet: 'inline' }} mb="8px">
          {item.payload}
        </Text>
        <Flex align="center" mb={{ mobile: '8px', tablet: '0' }} mt="8px">
          <Box w="24px" h="24px">
            <AvatarComponent src={item?.userProfile || undefined} size="full" />
          </Box>
          <Text ml="8px" mr="10px">
            {item.userName}
          </Text>
          <HeartUnfiledIcon />
          <Text ml="6px" mr="10px">
            {item.likeCount}
          </Text>
          <TextBubbleBlackIcon />
          <Text ml="6px">{item.commentCount}</Text>
        </Flex>
        <Text
          color="error"
          fontSize={{ mobile: '14px', tablet: '16px' }}
          fontWeight="medium"
          opacity={report ? 1 : 0}
          mb="8px"
        >
          신고가 접수된 게시글 입니다.
        </Text>
        <Button
          display={{ mobile: 'block', tablet: 'none' }}
          bg="green.500"
          color="white"
          w="full"
          _hover={{ bg: 'green.500' }}
        >
          수정하기
        </Button>
      </Box>
      <Box
        w={{ mobile: '114px', tablet: '132px' }}
        h={{ mobile: '118px', tablet: '132px' }}
        minW={{ mobile: '114px', tablet: '132px' }}
        minH={{ mobile: '118px', tablet: '132px' }}
        borderRadius="10px"
        ml={{ mobile: '0', tablet: '22px' }}
        display={{
          mobile: 'block',
          tablet: item.thumbnail ? 'block' : 'none',
        }}
        mr={{ mobile: '13px', tablet: '0' }}
        position="relative"
      >
        <Overlay report={report} />
        <MobileCheckbox
          handleCheckbox={handleCheckbox}
          id={item.id}
          checkedItems={checkedItems}
          checkboxOpen={checkboxOpen}
        />
        {item.thumbnail ? (
          <Image
            w="full"
            h="full"
            objectFit="cover"
            src={item.thumbnail}
            borderRadius="10px"
          />
        ) : (
          <GardenImageDefaultIcon />
        )}
      </Box>
      {menu && <MenuButton itemId={item.id} ml="26px" />}
    </ListItem>
  );
};

export default WhisperItem;
