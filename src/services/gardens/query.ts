import { queryOptions, useQuery } from '@tanstack/react-query';
import cropsApi from './api';

export const gardensQuery = {
  all: () => ['crops'] as const,

  everyCrops: () =>
    queryOptions({
      queryKey: [...gardensQuery.all()],
      queryFn: () => cropsApi.getEveryCrops(),
    }),
};

export const useGetEveryGardens = () => {
  return useQuery(gardensQuery.everyCrops());
};
