import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Tab } from '@/components';
import { TAB_GAP, TAB_PADDING_VERTICAL, mainRoute } from '../constants';
import { ISubRoute } from '../type';

const MyPageNavBar = ({ route }: { route: ISubRoute[] }) => {
  const [offset, setOffset] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      setOffset({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const tabGapSizes = {
    small: 20,
    medium: 30,
    large: 80,
    default: TAB_GAP,
  };

  const getTabGap = (width: number) => {
    if (width <= 400) return tabGapSizes.small;
    if (width > 400 && width < 780) return tabGapSizes.medium;
    if (width >= 780 && width < 1024) return tabGapSizes.large;

    return tabGapSizes.default;
  };

  const tab_gap = getTabGap(offset.width);

  return (
    <Box display={{ mobile: 'none', tablet: 'block' }}>
      <Tab
        gap={tab_gap}
        color="white"
        tabsData={mainRoute.slice(0, -1)}
        tabWidth="fit"
        paddingVertical={TAB_PADDING_VERTICAL}
        borderTop
        textStyle={{ fontWeight: 'semiBold', color: 'green.600' }}
      />
      <Tab
        gap={TAB_GAP}
        color="green"
        tabsData={route}
        tabWidth="fit"
        paddingVertical={TAB_PADDING_VERTICAL}
        textStyle={{ fontWeight: 'semiBold' }}
      />
    </Box>
  );
};

export default MyPageNavBar;
