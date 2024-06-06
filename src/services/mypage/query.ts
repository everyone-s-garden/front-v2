import {
  queryOptions,
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import {
  cropTradeAPI,
  deletePost,
  myManagedGardenAPI,
  nearByGardenAPI,
  whisperAPI,
} from './api';

export const nearByGardenQueries = {
  all: () => ['nearByGardens'] as const,
  recentPosts: () =>
    queryOptions({
      queryKey: [...nearByGardenQueries.all(), 'recent'],
      queryFn: () => nearByGardenAPI.getRecentPosts(),
    }),

  likePosts: () =>
    queryOptions({
      queryKey: [...nearByGardenQueries.all(), 'likes'],
      queryFn: () => nearByGardenAPI.getLikePosts(),
    }),

  myPosts: () =>
    queryOptions({
      queryKey: [...nearByGardenQueries.all(), 'mine'],
      queryFn: () => nearByGardenAPI.getMyPosts(),
    }),
};

export const useGetNearByGardenLikeLists = () => {
  return useSuspenseQuery(nearByGardenQueries.likePosts());
};
export const useGetNearByGardenRecentLists = () => {
  return useSuspenseQuery(nearByGardenQueries.recentPosts());
};
export const useGetNearByGardenMineLists = () => {
  return useSuspenseQuery(nearByGardenQueries.myPosts());
};

export const cropTradeQueries = {
  all: () => ['cropTrade'] as const,
  salesLists: () =>
    queryOptions({
      queryKey: [...cropTradeQueries.all(), 'cropList'],
      queryFn: () => cropTradeAPI.getSalesLists(),
    }),
  purchaseLists: () =>
    queryOptions({
      queryKey: [...cropTradeQueries.all(), 'purchase'],
      queryFn: () => cropTradeAPI.getPurchaseLists(),
    }),
  bookmarkLists: () =>
    queryOptions({
      queryKey: [...cropTradeQueries.all(), 'bookmark'],
      queryFn: () => cropTradeAPI.getBookmarkLists(),
    }),
};

export const useGetSaleLists = () => {
  return useSuspenseQuery(cropTradeQueries.salesLists());
};
export const useGetPurchaseLists = () => {
  return useSuspenseQuery(cropTradeQueries.purchaseLists());
};
export const useGetBookmarkLists = () => {
  return useSuspenseQuery(cropTradeQueries.bookmarkLists());
};

export const myManagedGardenQueries = {
  all: () => ['myManagedGardens'] as const,
  myManagedGarden: () =>
    queryOptions({
      queryKey: [...myManagedGardenQueries.all(), 'myManangedGarden'],
      queryFn: () => myManagedGardenAPI.getMyManagedGarden(),
    }),
};
export const useGetMyManagedGarden = () => {
  return useSuspenseQuery(myManagedGardenQueries.myManagedGarden());
};

export const whisperQueries = {
  all: () => ['whisperQueries'] as const,
  myPosts: () =>
    queryOptions({
      queryKey: ['whisperMyPosts'],
      queryFn: () => whisperAPI.getMyPosts(),
    }),
  likePosts: () =>
    queryOptions({
      queryKey: ['whisperLikes'],
      queryFn: () => whisperAPI.getLikePosts(),
    }),
  commentedPosts: () =>
    queryOptions({
      queryKey: ['whisperCommentedPosts'],
      queryFn: () => whisperAPI.getCommentedPosts(),
    }),
};

export const useGetWhisperMyPosts = () => {
  return useSuspenseQuery(whisperQueries.myPosts());
};
export const useGetWhisperLikePosts = () => {
  return useSuspenseQuery(whisperQueries.likePosts());
};
export const useGetCommentedPosts = () => {
  return useSuspenseQuery(whisperQueries.commentedPosts());
};
const getQueryKeys = (path: string) => {
  if (path.includes('nearby')) return nearByGardenQueries.all();
  if (path.includes('crop')) return cropTradeQueries.all();
  if (path.includes('my-garden')) return myManagedGardenQueries.all();
};

const getPath = (path: string) => {
  if (path.includes('nearby')) return '/v2/gardens';
  if (path.includes('crop')) return '/v1/crops/posts';
  if (path.includes('my-garden')) return '/v2/gardens/my-managed';
  return '';
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ path, id }: { path: string; id: number }) =>
      deletePost(getPath(path), id),
    onSuccess: (_, variables) => {
      const { path } = variables;

      queryClient.invalidateQueries({ queryKey: getQueryKeys(path) });
    },
  });
};
