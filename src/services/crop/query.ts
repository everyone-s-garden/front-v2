import { queryOptions, useQuery } from '@tanstack/react-query';
import cropAPI from './api';

export const cropQueries = {
  all: () => ['crops'] as const,
  monthCrops: () =>
    queryOptions({
      queryKey: [...cropQueries.all(), 'month'],
      queryFn: cropAPI.getMonthCrops,
    }),
};

export const useGetMonthCrops = () => {
  return useQuery(cropQueries.monthCrops());
};
