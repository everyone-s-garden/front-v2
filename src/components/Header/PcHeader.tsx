import {
  Flex,
  Image,
  Link as ChakraLink,
  Button,
  UnorderedList,
  ListItem,
  Box,
} from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { PcPostMenu } from './PostMenu';
import { HEADER_HEIGHT, headerNavLinks } from './constants';
import mainLogo from './mainLogo.svg';
import { PATH } from '@/routes/constants';
import useLoginStore from '@/stores/useLoginStore';

const PcHeader = () => {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  const navigate = useNavigate();
  const logout = useLoginStore((state) => state.logout);

  const handleClickLoginButton = () => {
    if (isLoggedIn) {
      logout();

      return;
    }

    sessionStorage.setItem('login-prev-page', window.location.pathname);
    navigate(PATH.LOGIN.MAIN);
  };

  return (
    <Box
      position="fixed"
      w="100vw"
      px="20px"
      bg="white"
      h={`${HEADER_HEIGHT.PC}px`}
      zIndex="10000"
    >
      <Flex
        h="100%"
        maxW="1194px"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
      >
        <nav>
          <UnorderedList display="flex" gap="37px" alignItems="center" m="0">
            <ListItem>
              <ReactRouterLink to={PATH.MAIN}>
                <Image
                  src={mainLogo}
                  alt="모두의 텃밭 로고"
                  w="54px"
                  h="54px"
                />
              </ReactRouterLink>
            </ListItem>
            {headerNavLinks.slice(1).map(({ href, tabName }) => (
              <ListItem key={href}>
                <ChakraLink
                  as={ReactRouterLink}
                  to={href}
                  fontWeight="semiBold"
                  fontSize="18px"
                  _hover={{ textDecoration: 'none' }}
                >
                  {tabName}
                </ChakraLink>
              </ListItem>
            ))}
          </UnorderedList>
        </nav>
        <Flex gap="30px" alignItems="center">
          {isLoggedIn && (
            <ChakraLink
              as={ReactRouterLink}
              fontWeight="regular"
              to={PATH.MYPAGE.MAIN}
              _hover={{ textDecoration: 'none' }}
            >
              마이페이지
            </ChakraLink>
          )}
          <Button
            fontWeight="regular"
            variant="unstyled"
            onClick={handleClickLoginButton}
          >
            {isLoggedIn ? '로그아웃' : '로그인 / 회원가입'}
          </Button>
          <PcPostMenu />
        </Flex>
      </Flex>
    </Box>
  );
};

export default PcHeader;
