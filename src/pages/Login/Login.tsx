import { Box, Flex, Icon, Img } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, KakaoLogo } from '@/assets/icons';
import { LogoHorizon } from '@/assets/images';
import LoginLink from './components/LoginLink';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box
      pos={{ mobile: 'relative', tablet: 'fixed' }}
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
        display={{ mobile: 'none', tablet: 'block' }}
        pos="absolute"
        top="75px"
        left="50px"
        w="30px"
        h="30px"
        cursor="pointer"
        as={ArrowLeftIcon}
        onClick={() => navigate(-1)}
      />
      <Box w={{ mobile: '258px', tablet: '532px' }}>
        <Flex flexDir="column">
          <Img
            w={{ mobile: '200px', tablet: '270px' }}
            h={{ mobile: '34px', tablet: '40px' }}
            margin="0 auto"
            src={LogoHorizon}
          />
          <LoginLink
            type="kakao"
            icon={KakaoLogo}
            content="카카오로 로그인하기"
          />
          <LoginLink type="naver" content="네이버로 로그인하기" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Login;
