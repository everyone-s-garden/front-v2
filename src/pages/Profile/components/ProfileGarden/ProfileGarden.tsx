import { Box, Flex, Text } from '@chakra-ui/react';

import ProfileGardenSlider from './ProfileGardenSlider';
import ProfileGarendFooter from './ProfileGarendFooter';

const ProfileGarden = () => {
  return (
    <Flex
      mb={{ tablet: '439px' }}
      flexDir="column"
      ml={{ mobile: '', tablet: '141px' }}
      w={{ mobile: 'full', tablet: '678px' }}
    >
      <Box
        w="fit-content"
        borderRadius="10px"
        py="6px"
        px="14px"
        bgColor="orange.600"
        color="white"
        fontWeight="semiBold"
        mb="14px"
        display={{ mobile: 'none', tablet: 'block' }}
      >
        나의 텃밭
      </Box>
      <ProfileGardenSlider />
      <ProfileGarendFooter />
      <Text
        color="sub"
        fontSize={{ mobile: '16px', tablet: '18px' }}
        mt={{ mobile: '24px', tablet: '31px' }}
        mb={{ mobile: '50px', tablet: '70px' }}
      >
        안녕하세요. 저희는 아빠, 엄마, 13살 된 딸아이 그리고 삽살개 한 마리와
        고양이 두 마리가 함께 사는 가족입니다 : ) 텃밭을 만들고 시작한지는
        3개월째입니다. 예쁘게 봐주세요 !
      </Text>
    </Flex>
  );
};

export default ProfileGarden;
