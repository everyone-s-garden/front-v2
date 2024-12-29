import {
  Flex,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { PANELS } from '../constants/panels';
import { devices } from '@/styles/theme';

const MyPageNavBar = () => {
  const [isLargerThanTablet] = useMediaQuery(devices.tablet);
  const { pathname } = useLocation();
  const navBars = PANELS.filter((panel) => panel.isNavBar);
  const mainTabIndex = navBars.findIndex(
    (panel) => panel.href && pathname.includes(panel.href),
  );
  const subTabIndex = navBars[mainTabIndex].subPages?.findIndex(
    (panel) => panel.href && pathname.includes(panel.href),
  );
  const mobileTabName = navBars[mainTabIndex].subPages?.[subTabIndex!]?.tabName;

  return isLargerThanTablet ? (
    <>
      <Tabs
        position="relative"
        variant="unstyled"
        bg="white"
        index={mainTabIndex}
      >
        <TabList
          w="100%"
          borderBottom="1px solid"
          borderTop="1px solid"
          borderColor="gray.50"
          py="13px"
          justifyContent="center"
          gap="106px"
        >
          {navBars.map((panel) => (
            <Tab
              as={Link}
              key={panel.tabName}
              p="0"
              fontSize="18px"
              fontWeight="semiBold"
              _hover={{ color: 'black' }}
              to={panel.subPages ? panel.subPages[0].href : panel.href || ''}
              transition="color 0.2s"
            >
              {panel.tabName}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Tabs index={subTabIndex}>
        <TabList
          w="100%"
          borderBottom="1px solid"
          borderColor="gray.50"
          py="13px"
          justifyContent="center"
          gap="106px"
        >
          {navBars[mainTabIndex].subPages?.map((subPage) => (
            <Tab
              as={Link}
              key={subPage.tabName}
              p="0"
              fontSize="18px"
              fontWeight="semiBold"
              _hover={{ color: 'black' }}
              to={subPage.href}
              transition="color 0.2s"
            >
              {subPage.tabName}
            </Tab>
          ))}
        </TabList>
        <TabIndicator
          key={mainTabIndex}
          mt="-4px"
          h="3px"
          bg="green.500"
          transform="scaleX(1.3)"
        />
      </Tabs>
    </>
  ) : (
    <Flex
      pt="16px"
      pb="24px"
      justify="center"
      borderBottom="1px solid"
      borderColor="gray.100"
      position="sticky"
      top="0"
      bgColor="white"
      zIndex={10}
    >
      <Text fontSize="18px" fontWeight="semiBold">
        {mobileTabName}
      </Text>
    </Flex>
  );
};

export default MyPageNavBar;
