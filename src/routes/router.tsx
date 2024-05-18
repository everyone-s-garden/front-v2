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
} from '@/pages';
import Layout from './Layout';
import { PATH } from './constants';
import Login from '@/pages/Login/Login';
import Map from '@/pages/Map/Map';
import MapReport from '@/pages/Map/MapReport/MapReport';
import Redirection from '@/pages/Redirection/Redirection';

const { NEARBY_GARDENS_INFO, CROP_TRADE, WHISPERS, GARDEN_MANAGEMENT } =
  PATH.MYPAGE;

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: PATH.MAIN,
        element: <Main />,
      },
      {
        path: PATH.ERROR,
        element: <div>에러</div>,
      },
      {
        path: PATH.LOGIN.MAIN,
        element: <Login />,
      },
      {
        path: PATH.LOGIN.REDIRECT_URI_KAKAO,
        element: <Redirection type="kakao" />,
      },
      {
        path: PATH.LOGIN.REDIRECT_URI_NAVER,
        element: <Redirection type="naver" />,
      },
      {
        path: PATH.MAP.MAIN,
        element: <Map />,
      },
      {
        path: PATH.MAP.REPORT,
        element: <MapReport />,
      },
      {
        path: PATH.MAP.CREATE_GARDEN,
        element: <GardenEdit />,
      },
      {
        path: PATH.MAP.CREATE_MY_GARDEN,
        element: <MyGardenEdit />,
      },
      {
        path: PATH.MYPAGE.MAIN,
        element: <MyPage />,
      },
      {
        path: PATH.SETTINGS,
        element: <Settings />,
      },
      {
        path: NEARBY_GARDENS_INFO.MAIN,
        element: <NearByGardensInfo />,
        children: [
          {
            path: NEARBY_GARDENS_INFO.FAVORITED_GARDENS,
            element: <FavoritedGardens />,
          },
          {
            path: NEARBY_GARDENS_INFO.MY_POSTS,
            element: <MyPost />,
          },
          {
            path: NEARBY_GARDENS_INFO.RECENTLY_VIEWED_GARDENS,
            element: <RecentlyViewedGardens />,
          },
        ],
      },
      {
        path: GARDEN_MANAGEMENT.MY_GARDEN,
        element: <GardenManagement />,
        children: [
          {
            path: GARDEN_MANAGEMENT.MY_GARDEN,
            element: <MyGarden />,
          },
        ],
      },
      {
        path: CROP_TRADE.MAIN,
        element: <CropTrade />,
        children: [
          {
            path: CROP_TRADE.PURCHASE_HISTORY,
            element: <PurchaseHistory />,
          },
          {
            path: CROP_TRADE.SALES_HISTORY,
            element: <SalesHistory />,
          },
          {
            path: CROP_TRADE.VERIFY_LOCATION,
            element: <VerifyLocation />,
          },
          {
            path: CROP_TRADE.WISH_LIST,
            element: <WishList />,
          },
        ],
      },
      {
        path: WHISPERS.MAIN,
        element: <Whispers />,
        children: [
          {
            path: WHISPERS.COMMENTED_POSTS,
            element: <CommentedPosts />,
          },
          {
            path: WHISPERS.LIKED_POSTS,
            element: <LikedPosts />,
          },
          {
            path: WHISPERS.WRITTEN_POSTS,
            element: <WrittenPosts />,
          },
        ],
      },
      {
        path: PATH.COMMUNITY.MAIN,
        element: <CommunityMain />,
      },
      {
        path: PATH.COMMUNITY.DETAIL,
        element: <CommunityDetail />,
      },
      {
        path: PATH.COMMUNITY.CREATE,
        element: <CommunityEdit />,
      },
      {
        path: PATH.CHAT.MAIN,
        element: <Chat />,
        children: [
          {
            index: true,
            element: <StartContent />,
          },
          {
            path: PATH.CHAT.ROOM,
            element: <ChatContent />,
          },
        ],
      },
    ],
  },
]);

export default router;
