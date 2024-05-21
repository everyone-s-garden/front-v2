import apiClient from '@/api/apiClient';

const regionsApi = {
  searchRegions: async (address: string) => {
    const response = await apiClient.get(
      `/v1/regions?address=${address}&offset=0&limit=10`,
    );

    return response.data;
  },
};

export default regionsApi;
