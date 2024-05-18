import { queryOptions, useQuery } from '@tanstack/react-query';
import regionAPI from './api';

export const regionQueries = {
  all: () => ['region'] as const,
  location: (address: string) =>
    queryOptions({
      queryKey: [...regionQueries.all(), 'location', address],
      queryFn: () => regionAPI.getRegion(address),
    }),
};

export const useGetLocation = (address: string) => {
  return useQuery(regionQueries.location(address));
};
