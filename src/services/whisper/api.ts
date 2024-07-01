import apiClient from '@/api/apiClient';
import { Comments, Post, PostDetail } from '@/pages/Community/types';

interface PostList {
  postInfos: Post[];
}

interface Param {
  offset?: number;
  limit?: number;
}

interface PostParam extends Param {
  searchContent?: string;
  postType?: 'INFORMATION_SHARE' | 'GARDEN_SHOWCASE' | 'QUESTION' | 'ETC' | '';
  orderBy?: 'COMMENT_COUNT' | 'RECENT_DATE' | 'LIKE_COUNT' | 'OLDER_DATE' | '';
}

interface CommentParam extends Param {
  orderBy?: 'RECENT_DATE' | 'LIKE_COUNT' | 'OLDER_DATE' | '';
}

const whisperAPI = {
  getAllPosts: async (pageParam: PostParam): Promise<PostList> => {
    const orderBy = pageParam.orderBy || 'RECENT_DATE';
    const response = await apiClient.get(`/v1/posts`, {
      params: { ...pageParam, orderBy },
    });

    return response.data;
  },
  getAllPopularPosts: async (pageParam: Param): Promise<PostList> => {
    const response = await apiClient.get(`/v1/posts/popular`, {
      params: { ...pageParam, hour: 24 },
    });

    return response.data;
  },
  getProfilePosts: async (
    pageParam: Param,
    userId: string,
  ): Promise<PostList> => {
    const response = await apiClient.get(`/v1/posts/author/${userId}`, {
      params: { ...pageParam },
    });

    return response.data;
  },
  getPost: async (postId: number): Promise<PostDetail> => {
    const response = await apiClient.get(`/v1/posts/${postId}`);

    return response.data;
  },
  createPost: async (data: FormData): Promise<unknown> => {
    const res = await apiClient.post(`v1/posts`, data);

    return res;
  },
  getComments: async (
    postId: number,
    params: CommentParam,
  ): Promise<Comments> => {
    const orderBy = params.orderBy || 'RECENT_DATE';
    const response = await apiClient.get(`/v1/posts/${postId}/comments`, {
      params: { ...params, orderBy },
    });

    return response.data;
  },
  createLikePost: async (postId: number): Promise<void> => {
    return await apiClient.post(`/v1/posts/${postId}/likes`);
  },
  deleteLikePost: async (postId: number): Promise<void> => {
    return await apiClient.delete(`/v1/posts/${postId}/likes`);
  },
  createLikeComment: async (commentId: number): Promise<void> => {
    return await apiClient.post(`/v1/posts/comments/${commentId}/likes`);
  },
  deleteLikeComment: async (commentId: number): Promise<void> => {
    return await apiClient.delete(`/v1/posts/comments/${commentId}/likes`);
  },
  createComment: async ({
    postId,
    content,
    parentCommentId,
  }: {
    postId: number;
    content: string;
    parentCommentId: number | null;
  }): Promise<void> => {
    return await apiClient.post(`/v1/posts/${postId}/comments`, {
      content,
      parentCommentId,
    });
  },
};

export default whisperAPI;
