import apiClient from '@/api/apiClient';

const gardensAPI = {
  getEveryGardens: async (
    pageNumber: number,
  ): Promise<{
    gardenGetAllResponses: Garden[];
    hasNext: boolean;
  }> => {
    const response = await apiClient.get(
      `/v2/gardens/all?pageNumber=${pageNumber}`,
    );

    return response.data;
  },

  getIndividualGarden: async (id: number | null): Promise<GardenDetail> => {
    const response = await apiClient.get(`/v2/gardens/${id}`);

    return response.data;
  },

  getGardensInBounds: async (
    map: naver.maps.Map | null,
    type: 'ALL' | 'PUBLIC' | 'PRIVATE',
  ) => {
    if (!map) return;
    const bounds = map.getBounds();

    const response = await apiClient.get(
      `/v2/gardens/by-complexes/all?gardenType=${type}&startLat=${bounds.minY()}&startLong=${bounds.minX()}&endLat=${bounds.maxY()}&endLong=${bounds.maxX()}`,
    );

    return response.data;
  },

  getGardensInBoundWithScroll: async (
    type: 'ALL' | 'PUBLIC' | 'PRIVATE',
    page: number,
    startLat?: number,
    startLong?: number,
    endLat?: number,
    endLong?: number,
  ) => {
    const response = await apiClient.get(
      `/v2/gardens/by-complexes?gardenType=${type}&pageNumber=${page}&startLat=${startLat}&startLong=${startLong}&endLat=${endLat}&endLong=${endLong}`,
    );

    return response.data;
  },

  likeGarden: async (
    type: 'like' | 'cancel',
    id: number | undefined,
    gardenLikeId: number | undefined,
  ) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (type === 'like') {
      const response = await apiClient.post(`/v2/gardens/${id}/likes`, config);

      return response.data;
    } else {
      const response = await apiClient.delete(
        `/v2/gardens/likes/${gardenLikeId}`,
        config,
      );

      return response.data;
    }
  },
};

export default gardensAPI;
