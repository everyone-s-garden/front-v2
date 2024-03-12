import apiClient from '@/api/apiClient';

const userAPI = {
  getUserInfo: async (id: number) => {
    const response = await apiClient.get(`/members/${id}`);

    return response.data;
  },
};

export default userAPI;
