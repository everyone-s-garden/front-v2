import { Navigate, Outlet } from 'react-router-dom';
import { PATH } from './constants';
import useLoginStore from '@/stores/useLoginStore';

const GuestRoute = () => {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  return !isLoggedIn ? <Outlet /> : <Navigate to={PATH.MAIN} replace={true} />;
};

export default GuestRoute;
