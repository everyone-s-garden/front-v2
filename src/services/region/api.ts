import apiClient from '@/api/apiClient';

interface Region {
  locationSearchResponses: {
    position: string;
    latitude: number;
    longitude: number;
  }[];
}

const regionAPI = {
  getRegion: async (address: string): Promise<Region> => {
    if (!address.trim()) {
      return { locationSearchResponses: [] };
    }

    const response = await apiClient.get(`/v1/regions`, {
      params: { address, offset: 0, limit: 20 },
    });

    return response.data;
  },
};

export default regionAPI;
