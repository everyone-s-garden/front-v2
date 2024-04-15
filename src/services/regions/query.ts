import { queryOptions, useQuery } from '@tanstack/react-query';
import regionsApi from './api';

export const regionsQuery = {
  all: () => ['regions'] as const,
  datails: () => [...regionsQuery.all(), 'detail'],

  searchRegions: (address: string) =>
    queryOptions({
      queryKey: [...regionsQuery.all(), address],
      queryFn: () => regionsApi.searchRegions(address),
    }),
};

export const useGetSearchRegions = (address: string) => {
  return useQuery(regionsQuery.searchRegions(address));
};
