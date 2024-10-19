const MAIN = '/';

const LOGIN = {
  MAIN: '/login',
  REDIRECT_URI_KAKAO: '/login/oauth2/kakao',
  REDIRECT_URI_NAVER: '/login/oauth2/naver',
};

const ERROR = '*';

const COMMUNITY = {
  MAIN: '/community',
  DETAIL: '/community/:id',
  CREATE: '/community/create',
};

const MAP = {
  MAIN: '/map',
  CREATE_MY_GARDEN: '/map/create-my-garden',
  CREATE_GARDEN: '/map/create-garden',
};

const MYPAGE = {
  MAIN: '/mypage',
  NEARBY_GARDENS_INFO: {
    MAIN: '/mypage/nearby-gardens-info',
    FAVORITED_GARDENS: '/mypage/nearby-gardens-info/favorited-gardens',
    RECENTLY_VIEWED_GARDENS:
      '/mypage/nearby-gardens-info/recently-viewed-gardens',
    MY_POSTS: '/mypage/nearby-gardens-info/my-posts',
    GARDEN_DIARY: '/mypage/nearby-gardens-info/garden-diary',
  },
  CROP_TRADE: {
    MAIN: '/mypage/crop-trade',
    VERIFY_LOCATION: '/mypage/crop-trade/verify-location',
    SALES_HISTORY: '/mypage/crop-trade/sales-history',
    PURCHASE_HISTORY: '/mypage/crop-trade/purchase-history',
    WISH_LIST: '/mypage/crop-trade/wish-list',
  },
  WHISPERS: {
    MAIN: '/mypage/whispers',
    WRITTEN_POSTS: '/mypage/whispers/written-posts',
    COMMENTED_POSTS: '/mypage/whispers/commented-posts',
    LIKED_POSTS: '/mypage/whispers/liked-posts',
  },
  PROFILE: '/profile/:userId',
};

const SETTINGS = '/settings';

const CHAT = {
  MAIN: '/chat',
  ROOM: '/chat/:id',
};

const REPORT = '/report';

export const PATH = {
  MAIN,
  LOGIN,
  ERROR,
  COMMUNITY,
  MAP,
  MYPAGE,
  SETTINGS,
  CHAT,
  REPORT,
};
