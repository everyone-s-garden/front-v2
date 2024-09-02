import { ThemeOverride, extendTheme } from '@chakra-ui/react';
import Button from './components/button';
import Menu from './components/menu';
import Tabs from './components/tab';
import TagStyleConfig from './components/tag';

export const colors = {
  black: '#282828',
  white: '#FFFFFF',
  sub: '#5A5A5A',
  // primary: '#B3D36F',
  // secondary: '#FF9029',
  error: '#EF2B2A',
  gray: {
    50: '#F0F0F0',
    100: '#EBEBEB',
    200: '#D7D7D7',
    300: '#BEBEBE',
    400: '#A5A5A5',
    500: '#8C8C8C',
    600: '#737373',
    700: '#5A5A5A',
    800: '#414141',
  },
  green: {
    100: '#EAFBF4',
    200: '#D5F6E8',
    300: '#ABEDD1',
    400: '#56DCA4',
    500: '#2DD38D',
    600: '#23A971',
    700: '#247546',
  },
  // green: {
  //   100: '#F1F7E4',
  //   200: '#DCEBBD',
  //   300: '#C8DF96',
  //   400: '#B3D36F',
  //   500: '#9EC646',
  //   600: '#83A834',
  //   700: '#658128',
  // },
  // orange: {
  //   100: '#FFF4EB',
  //   200: '#FFDFC2',
  //   300: '#FFC58F',
  //   400: '#FFAB5C',
  //   500: '#FF9029',
  //   600: '#F77700',
  //   700: '#C25200',
  //   800: '#8F4500',
  //   900: '#5C2C00',
  // },
};

export const devices = {
  mobile: `(min-width: 0px)`,
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1024px)`,
};

export const breakpoints = {
  mobile: '0',
  tablet: '768px',
  desktop: '1024px',
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

export const emotionTheme = {
  colors,
  devices,
  fontWeights,
};

export const chakraTheme = {
  colors,
  breakpoints,
  fontWeights,
  components: {
    Menu,
    Button,
    Tabs,
    TagStyleConfig,
  },
} satisfies ThemeOverride;

export const theme = extendTheme(chakraTheme);

export type Colors = typeof colors;
export type Devices = typeof devices;
export type FontWeight = typeof fontWeights;
