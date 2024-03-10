import {
  Flex,
  Image,
  Link as ChakraLink,
  Button,
  Container,
  Show,
} from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { ProfileIcon } from '@/assets/icons';
import { LogoHorizon } from '@/assets/images';
import NavTab from './NavTab';
import PostMenu from './PostMenu';
import { headerNavLinks } from './constants';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Show above="tablet">
        <Container
          as="header"
          h={108}
          maxW={1167}
          mx="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={20}
        >
          <Flex gap={36} align="center">
            <Image
              src={LogoHorizon}
              alt="로고"
              maxW="163px"
              h="auto"
              cursor="pointer"
              onClick={() => navigate('/')}
            />
            {headerNavLinks.slice(1).map(({ href, name }) => (
              <ChakraLink
                as={ReactRouterLink}
                to={href}
                key={href}
                fontWeight="semiBold"
                fontSize={18}
              >
                {name}
              </ChakraLink>
            ))}
          </Flex>
          <Flex gap={30}>
            <Button>로그인 / 회원가입</Button>
            <PostMenu />
          </Flex>
        </Container>
      </Show>
      <Show below="tablet">
        <MobileHeader />
      </Show>
    </>
  );
};

const MobileHeader = () => {
  const navigate = useNavigate();

  return (
    <Container
      as="header"
      h={100}
      mx="auto"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex justify="space-between" pt={15} px={20}>
        <Image
          src={LogoHorizon}
          alt="로고"
          w="127px"
          h="22px"
          onClick={() => navigate('/')}
        />
        <ProfileIcon />
      </Flex>
      <NavTab />
    </Container>
  );
};

export default Header;
