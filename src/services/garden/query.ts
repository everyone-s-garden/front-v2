import { queryOptions, useMutation, useQuery } from '@tanstack/react-query';
import gardenAPI from './api';

export const gardenQueries = {
  all: () => ['garden'] as const,
  gardenByName: (gardenName: string) =>
    queryOptions({
      queryKey: [...gardenQueries.all(), 'name', gardenName],
      queryFn: () => gardenAPI.getGardenByName(gardenName),
    }),
};

export const useGetGardenByName = (gardenName: string) => {
  return useQuery(gardenQueries.gardenByName(gardenName));
};

export const useCreateGarden = () => {
  return useMutation({ mutationFn: gardenAPI.createGarden });
};

export const useCreateMyGarden = () => {
  return useMutation({ mutationFn: gardenAPI.createMyGarden });
};
