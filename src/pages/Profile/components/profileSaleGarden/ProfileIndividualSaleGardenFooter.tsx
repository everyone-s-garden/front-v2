import { Flex, Icon, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { HeartIcon } from '@/assets/icons';

const ProfileIndividualSaleGardenFooter = () => {
  const [liked, setLiked] = useState(false);

  const handleClickLike = () => {
    setLiked(!liked);
  };

  return (
    <Flex gap="14px">
      <Flex
        w="50%"
        h="40px"
        justifyContent="center"
        alignItems="center"
        gap="4px"
        borderRadius="6px"
        border="1px solid"
        borderColor={liked ? 'orange.300' : 'gray.200'}
        cursor="pointer"
        onClick={handleClickLike}
      >
        <Icon as={HeartIcon} fill={liked ? 'orange.500' : 'gray.300'} />
        <Text
          fontSize={{ mobile: '14px', tablet: '16px' }}
          color={liked ? 'orange.500' : 'gray.300'}
        >
          찜하기
        </Text>
      </Flex>
      <Flex
        w="50%"
        h="40px"
        justifyContent="center"
        alignItems="center"
        fontSize={{ mobile: '14px', tablet: '16px' }}
        color="white"
        borderRadius="6px"
        bgColor="green.500"
        cursor="pointer"
      >
        신청하기
      </Flex>
    </Flex>
  );
};

export default ProfileIndividualSaleGardenFooter;
