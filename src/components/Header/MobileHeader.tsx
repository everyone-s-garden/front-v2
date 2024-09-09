import {
  Flex,
  IconButton,
  Image,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Link as ChakraLink,
  chakra,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  Link as ReactRouterLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { ProfileIcon } from '@/assets/icons';
import { HEADER_HEIGHT, headerNavLinks } from './constants';
import mainLogo from './mainLogo.svg';
import { PATH } from '@/routes/constants';
import useLoginStore from '@/stores/useLoginStore';

const MobileHeader = () => {
  const [scrollY, setScrollY] = useState(0);
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const index = headerNavLinks.findIndex(({ href }) =>
      href === '/' ? href === currentPath : currentPath.includes(href),
    );

    setTabIndex(index);
  }, [currentPath]);

  const handleClickProfile = () => {
    if (isLoggedIn) {
      navigate(PATH.MYPAGE.MAIN);

      return;
    }

    sessionStorage.setItem('login-prev-page', window.location.pathname);
    navigate(PATH.LOGIN.MAIN);
  };

  const dynamicTop = `calc(${Math.max(
    0,
    HEADER_HEIGHT.MOBILE - scrollY - 1,
  )}px)`;

  return (
    <Flex flexDir="column">
      <Flex
        justify="space-between"
        alignItems="center"
        pt="15px"
        px="20px"
        h={HEADER_HEIGHT.MOBILE}
      >
        <ReactRouterLink to={PATH.MAIN}>
          <Image src={mainLogo} alt="모두의 텃밭 로고" w="48px" h="48px" />
        </ReactRouterLink>
        <IconButton
          aria-label="profile"
          icon={<ProfileIcon />}
          variant="unstyled"
          minW="fit-content"
          h="fit-content"
          fill={isLoggedIn ? 'black' : 'transparent'}
          stroke="black"
          onClick={handleClickProfile}
        />
      </Flex>
      <chakra.nav
        h="50px"
        w="100%"
        zIndex="header"
        position="fixed"
        top={dynamicTop}
        bg="white"
      >
        <Tabs index={tabIndex}>
          <TabList as="ul">
            {headerNavLinks.map(({ href, tabName }) => (
              <Tab as="li" key={href} p="0" w="100%" minW="fit-content">
                <ChakraLink
                  as={ReactRouterLink}
                  w="100%"
                  h="100%"
                  p="13px 20px"
                  to={href}
                  textAlign="center"
                  _hover={{ textDecoration: 'none' }}
                  fontWeight="bold"
                >
                  {tabName}
                </ChakraLink>
              </Tab>
            ))}
          </TabList>
          <TabIndicator mt="-3px" height="3px" bg="green.500" />
        </Tabs>
      </chakra.nav>
    </Flex>
  );
};

export default MobileHeader;
