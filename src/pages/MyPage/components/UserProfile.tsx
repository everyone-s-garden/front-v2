import { Box, Flex, Text } from '@chakra-ui/react';
import { AvatarComponent } from '@/components';
import { useGetMyProfileInfo } from '@/services/user/query';
import { getFormattedUserGrade } from '@/utils/grade/getFormattedUserGrade';
import { getLargeGradeIcon } from '@/utils/grade/getLargeGardeIcon';

const UserProfile = () => {
  const { data: myProfile } = useGetMyProfileInfo();

  if (!myProfile) return null;

  const { profileImage, nickname, email, memberMannerGrade } = myProfile;
  const formattedGrade = getFormattedUserGrade(memberMannerGrade);
  const GradeIcon = getLargeGradeIcon(memberMannerGrade);

  return (
    <Flex
      rounded="10px"
      bgColor="gray.50"
      w="204px"
      h="280px"
      flexDir="column"
      align="center"
      justify="center"
    >
      <GradeIcon />
      <Text fontSize="16px" fontWeight="semiBold" mt="10px" mb="16px">
        {formattedGrade}
      </Text>
      <Flex align="center" gap="8px">
        <AvatarComponent w="44px" h="44px" src={profileImage} />
        <Flex flexDir="column" gap="6px">
          <Box
            w="fit-content"
            rounded="20px"
            fontSize="14px"
            fontWeight="semiBold"
            color="white"
            bgColor="black"
            p="2px 12px"
          >
            {nickname}
          </Box>
          <Text fontSize="10px" color="gray.500">
            {email}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserProfile;
