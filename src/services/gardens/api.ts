import apiClient from '@/api/apiClient';

const gardensApi = {
  getEveryGardens: async () => {
    const response = await apiClient.get('/v2/gardens/all?pageNumber=0');

    return response.data;
  },

  getIndividualGarden: async (id: number | null) => {
    const response = await apiClient.get(`/v2/gardens/${id}`);

    return response.data;
  },
};

export default gardensApi;
