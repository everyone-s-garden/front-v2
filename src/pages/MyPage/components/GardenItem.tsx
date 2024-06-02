import { Box, Flex, Image, ListItem, Text, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { HeartIcon } from '@/assets/icons';
import { ICrop, IGarden } from '../type';
import MenuButton from './MenuButton';
import MobileCheckbox from './MobileCheckbox';
import Overlay from './Overlay';

interface CardProps {
  heart?: boolean;
  menu?: boolean;
  checkboxOpen?: boolean;
  item: IGarden | ICrop;
  idx: number;
}

const GardenItem = ({ heart, menu, checkboxOpen, item, idx }: CardProps) => {
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
    <ListItem cursor="pointer" mb="32px" mt={{ mobile: '16px', tablet: '0' }}>
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
            src={item.thumbnail}
            objectFit="cover"
          />
          <Overlay report={report} />
          {heart && (
            <Box
              onClick={() => alert(`heart clicked ${item.id}`)}
              as="button"
              pos="absolute"
              top={{ mobile: '8px', tablet: '12px' }}
              left={{ mobile: '8px', tablet: '12px' }}
              bg="transparent"
              aria-label="좋아요 버튼"
            >
              <HeartIcon />
            </Box>
          )}
          <MobileCheckbox
            handleCheckbox={handleCheckbox}
            idx={item.id}
            checkedItems={checkedItems}
            checkboxOpen={checkboxOpen}
          />
        </Box>
        <Box flex={1}>
          <Flex
            align={{ mobile: 'center', tablet: 'flex-start' }}
            mb="8px"
            flexDir={{ mobile: 'row', tablet: 'column' }}
          >
            <Text
              color="black"
              fontSize={{ mobile: '16px', tablet: '18px' }}
              fontWeight="semiBold"
              noOfLines={{ mobile: 2, tablet: 1 }}
            >
              {item.name}
            </Text>
            {'location' in item && (
              <Text
                mt={{ mobile: '0', tablet: '8px' }}
                ml={{ mobile: '6px', tablet: '0' }}
                fontSize="16px"
              >
                {item.location}
              </Text>
            )}
          </Flex>
          <Flex
            flexDir={{ mobile: 'row-reverse', tablet: 'column' }}
            justify={{ mobile: 'flex-end', tablet: 'flex-start' }}
          >
            {'size' in item && (
              <>
                <Text color="gray.700" noOfLines={1} fontSize="16px">
                  {item.size}평
                </Text>
                <Text display={{ mobile: 'block', tablet: 'none' }} mx={1}>
                  {' '}
                  /{' '}
                </Text>
              </>
            )}
            <Text color="black" noOfLines={1} fontWeight="semiBold" mb="6px">
              {item.price.toLocaleString()}원
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
          <Button
            w="full"
            display={{ mobile: 'block', tablet: 'none' }}
            bg="green.500"
            color="white"
            h="32px"
            maxW="223px"
            borderRadius="6px"
            isDisabled={report}
            fontSize="14px"
            fontWeight="semiBold"
            onClick={() => alert(`수정하기 click${idx}`)}
            _hover={{ bg: 'green.500' }}
          >
            수정하기
            <Overlay report={report} />
          </Button>
        </Box>
        {menu && <MenuButton ml="auto" />}
      </Flex>
    </ListItem>
  );
};

export default GardenItem;
