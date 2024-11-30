import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { DefaultProfile } from '@/assets/images';
import { OtherUserInfo } from '@/services/user/user';
import { getFormattedUserGrade } from '@/utils/grade/getFormattedUserGrade';
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
          <Text fontWeight={'semiBold'}>
            {getFormattedUserGrade(userInfo.memberMannerGrade)}
          </Text>
          <Text fontSize={'10px'} color={'gray.500'}>
            {userInfo.email}
          </Text>
        </Box>
      </Flex>
      <Icon as={UserGradeIcon} w={'76px'} h={'102px'} />
    </Flex>
  );
};

export default MobileProfile;
