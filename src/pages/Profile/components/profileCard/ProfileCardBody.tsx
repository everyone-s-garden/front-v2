import { Box, Flex, Image } from '@chakra-ui/react';
import { DefaultProfile } from '@/assets/images';

interface ProfileCardBodyProps {
  userInfo: UserInfo;
}

const ProfileCardBody = ({ userInfo }: ProfileCardBodyProps) => {
  return (
    <Flex
      gap={{ mobile: '12px', tablet: '7.82px', desktop: '10px' }}
      flexDir={{ mobile: 'row', tablet: 'column' }}
      justifyContent={{ mobile: 'center', tablet: '' }}
      alignItems={{ mobile: 'center', tablet: '' }}
      mt={{ mobile: '28px', tablet: '38.17px', desktop: '49px' }}
      mb={{ mobile: '20px', tablet: '24px' }}
    >
      <Image
        src={
          userInfo?.profileImageUrl ? userInfo?.profileImageUrl : DefaultProfile
        }
        alt={userInfo?.nickname}
        w={{ mobile: '70px', tablet: '73.52px', desktop: '94px' }}
        h={{ mobile: '70px', tablet: '73.52px', desktop: '94px' }}
        borderRadius="50%"
      />
      <Flex
        flexDir="column"
        justifyContent={{ mobile: 'cetner', tablet: '' }}
        alignItems={{ mobile: '', tablet: 'center' }}
        gap={{ mobile: '8px', tablet: '7.82px', desktop: '10px' }}
      >
        <Box
          fontSize={{ mobile: '14px', tablet: '10.95px', desktop: '14px' }}
          fontWeight="semiBold"
          py={{ motile: '4px', tablet: '3.13px', desktop: '4px' }}
          px={{ mobile: '12px', tablet: '10px' }}
          borderRadius="10px"
          bgColor="orange.500"
          color="white"
          w="fit-content"
          h="fit-content"
        >
          {userInfo?.nickname}
        </Box>
        {/* <Text
          color="orange.500"
          fontSize={{ mobile: '10px', tablet: '7.82px', desktop: '10px' }}
          fontWeight="medium"
        >
          rrgy980@naver.com
        </Text> */}
      </Flex>
    </Flex>
  );
};

export default ProfileCardBody;
