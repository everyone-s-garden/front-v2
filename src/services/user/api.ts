import apiClient from '@/api/apiClient';

const userAPI = {
  getMyProfileInfo: async () => {
    const response = await apiClient.get('/members/my');

    return response.data;
  },
  getUserInfo: async (id: number) => {
    const response = await apiClient.get(`/members/${id}`);

    return response.data;
  },
};

export default userAPI;
