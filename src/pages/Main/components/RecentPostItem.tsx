import { Box, Flex, IconButton, Image, Text, chakra } from '@chakra-ui/react';
import { HeartIcon } from '@/assets/icons';

const CHeartIcon = chakra(HeartIcon);

const RecentPostItem = ({ postData }) => {
  const { imageUrl, gardenName, address, price, recruitEndDate } = postData;

  const endDate = new Date(recruitEndDate);
  const currentDate = new Date();

  const duration = Math.ceil(
    (endDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const term =
    duration > 0
      ? `${duration}일 남음`
      : duration === 0
        ? '마감 임박'
        : '마감됨';

  return (
    <Flex flexDir="column" flexShrink="0" gap="12px">
      <Box position="relative">
        <Image
          w={{ mobile: '190px', tablet: '276px' }}
          h={{ mobile: '129px', tablet: '168px' }}
          rounded="10px"
          src={imageUrl}
          alt="recent post"
        />
        <CHeartIcon
          cursor="pointer"
          position="absolute"
          top="12px"
          left="12px"
        />
      </Box>
      <Flex flexDir="column" gap="3px">
        <Flex gap="8px" alignItems="center">
          <Text
            fontSize={{ mobile: '16px', tablet: '18px' }}
            fontWeight="semiBold"
          >
            {gardenName}
          </Text>
          <Text color="gray.700" fontSize="14px" fontWeight="regular">
            {address}
          </Text>
        </Flex>
        <Text fontSize="16px" fontWeight="bold">
          {price} 원
        </Text>
        <Text color="gray.700" fontSize="16px">
          {term}
        </Text>
      </Flex>
    </Flex>
  );
};

export default RecentPostItem;
