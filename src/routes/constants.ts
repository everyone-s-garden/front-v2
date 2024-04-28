export const PATH = {
  MAIN: '/',
  LOGIN: '/login',
  ERROR: '*',
  COMMUNITY: {
    MAIN: '/community',
    DETAIL: '/community/:id',
    CREATE: '/community/create',
  },
  MAP: {
    MAIN: '/map',
    CREATE_MY_GARDEN: '/map/create-my-garden',
    CREATE_GARDEN: '/map/create-garden',
  },
  MYPAGE: {
    MAIN: '/mypage',
    NEARBY_GARDENS_INFO: {
      MAIN: '/mypage/nearby-gardens-info',
      FAVORITED_GARDENS: '/mypage/nearby-gardens-info/favorited-gardens',
      RECENTLY_VIEWED_GARDENS:
        '/mypage/nearby-gardens-info/recently-viewed-gardens',
      MY_POSTS: '/mypage/nearby-gardens-info/my-posts',
    },
    CROP_TRADE: {
      MAIN: '/mypage/crop-trade',
      VERIFY_LOCATION: '/mypage/crop-trade/verify-location',
      SALES_HISTORY: '/mypage/crop-trade/sales-history',
      PURCHASE_HISTORY: '/mypage/crop-trade/purchase-history',
      WISH_LIST: '/mypage/crop-trade/wish-list',
    },
    GARDEN_MANAGEMENT: {
      MY_GARDEN: '/mypage/my-garden',
    },
    WHISPERS: {
      MAIN: '/mypage/whispers',
      WRITTEN_POSTS: '/mypage/whispers/written-posts',
      COMMENTED_POSTS: '/mypage/whispers/commented-posts',
      LIKED_POSTS: '/mypage/whispers/liked-posts',
    },
  },
  SETTINGS: '/settings',
};
