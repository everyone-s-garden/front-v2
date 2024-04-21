import { createBrowserRouter } from 'react-router-dom';
import {
  CommunityEdit,
  CommunityMain,
  GardenEdit,
  Main,
  MyGardenEdit,
} from '@/pages';
import CommunityDetail from '../pages/Community/CommunityDetail/CommunityDetail';
import Layout from './Layout';
import { PATH } from './constants';
import Login from '@/pages/Login/Login';
import Map from '@/pages/Map/Map';
import Redirection from '@/pages/Redirection/Redirection';

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
        element: <Redirection />,
      },
      {
        path: PATH.LOGIN.REDIRECT_URI_NAVER,
        element: <Redirection />,
      },
      {
        path: PATH.MAP.MAIN,
        element: <Map />,
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
    ],
  },
]);

export default router;
