// import { Box, Spinner } from '@chakra-ui/react';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { PATH } from '@/routes/constants';
// import loginApi from '@/services/login/api';

// function NaverRedirection() {
//   const navigate = useNavigate();
//   const serachParams = new URLSearchParams(window.location.search);
//   const code = serachParams.get('code');
//   const naverRedirectUri = import.meta.env.VITE_NAVER_REDIRECT_URI;

//   useEffect(() => {
//     async function fetchLogin() {
//       try {
//         const data = await loginApi.kakaoLogin(code, naverRedirectUri);
//         console.log('Login data:', data);
//         navigate(PATH.MAIN);
//       } catch (error) {
//         console.error('Failed to login with Kakao:', error);
//       }
//     }

//     if (code) fetchLogin();
//   }, [code, naverRedirectUri, navigate]);

//   return (
//     <Box
//       w="full"
//       h="full"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//     >
//       <Spinner
//         mb="75px"
//         thickness="4px"
//         speed="0.65s"
//         emptyColor="gray.200"
//         color="green.500"
//         size="xl"
//       />
//     </Box>
//   );
// }

// export default NaverRedirection;
