import apiClient from '@/api/apiClient';

interface GardenByName {
  gardenSearchResponses: {
    gardenId: number;
    gardenName: string;
    address: string;
  }[];
}

const gardenAPI = {
  getGardenByName: async (gardenName: string): Promise<GardenByName> => {
    if (!gardenName.trim()) {
      return { gardenSearchResponses: [] };
    }

    const response = await apiClient.get(`v2/gardens`, {
      params: { gardenName, pageNumber: 0 },
    });

    return response.data;
  },
  createGarden: async (gardenData: FormData) => {
    const response = await apiClient.post(`v2/gardens`, gardenData);

    return response.data;
  },
  createMyGarden: async (gardenData: FormData) => {
    const response = await apiClient.post(`v2/gardens/my-managed`, gardenData);

    return response.data;
  },
};

export default gardenAPI;
