import {
  Flex,
  Image,
  Link as ChakraLink,
  Button,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { PcPostMenu } from './PostMenu';
import { headerNavLinks } from './constants';
import mainLogo from './mainLogo.svg';
import { PATH } from '@/routes/constants';
import useLoginStore from '@/stores/useLoginStore';

const PcHeader = ({ loggedIn = false }) => {
  const navigate = useNavigate();
  const logout = useLoginStore((state) => state.logout);

  const handleClickLoginButton = () => {
    if (loggedIn) {
      logout();

      return;
    }

    sessionStorage.setItem('login-prev-page', window.location.pathname);
    navigate(PATH.LOGIN.MAIN);
  };

  return (
    <Flex
      h="108px"
      maxW="1140px"
      mx="auto"
      justifyContent="space-between"
      alignItems="center"
      px="20px"
    >
      <nav>
        <UnorderedList display="flex" gap="37px" alignItems="center" m="0">
          <ListItem>
            <ReactRouterLink to={PATH.MAIN}>
              <Image src={mainLogo} alt="모두의 텃밭 로고" w="54px" h="54px" />
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
        {loggedIn && (
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
          {loggedIn ? '로그아웃' : '로그인 / 회원가입'}
        </Button>
        <PcPostMenu />
      </Flex>
    </Flex>
  );
};

export default PcHeader;
