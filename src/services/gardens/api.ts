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

  likeGarden: async (id: number | undefined) => {
    const response = await apiClient.post(
      '/v2/gardens/likes',
      {
        gardenId: id,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  },
};

export default gardensApi;
