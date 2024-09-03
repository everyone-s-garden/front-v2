import {
  TabIndicator,
  TabList,
  Tabs,
  Tab as TabItem,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { useCallback, useLayoutEffect, useState } from 'react';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import { TabData } from './types';

interface TabProps {
  gap?: number;
  tabWidth?: 'full' | 'fit' | 'fit-full';
  color: 'green' | 'orange' | 'white';
  tabsData: TabData[];
  paddingVertical?: number;
  borderTop?: string;
  textStyle?: React.CSSProperties;
  indicatorHeight?: string;
  borderBottom?: string;
}

const Tab = ({
  gap = 0,
  tabWidth = 'fit',
  color,
  tabsData,
  paddingVertical,
  borderTop = '2px solid',
  textStyle,
  borderBottom = '2px solid',
  indicatorHeight = '2px',
}: TabProps) => {
  const [tabIndex, setTabIndex] = useState(-1);
  const { pathname: currentPath } = useLocation();

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

  const handleClickTab = (index: number) => {
    if (tabIndex === index) return;

    setTabIndex(index);
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

  return (
    <Tabs position="relative" index={tabIndex} bg="white" zIndex="0">
      <TabList
        as="ul"
        py={paddingVertical}
        gap={`${gap}px`}
        borderBottom={borderBottom}
        borderBottomColor="gray.200"
        justifyContent="center"
        borderTop={borderTop}
        borderTopColor={borderTop ? 'gray.200' : ''}
        {...{ color: 'orange.100' }}
      >
        {tabsData.map(({ tabName, href }, index) => (
          <TabItem
            as="li"
            p="0"
            key={href}
            _selected={{
              color: textStyle?.color || 'black',
            }}
            fontSize={textStyle?.fontSize}
            fontWeight={textStyle?.fontWeight}
            {...getTabStyles()}
          >
            <ChakraLink
              as={ReactRouterLink}
              textAlign="center"
              w="100%"
              p="8px 16px"
              to={href}
              onClick={() => handleClickTab(index)}
              _hover={{ textDecoration: 'none' }}
            >
              {tabName}
            </ChakraLink>
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
