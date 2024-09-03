import {
  Flex,
  IconButton,
  Image,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  Link as ReactRouterLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { ProfileIcon } from '@/assets/icons';
import { headerNavLinks } from './constants';
import mainLogo from './mainLogo.svg';
import { PATH } from '@/routes/constants';
import useLoginStore from '@/stores/useLoginStore';

const MobileHeader = () => {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const index = headerNavLinks.findIndex(({ href }) =>
      href === '/' ? href === currentPath : currentPath.includes(href),
    );

    setTabIndex(index === -1 ? 0 : index);
  }, [currentPath]);

  const handleClickProfile = () => {
    if (isLoggedIn) {
      navigate(PATH.MYPAGE.MAIN);

      return;
    }

    sessionStorage.setItem('login-prev-page', window.location.pathname);
    navigate(PATH.LOGIN.MAIN);
  };

  return (
    <Flex flexDir="column">
      <Flex justify="space-between" alignItems="center" pt="15px" px="20px">
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
      <nav>
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
      </nav>
    </Flex>
  );
};

export default MobileHeader;
