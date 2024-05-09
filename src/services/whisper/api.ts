import apiClient from '@/api/apiClient';
import { Post } from '@/pages/Community/types';

interface PostList {
  postInfos: Post[];
}

interface PageParam {
  searchContent?: string;
  offset?: number;
  limit?: number;
  hour?: number;
  postType?: 'INFORMATION_SHARE' | 'GARDEN_SHOWCASE' | 'QUESTION' | 'ETC' | '';
  orderBy?: 'COMMENT_COUNT' | 'RECENT_DATE' | 'LIKE_COUNT' | 'OLDER_DATE' | '';
}

const whisperAPI = {
  getAllPosts: async (pageParam: PageParam): Promise<PostList> => {
    const orderBy = pageParam.orderBy || 'RECENT_DATE';
    const response = await apiClient.get(`/v1/posts`, {
      params: { ...pageParam, orderBy },
    });

    return response.data;
  },
  getPost: async (postId: number): Promise<Post> => {
    const response = await apiClient.get(`/v1/posts/${postId}`);

    return response.data;
  },
  createPost: async (data: FormData): Promise<unknown> => {
    const res = await apiClient.post(`v1/posts`, data);

    return res;
  },
};

export default whisperAPI;
