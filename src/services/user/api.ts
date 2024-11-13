import { MyInfo, OtherUserInfo } from './user';
import apiClient from '@/api/apiClient';

const userAPI = {
  getMyProfileInfo: async (): Promise<MyInfo> => {
    const response = await apiClient.get('/members/my');

    return response.data;
  },
  getUserInfo: async (id: number): Promise<OtherUserInfo> => {
    const response = await apiClient.get(`/members/${id}`);

    return response.data;
  },
};

export default userAPI;
