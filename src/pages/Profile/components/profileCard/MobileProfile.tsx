import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { DefaultProfile } from '@/assets/images';
import { OtherUserInfo } from '@/services/user/user';
import { getLargeGradeIcon } from '@/utils/grade/getLargeGardeIcon';

interface MobileProfileProps {
  userInfo: OtherUserInfo;
}

const MobileProfile = ({ userInfo }: MobileProfileProps) => {
  const UserGradeIcon = getLargeGradeIcon(userInfo.memberMannerGrade);

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
      <UserGradeIcon />
    </Flex>
  );
};

export default MobileProfile;
