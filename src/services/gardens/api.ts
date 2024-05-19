import apiClient from '@/api/apiClient';

const gardensAPI = {
  getEveryGardens: async () => {
    const response = await apiClient.get('/v2/gardens/all?pageNumber=0');

    return response.data;
  },

  getIndividualGarden: async (id: number | null) => {
    const response = await apiClient.get(`/v2/gardens/${id}`);

    return response.data;
  },

  getGardensInBounds: async (
    type: 'ALL' | 'PUBLIC' | 'PRIVATE',
    map: naver.maps.Map | null,
  ) => {
    if (!map) return;
    const bounds = map.getBounds();

    const response = await apiClient.get(
      `/v2/gardens/by-complexes?gardenType=${type}&pageNumber=0&startLat=${bounds.minY()}&startLong=${bounds.minX()}&endLat=${bounds.maxY()}&endLong=${bounds.maxX()}`,
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
