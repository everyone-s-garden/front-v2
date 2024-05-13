import { QueryClient, useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import gardensAPI from './api';
import { gardensQuery } from './query';

export const useLikeGarden = (
  liked: boolean | undefined,
  id: number | undefined,
  setLiked: Dispatch<SetStateAction<boolean | undefined>>,
) => {
  const queryClient = new QueryClient();
  const likeGardenMutation = useMutation({
    mutationFn: (type: 'like' | 'cancel') => gardensAPI.likeGarden(type, id),
    onMutate: () => {
      if (liked) setLiked(false);
      else setLiked(true);
    },
    onError: () => {
      if (liked) setLiked(false);
      else setLiked(true);
      alert('찜하기가 실패했습니다.');
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [...gardensQuery.details(), id],
      });
    },
  });

  const mutateLikeGarden = likeGardenMutation.mutate;

  return { mutateLikeGarden };
};
