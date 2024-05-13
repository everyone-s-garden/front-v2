import { Box, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/routes/constants';
import loginAPI from '@/services/login/api';
import useIsLoggedInStore from '@/stores/useIsLoggedInStore';

function KakaoRedirection() {
  const navigate = useNavigate();
  const serachParams = new URLSearchParams(window.location.search);
  const code = serachParams.get('code');
  const kakaoRedirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const { setIsLoggedIn } = useIsLoggedInStore();

  useEffect(() => {
    async function fetchLogin() {
      try {
        const data = await loginAPI.login('kakao', code, kakaoRedirectUri);

        loginAPI.onLoginSuccess(data);
        setIsLoggedIn(true);
        navigate(PATH.MAIN);
      } catch (error) {
        console.error('Failed to login with Kakao:', error);
      }
    }

    if (code) fetchLogin();
  }, []);

  return (
    <Box
      w="full"
      h="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        mb="75px"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
    </Box>
  );
}

export default KakaoRedirection;
