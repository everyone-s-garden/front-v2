import { Navigate, Outlet } from 'react-router-dom';
import { PATH } from './constants';
import useLoginStore from '@/stores/useLoginStore';

const AuthRoute = () => {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={PATH.LOGIN.MAIN} replace={true} />
  );
};

export default AuthRoute;
