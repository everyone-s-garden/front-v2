import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { DefaultProfile } from '@/assets/images';

const ProfileCardBody = () => {
  return (
    <Flex
      gap={{ mobile: '12px', desktop: '10px' }}
      flexDir={{ mobile: 'row', desktop: 'column' }}
      justifyContent={{ mobile: 'center', desktop: '' }}
      alignItems={{ mobile: 'center', desktop: '' }}
      mt={{ mobile: '28px', desktop: '49px' }}
      mb={{ mobile: '20px', desktop: '24px' }}
    >
      <Image
        src={DefaultProfile}
        alt="기본 이미지"
        w={{ mobile: '70px', desktop: '94px' }}
        h={{ mobile: '70px', desktop: '94px' }}
        borderRadius="50%"
      />
      <Flex
        flexDir="column"
        justifyContent={{ mobile: 'cetner', desktop: '' }}
        alignItems={{ mobile: '', desktop: 'center' }}
        gap={{ mobile: '8px', desktop: '10px' }}
      >
        <Box
          fontSize="14px"
          fontWeight="semiBold"
          py="4px"
          px={{ mobile: '12px', desktop: '10px' }}
          borderRadius="10px"
          bgColor="orange.500"
          color="white"
          w="fit-content"
          h="fit-content"
        >
          텃린이
        </Box>
        <Text color="orange.500" fontSize="10px" fontWeight="medium">
          rrgy980@naver.com
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileCardBody;
