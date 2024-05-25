import { queryOptions, useQuery } from '@tanstack/react-query';
import gardensAPI from './api';

export const gardensQuery = {
  all: () => ['gardens'] as const,
  details: () => [...gardensQuery.all(), 'detail'],

  everyGarden: () =>
    queryOptions({
      queryKey: [...gardensQuery.all()],
      queryFn: () => gardensAPI.getEveryGardens(),
    }),

  individualGarden: (id: number | null) =>
    queryOptions({
      queryKey: [...gardensQuery.details(), id],
      queryFn: () => gardensAPI.getIndividualGarden(id),
    }),
};

export const useGetEveryGardens = () => {
  return useQuery(gardensQuery.everyGarden());
};

export const useGetIndividualGarden = (id: number | null) => {
  return useQuery(gardensQuery.individualGarden(id));
};
