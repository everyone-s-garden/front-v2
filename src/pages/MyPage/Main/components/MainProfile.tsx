import { Flex, Text } from '@chakra-ui/react';
import { AvatarComponent } from '@/components';
import SmallGradeCard from './SmallGradeCard';
import { useGetMyProfileInfo } from '@/services/user/query';

export default function MainProfile() {
  const { data: myProfile } = useGetMyProfileInfo();

  if (!myProfile) return;

  const { profileImage, nickname, email, memberMannerGrade } = myProfile;

  return (
    <Flex
      h={{ mobile: 'fit-content', tablet: '180px' }}
      w="100%"
      rounded="10px"
      bgColor={{ mobile: 'white', tablet: 'gray.50' }}
      pl={{ mobile: '0px', tablet: '30px' }}
      align="center"
      gap="12px"
      px={{ mobile: '0', tablet: '30px' }}
    >
      <AvatarComponent w="70px" h="70px" src={profileImage} />
      <Flex flexDir="column" gap="8px">
        <Text fontWeight="semiBold" fontSize="18px">
          {nickname}
        </Text>
        <SmallGradeCard grade={memberMannerGrade} />
        <Text fontSize="10px" color="gray.500">
          {email}
        </Text>
      </Flex>
    </Flex>
  );
}
