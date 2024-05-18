import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { AvatarComponent, TagComponent } from '@/components';
import { SeedIcon, ShareIcon } from '@/assets/icons';

// interface UserProfileProps {}

const UserProfile = () => {
  const [userEmail] = useState('rrgy908@naver.com');

  return (
    <Flex
      display={{ mobile: 'none', tablet: 'flex' }}
      w="204px"
      bg="orange.100"
      borderRadius="10px"
      flexDir="column"
      align="center"
      pos="relative"
      border="1px"
      borderColor="secondary"
      minW="204px"
    >
      <Box as="button" pos="absolute" zIndex={2} right="16px" top="12px">
        <ShareIcon aria-label="공유하기" />
      </Box>
      <Box w="99px" pt="49px">
        <AvatarComponent size={'full'} aria-label="유저 이미지" />
      </Box>
      <TagComponent tagLabel="텃린이" variant="userName" my="10px" />
      <Text mb="24px" color="orange.500" fontSize="10px">
        {userEmail}
      </Text>
      <Flex
        mt="auto"
        borderBottomRadius="10px"
        align="center"
        bg="orange.500"
        w="full"
        justify="center"
        py="7px"
      >
        <Box mr="12px" w="37.998px" h="36.001px">
          <SeedIcon />
        </Box>
        <Text color="white" fontWeight="semiBold">
          씨앗 등급
        </Text>
      </Flex>
    </Flex>
  );
};

export default UserProfile;
