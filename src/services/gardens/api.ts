import apiClient from '@/api/apiClient';

const gardensApi = {
  getEveryCrops: async () => {
    const response = await apiClient.get('/v2/gardens/all?pageNumber=0');

    return response.data;
  },
};

export default gardensApi;
