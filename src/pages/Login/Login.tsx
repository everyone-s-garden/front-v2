import { Flex, Icon, Image, Text } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, KakaoLogo } from '@/assets/icons';
import LoginLink from './components/LoginLink';
import { loginLogo } from '@/assets/images/login';
import { PATH } from '@/routes/constants';
import useLoginStore from '@/stores/useLoginStore';

const Login = () => {
  const navigate = useNavigate();
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const origin = window.location.origin;

  const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = `${origin}/login/oauth2/kakao`;
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;

  const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const NAVER_REDIRECT_URI = `${origin}/login/oauth2/naver`;
  const NAVER_AUTH_URI = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}`;

  if (isLoggedIn) return <Navigate to={PATH.MAIN} replace={true} />;

  return (
    <Flex
      minW="100vw"
      minH="100dvh"
      bgColor="white"
      flexDir="column"
      align="center"
      justify="center"
      padding={{ mobile: '26px 20px', tablet: '30px' }}
    >
      <Icon
        pos="absolute"
        top={{ mobile: '20px', tablet: '30px' }}
        left={{ mobile: '26px', tablet: '30px' }}
        w={{ mobile: '24px', tablet: '30px' }}
        h={{ mobile: '24px', tablet: '30px' }}
        cursor="pointer"
        fill="sub"
        as={ArrowLeftIcon}
        onClick={() => navigate(-1)}
      />
      <Flex
        flexDir="column"
        align="center"
        gap={{ mobile: '5px', tablet: '10px' }}
      >
        <Text
          fontFamily="KIMM"
          color="green.600"
          fontSize="32px"
          style={{
            WebkitTextStrokeWidth: '1.5px',
          }}
        >
          모두의 텃밭
        </Text>
        <Text fontSize="18px" fontWeight="medium" color="sub">
          누구에게나 쉬운 텃밭 분양
        </Text>
      </Flex>
      <Image
        src={loginLogo}
        h={{ mobile: '201px', tablet: '242px' }}
        m={{ mobile: '40px 0 0 0', tablet: '36px 0 47px 0' }}
      />
      <Flex
        w={{ mobile: '100%', tablet: '470px' }}
        flexDir="column"
        gap={{ mobile: '15px', tablet: '24px' }}
        position={{ mobile: 'absolute', tablet: 'static' }}
        bottom={{ mobile: '26px', tablet: '0' }}
        px={{ mobile: '20px', tablet: '0' }}
      >
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
    </Flex>
  );
};

export default Login;
