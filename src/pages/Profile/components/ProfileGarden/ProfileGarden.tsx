import { Box, Flex, Text } from '@chakra-ui/react';

import ProfileGardenSlider from './ProfileGardenSlider';
import ProfileGardenFooter from './ProfileGarendFooter';

interface ProfileGardenProps {
  otherManagedGardens: ManagedGarden[] | undefined;
  userInfo: UserInfo;
}

const ProfileGarden = ({
  otherManagedGardens,
  userInfo,
}: ProfileGardenProps) => {
  return (
    <Box mb={{ tablet: '164px' }} overflow="hidden">
      <Box
        w="fit-content"
        borderRadius="10px"
        py="6px"
        px="14px"
        bgColor="green.600"
        color="white"
        fontWeight="semiBold"
        mb="14px"
        display={{ mobile: 'none', tablet: 'block' }}
      >
        {userInfo?.nickname}님의 텃밭
      </Box>
      <Flex flexDir="column" borderBottom="1px solid" borderColor="gray.100">
        {otherManagedGardens?.map((el, i) => (
          <Box key={i}>
            <ProfileGardenSlider images={el.images} />
            <ProfileGardenFooter garden={el} />
            <Text
              color="sub"
              fontSize={{ mobile: '16px', tablet: '18px' }}
              mt={{ mobile: '24px', tablet: '31px' }}
              mb={{ mobile: '50px', tablet: '70px' }}
            >
              {el.description}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ProfileGarden;
