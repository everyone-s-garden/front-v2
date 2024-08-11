import { TabIndicator, TabList, Tabs, Tab as TabItem } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useCallback, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TabData } from './types';
import useShowGardensStore from '@/stores/useShowGardensStore';

interface TabProps {
  gap?: number;
  tabWidth?: 'full' | 'fit' | 'fit-full';
  color: 'green' | 'orange' | 'white';
  tabsData: TabData[];
  paddingVertical?: number;
  borderTop?: boolean;
  textStyle?: React.CSSProperties;
  indicatorHeight?: string;
}

const Tab = ({
  gap = 0,
  tabWidth = 'fit',
  color,
  tabsData,
  paddingVertical,
  borderTop = false,
  textStyle,
  indicatorHeight = '2px',
}: TabProps) => {
  const [tabIndex, setTabIndex] = useState(-1);

  const { pathname: currentPath } = useLocation();
  const navigate = useNavigate();

  const getTabStyles = useCallback(() => {
    switch (tabWidth) {
      case 'full':
        return {
          flexGrow: 1,
          width: '100%',
        };
      case 'fit':
        return {
          width: 'fit-content',
        };
      default:
        return {
          flexGrow: 1,
          flexShrink: 0,
          width: 'fit-content',
        };
    }
  }, [tabWidth]);

  const handleClickTab = (index: number, href: string) => {
    if (currentPath === href) return;

    setTabIndex(index);
    navigate(href);
  };

  useLayoutEffect(() => {
    const calculateSelectedIndex = () => {
      if (currentPath === '/') {
        return 0;
      }

      const index = tabsData.findIndex(
        ({ keyword }) => keyword !== '' && currentPath.includes(keyword),
      );

      return index;
    };

    if (calculateSelectedIndex() === tabIndex) return;
    setTabIndex(calculateSelectedIndex());
  }, [currentPath, tabIndex, tabsData]);

  const { showGardens } = useShowGardensStore();

  return (
    <Tabs
      position="relative"
      index={tabIndex}
      bg="white"
      zIndex={showGardens ? -1 : 0}
    >
      <TabList
        py={paddingVertical}
        gap={`${gap}px`}
        borderBottom={'2px solid'}
        borderBottomColor="gray.200"
        justifyContent="center"
        borderTop={borderTop ? '2px solid' : ''}
        borderTopColor={borderTop ? 'gray.200' : ''}
        {...{ color: 'orange.100' }}
      >
        {tabsData.map(({ tabName, href }, index) => (
          <TabItem
            onClick={() => handleClickTab(index, href)}
            key={nanoid()}
            _selected={{
              color: textStyle?.color || 'black',
            }}
            fontSize={textStyle?.fontSize}
            fontWeight={textStyle?.fontWeight}
            {...getTabStyles()}
          >
            {tabName}
          </TabItem>
        ))}
      </TabList>
      <TabIndicator
        bottom={0}
        height={indicatorHeight}
        bg={`${color}.500`}
        borderRadius="1px"
        display={tabIndex === -1 ? 'none' : 'block'}
      />
    </Tabs>
  );
};

export default Tab;
