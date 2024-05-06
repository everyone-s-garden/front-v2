import {
  queryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import whisperAPI from './api';
import { Comment, Post } from '@/pages/Community/types';
import { useWhisperStore } from '@/stores/whisperStore';

export const whisperQueries = {
  all: () => ['whisper'] as const,
  details: () => [...whisperQueries.all(), 'detail'],
  detail: (id: number) =>
    queryOptions({
      queryKey: [...whisperQueries.details(), id],
      queryFn: () => whisperAPI.getPost(id),
    }),
  comments: (id: number) => [...whisperQueries.all(), id, 'comments'],
};

export const useGetAllPosts = () => {
  const params = useWhisperStore((state) => state.params);

  return useInfiniteQuery({
    queryKey: [whisperQueries.all(), params],
    queryFn: ({ pageParam }) =>
      whisperAPI.getAllPosts({ ...pageParam, ...params }),
    initialPageParam: {
      offset: 0,
      limit: 6,
    },
    getNextPageParam: (...pages) => {
      const [data, , params] = pages;

      if (data.postInfos.length < 6) {
        return undefined;
      }

      return {
        ...params,
        offset: (params.offset || 0) + 6,
      };
    },
    select(data) {
      const posts = data.pages.reduce<Post[]>(
        (acc, item) => acc.concat(item.postInfos),
        [],
      );

      return posts;
    },
  });
};

export const useGetPost = (id: number) => {
  return useQuery(whisperQueries.detail(id));
};

export const useGetComments = (id: number) => {
  const params = useWhisperStore((state) => state.commentsParam);

  return useInfiniteQuery({
    queryKey: [whisperQueries.comments(id), params],
    queryFn: ({ pageParam }) =>
      whisperAPI.getComments(id, { ...pageParam, ...params }),
    initialPageParam: {
      offset: 0,
      limit: 6,
    },
    getNextPageParam: (...pages) => {
      const [data, , params] = pages;

      if (data.parents.length < 6) {
        return undefined;
      }

      return {
        ...params,
        offset: (params.offset || 0) + 6,
      };
    },
    select(data) {
      const comments = data.pages.reduce<Comment[]>(
        (acc, item) => acc.concat(item.parents),
        [],
      );

      return comments;
    },
  });
};
