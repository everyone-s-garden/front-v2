import {
  NearbyGardenMyPageIcon,
  WhisperMyPageIcon,
  SettingsMyPageIcon,
  UserFeedBackMyPageIcon,
} from '@/assets/icons';
import { PATH } from '@/routes/constants';

const { NEARBY_GARDENS_INFO, CROP_TRADE, WHISPERS } = PATH.MYPAGE;

export const mainRoute = [
  {
    tabName: '내 주변 분양',
    keyword: NEARBY_GARDENS_INFO.MAIN,
    href: NEARBY_GARDENS_INFO.FAVORITED_GARDENS,
    des: '내 주변 분양에서 활동한 내역을\n볼 수 있어요.',
    icon: NearbyGardenMyPageIcon,
  },
  // {
  //   tabName: '작물 거래',
  //   keyword: CROP_TRADE.MAIN,
  //   href: CROP_TRADE.VERIFY_LOCATION,
  //   des: '작물거래에서 판매하고 구매한\n내역을 볼 수 있어요.',
  //   icon: CropTradeMyPageIcon,
  // },
  // {
  //   tabName: '텃밭 관리',
  //   keyword: GARDEN_MANAGEMENT.MY_GARDEN,
  //   href: GARDEN_MANAGEMENT.MY_GARDEN,
  //   des: '나의 텃밭을 관리할 수 있어요.',
  //   icon: GardenManagementMyPageIcon,
  // },
  {
    tabName: '속닥 속닥',
    keyword: WHISPERS.MAIN,
    href: WHISPERS.WRITTEN_POSTS,
    des: '속닥속닥에서 활동한 내역을\n볼 수 있어요.',
    icon: WhisperMyPageIcon,
  },
  {
    tabName: '설정',
    keyword: 'setting',
    href: PATH.SETTINGS,
    des: '고객센터 및 회원정보를 수정할\n수 있어요.',
    icon: SettingsMyPageIcon,
  },
  {
    href: '/',
    tabName: '유저의 소리함',
    des: '모두의 텃밭에 의견을 추가할 수\n있어요.',
    keyword: 'userFeedback',
    icon: UserFeedBackMyPageIcon,
  },
];

export const nearByRoute = [
  {
    tabName: '찜한 텃밭',
    keyword: NEARBY_GARDENS_INFO.FAVORITED_GARDENS,
    href: NEARBY_GARDENS_INFO.FAVORITED_GARDENS,
  },
  {
    tabName: '최근 본 텃밭',
    keyword: NEARBY_GARDENS_INFO.RECENTLY_VIEWED_GARDENS,
    href: NEARBY_GARDENS_INFO.RECENTLY_VIEWED_GARDENS,
  },
  {
    tabName: '내가 올린 글',
    keyword: NEARBY_GARDENS_INFO.MY_POSTS,
    href: NEARBY_GARDENS_INFO.MY_POSTS,
  },
  {
    tabName: '텃밭 일기',
    keyword: NEARBY_GARDENS_INFO.GARDEN_DIARY,
    href: NEARBY_GARDENS_INFO.GARDEN_DIARY,
  },
];

export const cropTradeRoute = [
  {
    tabName: '지역인증하기',
    keyword: CROP_TRADE.VERIFY_LOCATION,
    href: CROP_TRADE.VERIFY_LOCATION,
  },

  {
    tabName: '판매내역',
    keyword: CROP_TRADE.SALES_HISTORY,
    href: CROP_TRADE.SALES_HISTORY,
  },
  {
    tabName: '구매내역',
    keyword: CROP_TRADE.PURCHASE_HISTORY,
    href: CROP_TRADE.PURCHASE_HISTORY,
  },
  {
    tabName: '관심 목록',
    keyword: CROP_TRADE.WISH_LIST,
    href: CROP_TRADE.WISH_LIST,
  },
];

export const whispersRoute = [
  {
    tabName: '작성한 글목록',
    keyword: WHISPERS.WRITTEN_POSTS,
    href: WHISPERS.WRITTEN_POSTS,
  },
  {
    tabName: '댓글 단 글',
    keyword: WHISPERS.COMMENTED_POSTS,
    href: WHISPERS.COMMENTED_POSTS,
  },
  {
    tabName: '좋아요 누른 글',
    keyword: WHISPERS.LIKED_POSTS,
    href: WHISPERS.LIKED_POSTS,
  },
];

export const settingsRoute = [
  {
    tabName: '공지사항',
    href: '*',
    keyword: '',
  },
  {
    tabName: '자주 묻는 질문',
    href: '*',
    keyword: '',
  },
  {
    tabName: '1:1 문의하기',
    href: '*',
    keyword: '',
  },
  {
    tabName: '개인정보수정',
    href: '*',
    keyword: '',
  },
  {
    tabName: '로그아웃',
    href: '*',
    keyword: '',
  },
  {
    tabName: '회원탈퇴',
    href: '*',
    keyword: '',
  },
];

export const userFeedBackItem = [
  { key: 'garden-1', value: 'GARDEN', label: '텃밭 분양' },
  { key: 'croptrade-2', value: 'CROP', label: '작물 판매' },
  { key: 'whisper-3', value: 'COMMUNITY', label: '속닥속닥' },
  { key: 'chat-4', value: 'CHAT', label: '채팅관련' },
  { key: 'mypage-5', value: 'MYPAGE', label: '마이페이지' },
  { key: 'etc-6', value: 'ETC', label: '기타' },
];

export const TAB_GAP = 106;
export const TAB_PADDING_VERTICAL = 13;
