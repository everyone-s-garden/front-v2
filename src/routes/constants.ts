export const PATH = {
  MAIN: '/',
  LOGIN: {
    MAIN: '/login',
    REDIRECT_URI_KAKAO: '/login/oauth2/kakao',
    REDIRECT_URI_NAVER: '/login/oauth2/naver',
  },
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
};
