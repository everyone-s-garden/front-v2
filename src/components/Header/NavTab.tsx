import { Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import { headerNavLinks } from './constants';

const NavTab = () => {
  const { pathname } = useLocation();

  // BUG: popstate(뒤로가기, 앞으로가기) 때 탭 막대가 움직이지 않음
  // https://chakra-ui.com/docs/components/tabs/usage#controlled-tabs 로 해결
  return (
    <Tabs position="relative" isFitted={true} defaultIndex={2}>
      <TabList
        justifyContent="space-between"
        borderBottom="2px solid"
        borderBottomColor="gray.200"
      >
        {headerNavLinks.map(({ href, name }) => (
          <Tab
            as={ReactRouterLink}
            to={href}
            key={href}
            color={
              pathname.slice(1) === href.split('/')[1] ? 'black' : 'gray.200'
            }
            fontWeight="bold"
            px="20px"
            pb="14px"
            flexGrow={1}
            _hover={{ bg: 'none' }}
          >
            {name}
          </Tab>
        ))}
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        bg="orange.500"
        borderRadius="1px"
      />
    </Tabs>
  );
};

export default NavTab;
