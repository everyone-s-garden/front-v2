import {
  queryOptions,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
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
  popular: () => [...whisperQueries.all(), 'popular'],
  profile: (userId: string) => [...whisperQueries.all(), 'profile', userId],
};

export const useGetAllPosts = () => {
  const params = useWhisperStore((state) => state.params);

  return useInfiniteQuery({
    queryKey: [...whisperQueries.all(), params],
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

export const useGetPopularPosts = () => {
  return useInfiniteQuery({
    queryKey: whisperQueries.popular(),
    queryFn: ({ pageParam }) => whisperAPI.getAllPopularPosts(pageParam),
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

export const useGetProfilePosts = (userId: string) => {
  return useInfiniteQuery({
    queryKey: whisperQueries.profile(userId),
    queryFn: ({ pageParam }) => whisperAPI.getProfilePosts(pageParam, userId),
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

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: whisperAPI.createPost,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: whisperQueries.all() });
    },
  });
};

export const useGetComments = (id: number) => {
  const params = useWhisperStore((state) => state.commentsParam);

  return useInfiniteQuery({
    queryKey: [...whisperQueries.comments(id), params],
    queryFn: ({ pageParam }) =>
      whisperAPI.getComments(id, { ...pageParam, ...params }),
    initialPageParam: {
      offset: 0,
      limit: 6,
    },
    getNextPageParam: (...pages) => {
      const [data, , params] = pages;

      if (data.mainComment.length < 6) {
        return undefined;
      }

      return {
        ...params,
        offset: (params.offset || 0) + 6,
      };
    },
    select(data) {
      const comments = data.pages.reduce<Comment[]>(
        (acc, item) => acc.concat(item.mainComment),
        [],
      );

      return comments;
    },
  });
};

export const useCreateLikePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: whisperAPI.createLikePost,
    onSuccess(_, postId) {
      queryClient.setQueryData(
        whisperQueries.detail(postId).queryKey,
        (oldData) => {
          if (!oldData) return;

          return {
            ...oldData,
            isLikeClick: !oldData.isLikeClick,
            likeCount: oldData.isLikeClick
              ? oldData.likeCount - 1
              : oldData.likeCount + 1,
          };
        },
      );

      queryClient.invalidateQueries({ queryKey: whisperQueries.all() });
    },
  });
};

export const useDeleteLikePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: whisperAPI.deleteLikePost,
    onSuccess(_, postId) {
      queryClient.setQueryData(
        whisperQueries.detail(postId).queryKey,
        (oldData) => {
          if (!oldData) return;

          return {
            ...oldData,
            isLikeClick: !oldData.isLikeClick,
            likeCount: oldData.isLikeClick
              ? oldData.likeCount - 1
              : oldData.likeCount + 1,
          };
        },
      );

      queryClient.invalidateQueries({ queryKey: whisperQueries.all() });
    },
  });
};

export const useCreateLikeComment = () => {
  const queryClient = useQueryClient();
  const postId = useLocation().pathname.split('/').pop();

  return useMutation({
    mutationFn: whisperAPI.createLikeComment,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: whisperQueries.comments(Number(postId)),
      });
    },
  });
};

export const useDeleteLikeComment = () => {
  const queryClient = useQueryClient();
  const postId = useLocation().pathname.split('/').pop();

  return useMutation({
    mutationFn: whisperAPI.deleteLikeComment,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: whisperQueries.comments(Number(postId)),
      });
    },
  });
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: whisperAPI.createComment,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: whisperQueries.all() });
    },
  });
};
