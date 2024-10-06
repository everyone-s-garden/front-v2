import { TabData } from '../Tab/types';
import { PATH } from '@/routes/constants';

export const HEADER_HEIGHT = {
  PC: 108,
  MOBILE: 63,
  MOBILE_NAV: 50,
} as const;

export const headerNavLinks: TabData[] = [
  { tabName: '홈', href: PATH.MAIN, keyword: '' },
  { tabName: '내 주변 분양', href: PATH.MAP.MAIN, keyword: PATH.MAP.MAIN },
  // { tabName: '작물 거래', href: '/trading' },
  {
    tabName: '속닥속닥',
    href: PATH.COMMUNITY.MAIN,
    keyword: PATH.COMMUNITY.MAIN,
  },
  { tabName: '채팅', href: '/chat', keyword: 'chat' },
] as const;
