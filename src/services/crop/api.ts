import { MonthCrops } from './types';
import apiClient from '@/api/apiClient';

const cropAPI = {
  getMonthCrops: async (): Promise<MonthCrops> => {
    const response = await apiClient.get('/v1/crops');

    return response.data.cropsResponses;
  },
};

export default cropAPI;
