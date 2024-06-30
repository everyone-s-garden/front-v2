import {
  InfiniteData,
  queryOptions,
  useInfiniteQuery,
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
import { BaseGardenItem, Whisper } from '@/pages/MyPage/type';

interface LastPage {
  hasNext: boolean;
  nextGardenId?: number;
  gardenLikeByMemberResponses?: BaseGardenItem[];
  gardenMineResponses?: BaseGardenItem[];
}
interface WhisperGetNextPageParams {
  data: { postInfos: Whisper[] };
  allPages: { postInfos: Whisper[] }[];
  pageParams: { offset: number; limit: number };
}

const nearByGetNextPageParam = (lastPage: LastPage) => {
  if (!lastPage.hasNext) {
    return undefined;
  }
  return lastPage.nextGardenId;
};

const nearBySelect = (data: InfiniteData<LastPage>): BaseGardenItem[] => {
  return data.pages.reduce<BaseGardenItem[]>(
    (acc, page) =>
      acc.concat(
        page.gardenMineResponses || page.gardenLikeByMemberResponses || [],
      ),
    [],
  );
};

const whisperGetNextPageParam = ({
  data,
  allPages,
  pageParams,
}: WhisperGetNextPageParams) => {
  if (data.postInfos.length < 10) {
    return undefined;
  }
  return {
    ...pageParams,
    offset: (pageParams.offset || 0) + 10,
  };
};

const whisperSelect = (
  data: InfiniteData<{ postInfos: Whisper[] }>,
): Whisper[] => {
  return data.pages.reduce<Whisper[]>(
    (acc, item) => acc.concat(item.postInfos),
    [],
  );
};
export const nearByGardenQueries = {
  all: () => ['nearby'] as const,
  recentPosts: () =>
    queryOptions({
      queryKey: [...nearByGardenQueries.all(), 'recent'],
      queryFn: () => nearByGardenAPI.getRecentPosts(),
    }),
};

export const useGetNearByGardenLikeLists = () => {
  return useInfiniteQuery({
    queryKey: [...nearByGardenQueries.all(), 'likes'],
    queryFn: ({ pageParam = 0 }) => nearByGardenAPI.getLikePosts(pageParam),
    initialPageParam: 0,
    getNextPageParam: nearByGetNextPageParam,
    select: nearBySelect,
  });
};
export const useGetNearByGardenRecentLists = () => {
  return useSuspenseQuery(nearByGardenQueries.recentPosts());
};

export const useGetNearByGardenMineLists = () => {
  return useInfiniteQuery({
    queryKey: [...nearByGardenQueries.all(), 'mine'],
    queryFn: ({ pageParam = 0 }) => nearByGardenAPI.getMyPosts(pageParam),
    initialPageParam: 0,
    getNextPageParam: nearByGetNextPageParam,
    select: nearBySelect,
  });
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

export const whisperKey = ['whisper'] as const;

export const useGetWhisperMyPosts = () => {
  return useInfiniteQuery({
    queryKey: [...whisperKey, 'myPosts'],
    queryFn: ({ pageParam }) => whisperAPI.getMyPosts(pageParam),
    initialPageParam: {
      offset: 0,
      limit: 10,
    },

    getNextPageParam: (data, allPages, pageParams) =>
      whisperGetNextPageParam({ data, allPages, pageParams }),
    select: whisperSelect,
  });
};
export const useGetWhisperLikePosts = () => {
  return useInfiniteQuery({
    queryKey: [...whisperKey, 'LikePosts'],
    queryFn: ({ pageParam }) => whisperAPI.getLikePosts(pageParam),
    initialPageParam: {
      offset: 0,
      limit: 10,
    },
    getNextPageParam: (data, allPages, pageParams) =>
      whisperGetNextPageParam({ data, allPages, pageParams }),
    select: whisperSelect,
  });
};
export const useGetCommentedPosts = () => {
  return useInfiniteQuery({
    queryKey: [...whisperKey, 'commentedPosts'],
    queryFn: ({ pageParam }) => whisperAPI.getCommentedPosts(pageParam),
    initialPageParam: {
      offset: 0,
      limit: 10,
    },
    getNextPageParam: (data, allPages, pageParams) =>
      whisperGetNextPageParam({ data, allPages, pageParams }),
    select: whisperSelect,
  });
};

const getQueryKeys = (path: string) => {
  if (path.includes('nearby')) return [...nearByGardenQueries.all(), 'mine'];
  if (path.includes('crop')) return cropTradeQueries.all();
  if (path.includes('my-garden')) return myManagedGardenQueries.all();
  if (path.includes('whisper')) return [...whisperKey, 'myPosts'];
};

const getPath = (path: string) => {
  if (path.includes('nearby')) return '/v2/gardens';
  if (path.includes('crop')) return '/v1/crops/posts';
  if (path.includes('my-garden')) return '/v2/gardens/my-managed';
  if (path.includes('whisper')) return '/v1/posts';
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
