import { QueryClient, useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import gardensApi from './api';
import { gardensQuery } from './query';

export const useLikeGarden = (
  id: number | undefined,
  setLiked: Dispatch<SetStateAction<boolean>>,
) => {
  const queryClient = new QueryClient();
  const likeGardenMutation = useMutation({
    mutationFn: () => gardensApi.likeGarden(id),
    onMutate: async () => {
      setLiked(true);
    },
    onError: (error) => {
      setLiked(false);
      console.error('Error liking garden:', error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...gardensQuery.details(), id],
      });
    },
  });

  const mutateLikeGarden = likeGardenMutation.mutate;

  return { mutateLikeGarden };
};
