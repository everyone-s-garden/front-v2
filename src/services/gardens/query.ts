import { queryOptions, useQuery } from '@tanstack/react-query';
import cropsApi from './api';

export const gardensQuery = {
  all: () => ['crops'] as const,
  datails: () => [...gardensQuery.all(), 'detail'],

  everyGarden: () =>
    queryOptions({
      queryKey: [...gardensQuery.all()],
      queryFn: () => cropsApi.getEveryGardens(),
    }),

  individualGarden: (id: number | null) =>
    queryOptions({
      queryKey: [...gardensQuery.datails(), id],
      queryFn: () => cropsApi.getIndividualGarden(id),
    }),
};

export const useGetEveryGardens = () => {
  return useQuery(gardensQuery.everyGarden());
};

export const useGetIndividualGarden = (id: number | null) => {
  return useQuery(gardensQuery.individualGarden(id));
};
