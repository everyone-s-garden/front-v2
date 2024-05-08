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
  getPost: async (postId: number): Promise<PostDetail> => {
    const response = await apiClient.get(`/v1/posts/${postId}`);

    return response.data;
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
};

export default whisperAPI;
