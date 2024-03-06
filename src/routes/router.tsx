import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/pages';
import Layout from './Layout';
import { PATH } from './constants';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: PATH.MAIN,
        element: <MainPage />,
      },
      {
        path: PATH.ERROR,
        element: <div>에러</div>,
      },
    ],
  },
]);

export default router;