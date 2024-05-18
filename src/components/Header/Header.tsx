import {
  Flex,
  Image,
  Link as ChakraLink,
  Button,
  Container,
  Box,
  IconButton,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { ProfileIcon } from '@/assets/icons';
import { LogoHorizon } from '@/assets/images';
import Tab from '../Tab/Tab';
import PostMenu from './PostMenu';
import { headerNavLinks } from './constants';
import { PATH } from '@/routes/constants';
import useLoginStore from '@/stores/useLoginStore';

interface HeaderProps {
  loggedIn?: boolean;
}

const Header = ({ loggedIn = false }: HeaderProps) => {
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
    <>
      <Container
        as="header"
        h="108px"
        maxW="1167px"
        mx="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={{ mobile: '0', tablet: '20px' }}
        hideBelow="tablet"
      >
        <Flex gap="36px" align="center">
          <Image
            src={LogoHorizon}
            alt="로고"
            maxW="163px"
            h="auto"
            cursor="pointer"
            onClick={() => navigate(PATH.MAIN)}
          />
          {headerNavLinks.slice(1).map(({ href, tabName }) => (
            <ChakraLink
              as={ReactRouterLink}
              to={href}
              key={nanoid()}
              fontWeight="semiBold"
              fontSize="18px"
              _hover={{ textDecoration: 'none' }}
            >
              {tabName}
            </ChakraLink>
          ))}
        </Flex>
        <Flex gap="30px">
          {loggedIn && (
            <Button
              fontWeight="regular"
              variant={'unstyled'}
              onClick={() => navigate(PATH.MYPAGE.MAIN)}
            >
              마이페이지
            </Button>
          )}
          <Button
            fontWeight="regular"
            variant={'unstyled'}
            onClick={handleClickLoginButton}
          >
            {loggedIn ? '로그아웃' : '로그인 / 회원가입'}
          </Button>
          <PostMenu loggedIn={loggedIn} />
        </Flex>
      </Container>
      <MobileHeader loggedIn={loggedIn} />
    </>
  );
};

const MobileHeader = ({ loggedIn = false }: HeaderProps) => {
  const navigate = useNavigate();
  const handleClickProfile = () => {
    if (loggedIn) {
      navigate(PATH.MYPAGE.MAIN);

      return;
    }

    sessionStorage.setItem('login-prev-page', window.location.pathname);
    navigate(PATH.LOGIN.MAIN);
  };

  return (
    <Box
      as="header"
      h="100px"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      hideFrom="tablet"
    >
      <Flex justify="space-between" pt="15px" px="20px">
        <Image
          src={LogoHorizon}
          alt="로고"
          w="127px"
          h="22px"
          onClick={() => navigate(PATH.MAIN)}
        />
        <IconButton
          aria-label="profile"
          icon={<ProfileIcon />}
          variant={'unstyled'}
          minW={'fit-content'}
          h={'fit-content'}
          fill={loggedIn ? 'black' : 'transparent'}
          stroke={'black'}
          onClick={handleClickProfile}
        />
      </Flex>
      <Tab tabsData={headerNavLinks} color="orange" tabWidth="fit-full" />
    </Box>
  );
};

export default Header;
