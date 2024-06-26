import apiClient from '@/api/apiClient';
import { whisperPageParams } from './type';

const nearByBasePath = '/v2/gardens';
const cropTradeBasePath = '/v1/my/crops';
const whisperBasePath = '/v1/my/posts';
export const nearByGardenAPI = {
  getRecentPosts: async () => {
    const res = await apiClient.get(`/v2/gardens/recent`);
    return res.data;
  },
  getLikePosts: async (nextGardenId: number) => {
    const res = await apiClient.get(
      `${nearByBasePath}/likes?nextGardenId=${nextGardenId}`,
    );
    return res.data;
  },

  getMyPosts: async (nextGardenId: number) => {
    const res = await apiClient.get(
      `${nearByBasePath}/mine?nextGardenId=${nextGardenId}`,
    );
    console.log('res data', res.data);

    return res.data;
  },
};

export const cropTradeAPI = {
  getSalesLists: async () => {
    const res = await apiClient.get(`${cropTradeBasePath}?offset=0&limit=10`);
    return res.data;
  },
  getPurchaseLists: async () => {
    const res = await apiClient.get(
      `${cropTradeBasePath}/buy?offset=0&limit=10`,
    );
    return res.data;
  },
  getBookmarkLists: async () => {
    const res = await apiClient.get(
      `${cropTradeBasePath}/bookmarks?offset=0&limit=10`,
    );
    return res.data;
  },
};

export const myManagedGardenAPI = {
  getMyManagedGarden: async () => {
    const res = await apiClient.get(
      `/v2/gardens/my-managed?nextMyManagedGardenId=0`,
    );
    return res.data;
  },
};

export const whisperAPI = {
  getMyPosts: async ({ offset, limit }: whisperPageParams) => {
    const res = await apiClient.get(
      `${whisperBasePath}?offset=${offset}&limit=${limit}`,
    );
    return res.data;
  },
  getCommentedPosts: async ({ offset, limit }: whisperPageParams) => {
    const res = await apiClient.get(
      `${whisperBasePath}/comments?offset=${offset}&limit=${limit}`,
    );
    return res.data;
  },
  getLikePosts: async ({ offset, limit }: whisperPageParams) => {
    const res = await apiClient.get(
      `${whisperBasePath}/likes?offset=${offset}&limit=${limit}`,
    );
    return res.data;
  },
};

export const deletePost = async (path: string, id: number) => {
  const res = await apiClient.delete(`${path}/${id}`);
  return res;
};

export const likePost = async (id: number) => {
  const res = await apiClient.post(`/v2/gardens/${id}/likes`);
  return res.data;
};

export const bookmarkPost = async (id: number) => {
  const res = await apiClient.post(`/v1/crops/posts/${id}/bookmarks`);
  return res.data;
};

export const postUserFeedback = async (data: FormData) => {
  const res = await apiClient.post('/v1/feedbacks', data);
  return res.status;
};
