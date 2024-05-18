import { Box, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loginAPI from '@/services/login/api';
import useLoginStore from '@/stores/useLoginStore';

interface RedirectionProps {
  type: 'kakao' | 'naver';
}

function Redirection({ type }: RedirectionProps) {
  const origin = window.location.origin;
  const navigate = useNavigate();
  const serachParams = new URLSearchParams(window.location.search);
  const code = serachParams.get('code');
  const redirectUri = `${origin}/login/oauth2/${type}`;
  const { setIsLoggedIn } = useLoginStore();

  useEffect(() => {
    async function fetchLogin() {
      try {
        await loginAPI.login(type, code, redirectUri);
        setIsLoggedIn(true);
      } catch (error) {
        console.error(`Failed to login with ${type}:`, error);
      } finally {
        setTimeout(() => {
          navigate(-2);
        }, 10);
      }
    }

    if (code) fetchLogin();
  }, [code, redirectUri, navigate, setIsLoggedIn, type]);

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

export default Redirection;
