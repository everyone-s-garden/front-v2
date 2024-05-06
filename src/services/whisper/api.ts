import apiClient from '@/api/apiClient';
import { Comments, Post, PostDetail } from '@/pages/Community/types';

interface PostList {
  postInfos: Post[];
}

interface Param {
  offset?: number;
  limit?: number;
  orderBy?: 'COMMENT_COUNT' | 'RECENT_DATE' | 'LIKE_COUNT' | 'OLDER_DATE' | '';
}

interface PageParam extends Param {
  searchContent?: string;
  hour?: number;
  postType?: 'INFORMATION_SHARE' | 'GARDEN_SHOWCASE' | 'QUESTION' | 'ETC' | '';
}

const whisperAPI = {
  getAllPosts: async (pageParam: PageParam): Promise<PostList> => {
    const orderBy = pageParam.orderBy || 'RECENT_DATE';
    const response = await apiClient.get(`/v1/posts`, {
      params: { ...pageParam, orderBy },
    });

    return response.data;
  },
  getPost: async (postId: number): Promise<PostDetail> => {
    const response = await apiClient.get(`/v1/posts/${postId}`);

    return response.data;
  },
  getComments: async (postId: number, params: Param): Promise<Comments> => {
    const orderBy = params.orderBy || 'RECENT_DATE';
    const response = await apiClient.get(`/v1/posts/${postId}/comments`, {
      params: { ...params, orderBy },
    });

    return response.data;
  },
};

export default whisperAPI;
