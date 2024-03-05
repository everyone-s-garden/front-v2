import { Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import { headerNavLinks } from './constants';

const NavTab = () => {
  const { pathname } = useLocation();

  return (
    <Tabs position="relative" isFitted={true}>
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
            px={20}
            pb={14}
            flexGrow={1}
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
