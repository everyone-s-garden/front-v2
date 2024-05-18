import {
  Flex,
  Image,
  Link as ChakraLink,
  Button,
  Container,
  Box,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { ProfileIcon } from '@/assets/icons';
import { LogoHorizon } from '@/assets/images';
import Tab from '../Tab/Tab';
import PostMenu from './PostMenu';
import { headerNavLinks } from './constants';
import { PATH } from '@/routes/constants';

const Header = () => {
  const navigate = useNavigate();

  const handleClickLoginButton = () => {
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
            onClick={() => navigate('/')}
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
          <Button
            fontWeight="regular"
            bg="none"
            _hover={{ bg: 'none' }}
            onClick={handleClickLoginButton}
          >
            로그인 / 회원가입
          </Button>
          <PostMenu />
        </Flex>
      </Container>
      <MobileHeader />
    </>
  );
};

const MobileHeader = () => {
  const navigate = useNavigate();

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
          onClick={() => navigate('/')}
        />
        <ProfileIcon />
      </Flex>
      <Tab tabsData={headerNavLinks} color="orange" tabWidth="fit-full" />
    </Box>
  );
};

export default Header;
