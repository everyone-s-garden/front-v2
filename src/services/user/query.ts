import { queryOptions, useQuery } from '@tanstack/react-query';
import userAPI from './api';

export const userQueries = {
  all: () => ['users'] as const,
  myInfo: () =>
    queryOptions({
      queryKey: [...userQueries.all(), 'myInfo'],
      queryFn: () => userAPI.getMyProfileInfo(),
    }),
  infos: () => [...userQueries.all(), 'info'],
  info: (id: number) =>
    queryOptions({
      queryKey: [...userQueries.infos(), id],
      queryFn: () => userAPI.getUserInfo(id),
    }),
};

export const useGetUserInfo = (id: number) => {
  return useQuery(userQueries.info(id));
};

export const useGetMyProfileInfo = () => {
  return useQuery(userQueries.myInfo());
};
