import axios from 'axios';
import { getItem } from '@/utils/session';

const apiClient = axios.create({
  baseURL: '/api',
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getItem('access_token');

    if (token) {
      config.headers['access-token'] = token;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default apiClient;
