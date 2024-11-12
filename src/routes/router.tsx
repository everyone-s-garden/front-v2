import { createBrowserRouter } from 'react-router-dom';
import {
  CommentedPosts,
  FavoritedGardens,
  GardenEdit,
  LikedPosts,
  Main,
  MyGardenEdit,
  MyPage,
  MyPost,
  PurchaseHistory,
  RecentlyViewedGardens,
  SalesHistory,
  Settings,
  VerifyLocation,
  WishList,
  WrittenPosts,
  CommunityDetail,
  Chat,
  ChatContents,
  CommunityEdit,
  CommunityMain,
  StartContent,
  Login,
  Redirection,
  Map,
  Report,
  GardenDiary,
} from '@/pages';
import AuthRoute from './AuthRoute';
import HiddenHeaderLayout from './HiddenHeaderLayout';
import Layout from './Layout';
import { PATH } from './constants';
import MyPageSubLayout from '@/pages/MyPage/MyPageSubLayout';
import Profile from '@/pages/Profile/Profile';

const { CHAT, COMMUNITY, ERROR, LOGIN, MAIN, MAP, MYPAGE, SETTINGS, REPORT } =
  PATH;

const router = createBrowserRouter([
  {
    path: LOGIN.MAIN,
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: MAIN,
        element: <Main />,
      },
      {
        path: ERROR,
        element: <div>에러</div>,
      },
      {
        path: LOGIN.REDIRECT_URI_KAKAO,
        element: <Redirection type="kakao" />,
      },
      {
        path: LOGIN.REDIRECT_URI_NAVER,
        element: <Redirection type="naver" />,
      },
      {
        path: MAP.MAIN,
        element: <Map />,
      },
      {
        path: SETTINGS,
        element: <Settings />,
      },
      {
        path: COMMUNITY.MAIN,
        element: <CommunityMain />,
      },
      {
        path: COMMUNITY.DETAIL,
        element: <CommunityDetail />,
      },
      {
        path: MYPAGE.PROFILE,
        element: <Profile />,
      },
      // NOTE: 로그인 시에만 접근 가능한 페이지
      {
        element: <AuthRoute />,
        children: [
          {
            path: MYPAGE.MAIN,
            element: <MyPage />,
          },
          {
            path: SETTINGS,
            element: <Settings />,
          },
          {
            path: CHAT.MAIN,
            element: <Chat />,
            children: [
              {
                index: true,
                element: <StartContent />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    // NOTE: 모바일 헤더 없는 페이지
    element: <HiddenHeaderLayout />,
    children: [
      // NOTE: 로그인 시에만 접근 가능한 페이지
      {
        element: <AuthRoute />,
        children: [
          {
            element: <MyPageSubLayout />,
            children: [
              {
                path: MYPAGE.NEARBY_GARDENS_INFO.FAVORITED_GARDENS,
                element: <FavoritedGardens />,
              },
              {
                path: MYPAGE.NEARBY_GARDENS_INFO.MY_POSTS,
                element: <MyPost />,
              },
              {
                path: MYPAGE.NEARBY_GARDENS_INFO.RECENTLY_VIEWED_GARDENS,
                element: <RecentlyViewedGardens />,
              },
              {
                path: MYPAGE.CROP_TRADE.PURCHASE_HISTORY,
                element: <PurchaseHistory />,
              },
              {
                path: MYPAGE.CROP_TRADE.SALES_HISTORY,
                element: <SalesHistory />,
              },
              {
                path: MYPAGE.CROP_TRADE.VERIFY_LOCATION,
                element: <VerifyLocation />,
              },
              {
                path: MYPAGE.CROP_TRADE.WISH_LIST,
                element: <WishList />,
              },
              {
                path: MYPAGE.WHISPERS.COMMENTED_POSTS,
                element: <CommentedPosts />,
              },
              {
                path: MYPAGE.WHISPERS.LIKED_POSTS,
                element: <LikedPosts />,
              },
              {
                path: MYPAGE.WHISPERS.WRITTEN_POSTS,
                element: <WrittenPosts />,
              },
              {
                path: MYPAGE.WHISPERS.GARDEN_DIARY,
                element: <GardenDiary />,
              },
            ],
          },
          {
            path: MAP.CREATE_GARDEN,
            element: <GardenEdit />,
          },
          {
            path: MAP.CREATE_MY_GARDEN,
            element: <MyGardenEdit />,
          },
          {
            path: COMMUNITY.CREATE,
            element: <CommunityEdit />,
          },
          {
            path: CHAT.MAIN,
            element: <Chat />,
            children: [
              {
                path: CHAT.ROOM,
                element: <ChatContents />,
              },
            ],
          },
          {
            path: REPORT,
            element: <Report />,
          },
        ],
      },
    ],
  },
]);

export default router;
