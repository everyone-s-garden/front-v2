import { Box, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loginAPI from '@/services/login/api';
import useLoginStore from '@/stores/useLoginStore';

function KakaoRedirection() {
  const origin = window.location.origin;
  const navigate = useNavigate();
  const serachParams = new URLSearchParams(window.location.search);
  const code = serachParams.get('code');
  const kakaoRedirectUri = `${origin}/login/oauth2/naver`;
  const { setIsLoggedIn } = useLoginStore();

  useEffect(() => {
    async function fetchLogin() {
      try {
        await loginAPI.login('naver', code, kakaoRedirectUri);
        setIsLoggedIn(true);

        navigate(-2);
      } catch (error) {
        console.error('Failed to login with Naver:', error);
      }
    }

    if (code) fetchLogin();
  }, [code, kakaoRedirectUri, navigate, setIsLoggedIn]);

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
