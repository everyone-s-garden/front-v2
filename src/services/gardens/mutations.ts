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
  const { mutate: mutateLikeGarden } = useMutation({
    mutationFn: ({
      type,
      gardenLikeId,
    }: {
      type: 'like' | 'cancel';
      gardenLikeId?: number | undefined;
    }) => gardensAPI.likeGarden(type, id, gardenLikeId),
    onMutate: () => {
      if (liked) setLiked(false);
      else setLiked(true);
    },
    onError: () => {
      if (liked) setLiked(false);
      else setLiked(true);
      alert('찜하기/찜하기 취소가 실패했습니다.');
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [...gardensQuery.details(), id],
      });
    },
  });

  return { mutateLikeGarden };
};
