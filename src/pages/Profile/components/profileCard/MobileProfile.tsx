import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { DefaultProfile, UserGrade } from '@/assets/images';

interface MobileProfileProps {
  userInfo: UserInfo;
}

const MobileProfile = ({ userInfo }: MobileProfileProps) => {
  return (
    <Flex justifyContent={'space-between'}>
      <Flex flexDir={'column'} justifyContent={'space-between'}>
        <Flex gap={'8px'} alignItems={'center'}>
          <Image
            src={
              userInfo?.profileImageUrl
                ? userInfo?.profileImageUrl
                : DefaultProfile
            }
            alt={userInfo?.nickname}
            w={{ mobile: '44px' }}
            h={{ mobile: '44px' }}
            borderRadius="50%"
          />
          <Text
            borderRadius={'full'}
            fontSize={'14px'}
            px={'12px'}
            fontWeight={'semiBold'}
            bgColor={'black'}
            color={'white'}
          >
            {userInfo.nickname}
          </Text>
        </Flex>

        <Box>
          <Text fontWeight={'semiBold'}>{userInfo.memberMannerGrade}</Text>
          <Text fontSize={'10px'} color={'gray.500'}>
            {userInfo.email}
          </Text>
        </Box>
      </Flex>
      <Image src={UserGrade} h={'102px'} />
    </Flex>
  );
};

export default MobileProfile;
