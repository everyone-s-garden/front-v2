import { createBrowserRouter } from 'react-router-dom';
import {
  CommentedPosts,
  CropTrade,
  FavoritedGardens,
  GardenEdit,
  LikedPosts,
  Main,
  MyGardenEdit,
  MyPage,
  MyPost,
  NearByGardensInfo,
  PurchaseHistory,
  RecentlyViewedGardens,
  SalesHistory,
  Settings,
  VerifyLocation,
  Whispers,
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
import GuestRoute from './GuestRoute';
import HiddenHeaderLayout from './HiddenHeaderLayout';
import Layout from './Layout';
import { PATH } from './constants';

const { CHAT, COMMUNITY, ERROR, LOGIN, MAIN, MAP, MYPAGE, SETTINGS, REPORT } =
  PATH;

const router = createBrowserRouter([
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
        path: PATH.MYPAGE.MAIN,
        element: <MyPage />,
      },
      {
        path: SETTINGS,
        element: <Settings />,
      },
      {
        path: MYPAGE.NEARBY_GARDENS_INFO.MAIN,
        element: <NearByGardensInfo />,
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
            path: MYPAGE.NEARBY_GARDENS_INFO.GARDEN_DIARY,
            element: <GardenDiary />,
          },
        ],
      },

      {
        path: MYPAGE.CROP_TRADE.MAIN,
        element: <CropTrade />,
        children: [
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
        ],
      },
      {
        path: MYPAGE.WHISPERS.MAIN,
        element: <Whispers />,
        children: [
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
        ],
      },
      {
        path: COMMUNITY.MAIN,
        element: <CommunityMain />,
      },
      {
        path: COMMUNITY.DETAIL,
        element: <CommunityDetail />,
      },

      // NOTE: 로그인하지 않은 사용자만 접근 가능한 페이지
      {
        element: <GuestRoute />,
        children: [
          {
            path: LOGIN.MAIN,
            element: <Login />,
          },
        ],
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
            path: MYPAGE.NEARBY_GARDENS_INFO.MAIN,
            element: <NearByGardensInfo />,
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
                path: MYPAGE.NEARBY_GARDENS_INFO.RECENTLY_VIEWED_GARDENS,
                element: <RecentlyViewedGardens />,
              },
            ],
          },

          {
            path: MYPAGE.CROP_TRADE.MAIN,
            element: <CropTrade />,
            children: [
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
            ],
          },
          {
            path: MYPAGE.WHISPERS.MAIN,
            element: <Whispers />,
            children: [
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
            ],
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
