import { GardenPost } from './types';
import apiClient from '@/api/apiClient';

const gardenPostAPI = {
  getRecentGardenPosts: async (id: number = 0): Promise<GardenPost[]> => {
    const response = await apiClient.get(
      `/v2/gardens/recent-created?memberId=${id}`,
    );

    return response.data.recentCreatedGardenResponses;
  },
};

export default gardenPostAPI;
