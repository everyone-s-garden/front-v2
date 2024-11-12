import {
  Box,
  Flex,
  Image,
  ListItem,
  Text,
  Button,
  Hide,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapGardenNoImg } from '@/assets/images';
import { BaseGardenItem, CropTrade, RecentGardenItem } from '../type';
import MenuButton from './MenuButton';
import MobileCheckbox from './MobileCheckbox';
import Overlay from './Overlay';
import { PATH } from '@/routes/constants';
import { useGetGardenPositionById } from '@/services/gardens/mutations';
import useMapGardenDetailIdStore from '@/stores/useMapGardenDetailIdStore';
import useShowGardenDetailStore from '@/stores/useShowGardenDetailStore';

interface CardProps {
  heart?: boolean;
  menu?: boolean;
  checkboxOpen?: boolean;
  idx: number;
  item: RecentGardenItem | BaseGardenItem | CropTrade;
  checkedItems?: Record<string, boolean>;
  handleCheck?: (id: number) => void;
  handleDelete?: (id: number) => void;
  handleEdit?: (info: BaseGardenItem) => void;
}

const GardenItem = ({
  menu,
  checkboxOpen,
  item,
  checkedItems,
  handleCheck,
  handleDelete,
  handleEdit,
}: CardProps) => {
  const [report] = useState(false);
  const nav = useNavigate();
  const { mutate: getGardenPosition } = useGetGardenPositionById();
  const setGardenId = useMapGardenDetailIdStore((state) => state.setGardenId);
  const setShowGardenDetail = useShowGardenDetailStore(
    (state) => state.setShowGardenDetail,
  );

  const thumbnail = 'images' in item ? item.images[0] : item.imageUrl;
  const id = 'gardenId' in item ? item.gardenId : item.cropPostId;
  const title = 'gardenName' in item ? item.gardenName : item.title;
  const itemId = 'gardenId' in item ? item.gardenId : item.cropPostId;
  const price = 'price' in item ? item.price : null;
  const latitude = 'latitude' in item ? item.latitude : null;
  const longitude = 'longitude' in item ? item.longitude : null;

  const handlePostClick = () => {
    if (!latitude || !longitude) {
      getGardenPosition(id, {
        onSuccess: (data) => {
          nav(PATH.MAP.MAIN, {
            state: { data: { lat: data.latitude, lng: data.longitude } },
          });
        },
      });
    } else {
      nav(PATH.MAP.MAIN, {
        state: { data: { lat: latitude, lng: longitude } },
      });
    }

    setGardenId(id);
    setShowGardenDetail(true);
  };

  const isBaseGardenItem = (
    item: RecentGardenItem | BaseGardenItem | CropTrade,
  ): item is BaseGardenItem => {
    return 'gardenId' in item && 'gardenName' in item;
  };

  const handleEditClick = () => {
    if (handleEdit && isBaseGardenItem(item)) {
      handleEdit(item);
    }
  };

  return (
    <ListItem
      cursor="pointer"
      mb="32px"
      mt={{ mobile: '16px', tablet: '0' }}
      onClick={handlePostClick}
    >
      <Flex flex={1}>
        <Box
          w={{ mobile: '114px', tablet: '234px' }}
          h={{ mobile: '118px', tablet: '122px' }}
          mr={{ mobile: '12px', tablet: '24px' }}
          pos="relative"
        >
          <Image
            w="full"
            h="full"
            borderRadius="8px"
            src={thumbnail || MapGardenNoImg}
            objectFit="cover"
          />
          <Overlay report={report} />
          {/* {heart && (
            <Box
              as="button"
              pos="absolute"
              top={{ mobile: '8px', tablet: '12px' }}
              left={{ mobile: '8px', tablet: '12px' }}
              bg="transparent"
              aria-label="좋아요 버튼"
            >
              <HeartIcon />
            </Box>
          )} */}
          {handleCheck && checkedItems && (
            <MobileCheckbox
              handleCheckbox={handleCheck}
              id={id}
              checkedItems={checkedItems}
              checkboxOpen={checkboxOpen}
            />
          )}
        </Box>
        <Box flex={1}>
          <Text
            fontSize={{ mobile: '16px', tablet: '18px' }}
            mb="8px"
            fontWeight="semiBold"
            noOfLines={{ mobile: 2, tablet: 1 }}
          >
            {title}
          </Text>
          <Flex
            flexDir={{ mobile: 'row-reverse', tablet: 'column' }}
            justify={{ mobile: 'flex-end', tablet: 'flex-start' }}
          >
            {'size' in item && (
              <Text color="sub" noOfLines={1} fontSize="16px">
                <Hide above="tablet">&nbsp;/&nbsp;</Hide>
                {item.size}평
              </Text>
            )}
            <Text color="black" noOfLines={1} fontWeight="semiBold" mb="6px">
              평당 {(+price!).toLocaleString()}원
            </Text>
          </Flex>
          <Text
            color="error"
            fontSize={{ mobile: '14px', tablet: '16px' }}
            fontWeight="medium"
            opacity={report ? 1 : 0}
            mb="6px"
          >
            신고가 접수된 게시글 입니다.
          </Text>
          {handleEdit && (
            <Button
              w="full"
              display={{ mobile: 'block', tablet: 'none' }}
              bg="green.500"
              color="white"
              h="32px"
              borderRadius="6px"
              isDisabled={report}
              fontSize="14px"
              fontWeight="semiBold"
              onClick={(e) => {
                e.stopPropagation();
                handleEditClick();
              }}
              _hover={{ bg: 'green.500' }}
            >
              수정하기
              <Overlay report={report} />
            </Button>
          )}
        </Box>
        {menu && (
          <MenuButton
            ml="auto"
            itemId={itemId}
            handleDelete={handleDelete}
            handleEdit={(e) => {
              e.stopPropagation();
              handleEditClick();
            }}
          />
        )}
      </Flex>
    </ListItem>
  );
};

export default GardenItem;
