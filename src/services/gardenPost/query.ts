import { queryOptions, useQuery } from '@tanstack/react-query';
import gardenPostAPI from './api';

export const gardenPostQueries = {
  all: () => ['gardenPosts'] as const,
  recentPosts: () =>
    queryOptions({
      queryKey: [...gardenPostQueries.all(), 'recent'],
      queryFn: () => gardenPostAPI.getRecentGardenPosts(),
    }),
};

export const useGetRecentGardenPosts = () => {
  return useQuery(gardenPostQueries.recentPosts());
};
