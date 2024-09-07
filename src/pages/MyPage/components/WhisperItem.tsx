import { Box, Flex, Image, ListItem, Text } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AvatarComponent, BottomMenu, TagComponent } from '@/components';
import {
  GardenImageDefaultIcon,
  HeartUnfiledIcon,
  TextBubbleBlackIcon,
} from '@/assets/icons';
import { ThreeDotsMenuIcon } from '@/assets/icons';
import { Whisper } from '../type';
import MenuButton from './MenuButton';
import MobileCheckbox from './MobileCheckbox';
import Overlay from './Overlay';
import { PATH } from '@/routes/constants';

interface WhisperProps {
  item: Whisper;
  menu?: boolean;
  checkboxOpen?: boolean;
  idx: number;
  checkedItems?: Record<string, boolean>;
  handleCheck?: (id: number) => void;
  handleDelete?: (id: number) => void;
}

const WhisperItem = ({
  item,
  menu,
  checkboxOpen,
  checkedItems,
  handleCheck,
  handleDelete,
}: WhisperProps) => {
  const [report] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const getPlainText = useCallback((content: string) => {
    const $div = document.createElement('div');
    $div.innerHTML = content;

    return $div.textContent || $div.innerText || '';
  }, []);

  const navigateToDetail = () =>
    navigate(`${PATH.COMMUNITY.MAIN}/${item.postId}`);

  const menuOpen = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <ListItem
      display="flex"
      cursor="pointer"
      pb={{ mobile: '10px', tablet: '28px' }}
      borderBottom={'1px solid'}
      borderColor={'gray.100'}
      flexDir={{ mobile: 'row-reverse', tablet: 'row' }}
      mt={{ mobile: '16px', tablet: '0' }}
      mb={{ mobile: '24px', tablet: '28px' }}
      onClick={navigateToDetail}
    >
      <Box w="100%">
        <Flex
          flexDir={{ mobile: 'column', tablet: 'row' }}
          align={{ mobile: 'flex-start', tablet: 'center' }}
          mb={{ mobile: '8px', tablet: '12px' }}
        >
          <Flex
            w={{ mobile: '100%', tablet: 'auto' }}
            alignItems={'center'}
            mb={{ mobile: '8px', tablet: '0' }}
          >
            {/* <TagComponent tagLabel="텃밭 자랑" /> */}
            <Flex
              bg="black"
              color="white"
              borderRadius="6px"
              p="6px 10px"
              align={'center'}
              justify={'center'}
              fontSize={'16px'}
              fontWeight={'medium'}
            >
              텃밭 자랑
            </Flex>
            <Box hideFrom={'tablet'} ml="auto">
              <ThreeDotsMenuIcon onClick={menuOpen} cursor="pointer" />
              <BottomMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Box
                  as="button"
                  p="18px"
                  display="flex"
                  justifyContent="flex-start"
                  _hover={{ bg: 'green.100' }}
                  _first={{ borderTopRadius: 20, borderBottomRadius: 0 }}
                >
                  게시글 수정
                </Box>
                <Box
                  as="button"
                  p="18px"
                  display="flex"
                  justifyContent="flex-start"
                  _hover={{ bg: 'green.100' }}
                  _notFirst={{ borderRadius: 0 }}
                  onClick={() => handleDelete && handleDelete(item.postId)}
                >
                  삭제하기
                </Box>
              </BottomMenu>
            </Box>
          </Flex>
          <Text
            fontSize="16px"
            fontWeight="semiBold"
            ml={{ mobile: '0', tablet: '12px' }}
            lineHeight={{ mobile: '24px' }}
          >
            {item.title}
          </Text>
        </Flex>
        <Text
          mb="8px"
          hideBelow={'tablet'}
          noOfLines={3}
          whiteSpace={'normal'}
          wordBreak={'break-all'}
          overflowWrap={'anywhere'}
        >
          {getPlainText(item.content)}
        </Text>
        <Flex align="center" mb={{ mobile: '8px', tablet: '0' }} mt="8px">
          <Box w="24px" h="24px">
            <AvatarComponent src={item.userInfo.profile} size="full" />
          </Box>
          <Text ml="8px" mr="10px">
            {item.userInfo.name}
          </Text>
          <HeartUnfiledIcon />
          <Text ml="6px" mr="10px">
            {item.likesCount}
          </Text>
          <TextBubbleBlackIcon />
          <Text ml="6px">{item.commentsCount}</Text>
        </Flex>
        {/* <Text
          color="error"
          fontSize={{ mobile: '14px', tablet: '16px' }}
          fontWeight="medium"
          opacity={report ? 1 : 0}
          mb="8px"
        >
          신고가 접수된 게시글 입니다.
        </Text> */}
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
          tablet: item?.preview ? 'block' : 'none',
        }}
        mr={{ mobile: '13px', tablet: '0' }}
        position="relative"
      >
        <Overlay report={report} />
        {handleCheck && checkedItems && (
          <MobileCheckbox
            handleCheckbox={handleCheck}
            id={item.postId}
            checkedItems={checkedItems}
            checkboxOpen={checkboxOpen}
          />
        )}
        {item?.preview ? (
          <Image
            w="full"
            h="full"
            objectFit="cover"
            src={item.preview}
            borderRadius="10px"
          />
        ) : (
          <GardenImageDefaultIcon />
        )}
      </Box>
      {menu && (
        <MenuButton
          itemId={item.postId}
          ml="26px"
          handleDelete={() => handleDelete && handleDelete(item.postId)}
        />
      )}
    </ListItem>
  );
};

export default WhisperItem;
