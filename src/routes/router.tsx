import { createBrowserRouter } from 'react-router-dom';
import { CommunityMain, GardenEdit, Main, MyGardenEdit } from '@/pages';
import CommunityDetail from '../pages/Community/CommunityDetail/CommunityDetail';
import Layout from './Layout';
import { PATH } from './constants';

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
    ],
  },
]);

export default router;
