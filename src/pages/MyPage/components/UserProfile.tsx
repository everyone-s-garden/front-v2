import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { AvatarComponent } from '@/components';
import { SeedIcon, ShareIcon } from '@/assets/icons';

// interface UserProfileProps {}

const UserProfile = () => {
  const [userEmail] = useState('rrgy908@naver.com');

  return (
    <Flex
      display={{ mobile: 'none', tablet: 'flex' }}
      w="204px"
      h="280px"
      bg="gray.50"
      borderRadius="10px"
      flexDir="column"
      align="center"
      pos="relative"
      minW="204px"
    >
      <Box as="button" pos="absolute" zIndex={2} right="16px" top="12px">
        <ShareIcon aria-label="공유하기" />
      </Box>

      <Box mt="48px">
        <SeedIcon />
      </Box>
      <Text fontWeight={'semiBold'} fontSize={'16px'}>
        씨앗 등급
      </Text>
      <Flex mt="15.89px">
        <Box w="44px" h="44px" mr="8px">
          <AvatarComponent size={'full'} aria-label="유저 이미지" />
        </Box>
        <Flex flexDir={'column'} justify={'space-around'}>
          <Flex
            fontWeight={'semiBold'}
            color="#fff"
            bg="black"
            h="21px"
            w={'61px'}
            fontSize={'14px'}
            align={'center'}
            justify={'center'}
            borderRadius={'10px'}
          >
            텃린이
          </Flex>

          <Text color="gray.500" fontSize={'10px'} fontWeight={'regular'}>
            {userEmail}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserProfile;
