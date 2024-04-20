import { QueryClient, useMutation } from '@tanstack/react-query';
import gardensApi from './api';
import { gardensQuery } from './query';

export const useLikeGarden = (id: number | null) => {
  const queryClient = new QueryClient();
  const likeGardenMutation = useMutation({
    mutationFn: () => gardensApi.likeGarden(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...gardensQuery.datails(), id],
      });
    },
  });

  const mutateLikeGarden = likeGardenMutation.mutate;

  return { mutateLikeGarden };
};
