import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import chatAPI from './api';

export const chatQueries = {
  all: () => ['chat'] as const,
  gardenChatRooms: () => [...chatQueries.all(), 'gardenChatRooms'] as const,
};

export const useCreateGardenChatRoom = () => {
  return useMutation({
    mutationFn: chatAPI.createGardenChatRoom,
  });
};

export const useEnterGardenChatRoom = () => {
  return useMutation({
    mutationFn: chatAPI.enterGardenChatRoom,
  });
};

export const useRegisterGardenChatSession = () => {
  return useMutation({
    mutationFn: chatAPI.registerGardenChatSession,
  });
};

export const useGetGardenChatRooms = () => {
  return useQuery({
    queryKey: chatQueries.gardenChatRooms(),
    queryFn: chatAPI.getGardenChatRooms,
  });
};

export const useGetGardenChatContents = ({ roomId }: { roomId: number }) => {
  return useInfiniteQuery({
    queryKey: [chatQueries.all(), { roomId }],
    queryFn: ({ pageParam = 0 }) =>
      chatAPI.getGardenChatContents({ roomId, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNext ? allPages.length : undefined;
    },
  });
};

export const useDeleteGardenChatRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: chatAPI.deleteGardenChatRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: chatQueries.gardenChatRooms(),
      });
    },
  });
};
