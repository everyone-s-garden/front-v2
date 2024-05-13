import { queryOptions, useQuery } from '@tanstack/react-query';
import gardensApi from './api';

export const gardensQuery = {
  all: () => ['gardens'] as const,
  details: () => [...gardensQuery.all(), 'detail'],

  everyGarden: () =>
    queryOptions({
      queryKey: [...gardensQuery.all()],
      queryFn: () => gardensApi.getEveryGardens(),
    }),

  individualGarden: (id: number | null) =>
    queryOptions({
      queryKey: [...gardensQuery.details(), id],
      queryFn: () => gardensApi.getIndividualGarden(id),
    }),
};

export const useGetEveryGardens = () => {
  return useQuery(gardensQuery.everyGarden());
};

export const useGetIndividualGarden = (id: number | null) => {
  return useQuery(gardensQuery.individualGarden(id));
};
