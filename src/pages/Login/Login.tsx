import { Box, Flex, Icon, Img, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, KakaoLogo, LoginLogo } from '@/assets/icons';
import { LogoHorizon } from '@/assets/images';
import LoginLink from './components/LoginLink';

const Login = () => {
  const navigate = useNavigate();
  const origin = window.location.origin;

  const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = `${origin}/login/oauth2/kakao`;
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;

  const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const NAVER_REDIRECT_URI = `${origin}/login/oauth2/naver`;
  const NAVER_AUTH_URI = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}`;

  return (
    <Box
      pos="fixed"
      top="0"
      left="0"
      zIndex="10"
      minW={{ mobile: '100%', tablet: '100vw' }}
      minH={{ mobile: '100%', tablet: '100vh' }}
      bgColor="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Icon
        pos="absolute"
        top={{ mobile: '23px', tablet: '75px' }}
        left={{ mobile: '20px', tablet: '50px' }}
        w="30px"
        h="30px"
        cursor="pointer"
        fill={{ mobile: '#bec8b3', tablet: '#414C38' }}
        as={ArrowLeftIcon}
        onClick={() => navigate(-1)}
      />
      <Box w={{ mobile: '258px', tablet: '532px' }}>
        <Flex flexDir="column">
          <Flex justifyContent="center" alignItems="center">
            <Box pos="relative" w="113px" h="46px" mb="13.38px">
              <Icon as={LoginLogo} w="full" h="full" />
              <Text
                pos="absolute"
                top="9px"
                left="50%"
                transform="translateX(-50%)"
                color="#414c38"
                fontSize="12px"
                fontWeight="medium"
                whiteSpace="none"
                w="full"
                textAlign="center"
              >
                3초만에 로그인
              </Text>
            </Box>
          </Flex>
          <Img
            w={{ mobile: '200px', tablet: '270px' }}
            h={{ mobile: '34px', tablet: '40px' }}
            margin="0 auto"
            marginBottom="20px"
            src={LogoHorizon}
          />
          <LoginLink
            type="kakao"
            icon={KakaoLogo}
            content="카카오로 로그인하기"
            link={KAKAO_AUTH_URI}
          />
          <LoginLink
            type="naver"
            content="네이버로 로그인하기"
            link={NAVER_AUTH_URI}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Login;
