import { ChatReport, DefaultReport } from './types';
import apiClient from '@/api/apiClient';

const reportAPI = {
  reportGarden: async ({ id, values }: DefaultReport) => {
    return await apiClient.post(`/v1/reports/gardens/${id}`, values);
  },
  reportCrop: async ({ id, values }: DefaultReport) => {
    return await apiClient.post(`/v1/reports/crop-posts/${id}`, values);
  },
  reportCommunityPost: async ({ id, values }: DefaultReport) => {
    return await apiClient.post(`/v1/reports/posts/${id}`, values);
  },
  reportCommunityComment: async ({ id, values }: DefaultReport) => {
    return await apiClient.post(`/v1/reports/comments/${id}`, values);
  },
  reportChat: async ({ id, values }: ChatReport) => {
    return await apiClient.post(`/garden-chats/${id}/report`, values);
  },
};

export default reportAPI;
