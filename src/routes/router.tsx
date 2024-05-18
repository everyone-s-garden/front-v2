import { createBrowserRouter } from 'react-router-dom';
import {
  CommentedPosts,
  CropTrade,
  FavoritedGardens,
  GardenEdit,
  GardenManagement,
  LikedPosts,
  Main,
  MyGarden,
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
  ChatContent,
  CommunityEdit,
  CommunityMain,
  StartContent,
  Login,
  Redirection,
  Map,
} from '@/pages';
import HiddenHeaderLayout from './HiddenHeaderLayout';
import Layout from './Layout';
import { PATH } from './constants';

const { CHAT, COMMUNITY, ERROR, LOGIN, MAIN, MAP, MYPAGE, SETTINGS } = PATH;

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
        path: LOGIN.MAIN,
        element: <Login />,
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
        ],
      },
      {
        path: MYPAGE.GARDEN_MANAGEMENT.MY_GARDEN,
        element: <GardenManagement />,
        children: [
          {
            path: MYPAGE.GARDEN_MANAGEMENT.MY_GARDEN,
            element: <MyGarden />,
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
      {
        path: COMMUNITY.CREATE,
        element: <CommunityEdit />,
      },
      {
        path: CHAT.MAIN,
        element: <Chat />,
        children: [
          {
            index: true,
            element: <StartContent />,
          },
          {
            path: CHAT.ROOM,
            element: <ChatContent />,
          },
        ],
      },
    ],
  },
  {
    element: <HiddenHeaderLayout />,
    children: [
      {
        path: MAP.CREATE_GARDEN,
        element: <GardenEdit />,
      },
      {
        path: MAP.CREATE_MY_GARDEN,
        element: <MyGardenEdit />,
      },
    ],
  },
]);

export default router;
