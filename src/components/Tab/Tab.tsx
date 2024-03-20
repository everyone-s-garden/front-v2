import { TabIndicator, TabList, Tabs, Tab as TabItem } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TabData } from './types';

interface TabProps {
  gap?: number;
  tabWidth?: 'full' | 'fit' | number;
  color: 'green' | 'orange';
  tabsData: TabData[];
}

const Tab = ({ gap = 0, tabWidth = 'fit', color, tabsData }: TabProps) => {
  const { pathname: currentPath } = useLocation();
  const navigate = useNavigate();

  const calculateSelectedIndex = useCallback(() => {
    if (currentPath === '/') {
      return 0;
    }

    const index = tabsData.findIndex(
      ({ keyword }) => keyword !== '' && currentPath.includes(keyword),
    );

    if (index === -1) {
      return -1;
    }

    return index;
  }, [currentPath, tabsData]);

  const calculateWidth = useCallback(
    (tabWidth: 'full' | 'fit' | number): string => {
      if (tabWidth === 'full') {
        return '100%';
      }

      if (tabWidth === 'fit') {
        return 'auto';
      }

      return `${tabWidth}px`;
    },
    [],
  );

  const [tabIndex, setTabIndex] = useState(calculateSelectedIndex());

  const handleClickTab = (index: number, href: string) => {
    setTabIndex(index);

    if (currentPath === href) return;
    navigate(href);
  };

  useEffect(() => {
    if (calculateSelectedIndex() === tabIndex) return;

    setTabIndex(calculateSelectedIndex());
  }, [currentPath, calculateSelectedIndex, tabIndex]);

  return (
    <Tabs position="relative" index={tabIndex} bg="white">
      <TabList
        gap={gap}
        borderBottom="2px solid"
        borderBottomColor="gray.200"
        justifyContent="center"
      >
        {tabsData.map(({ tabName, href }, index) => (
          <TabItem
            onClick={() => handleClickTab(index, href)}
            key={nanoid()}
            flexGrow={tabWidth === 'full' ? 1 : 0}
            w={calculateWidth(tabWidth)}
          >
            {tabName}
          </TabItem>
        ))}
      </TabList>
      <TabIndicator
        bottom={0}
        height="2px"
        bg={`${color}.500`}
        borderRadius="1px"
        display={tabIndex === -1 ? 'none' : 'block'}
      />
    </Tabs>
  );
};

export default Tab;
