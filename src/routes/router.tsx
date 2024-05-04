import { createBrowserRouter } from 'react-router-dom';
import {
  Chat,
  ChatContent,
  CommunityEdit,
  CommunityMain,
  GardenEdit,
  Main,
  MyGardenEdit,
  StartContent,
} from '@/pages';
import CommunityDetail from '../pages/Community/CommunityDetail/CommunityDetail';
import Layout from './Layout';
import { PATH } from './constants';
import Map from '@/pages/Map/Map';

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
