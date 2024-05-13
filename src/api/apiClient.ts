import axios from 'axios';
import tokenManager from '@/services/login/tokenManager';

const apiClient = axios.create({
  baseURL: '/api',
});

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = tokenManager.accessToken();

    if (accessToken) {
      config.headers['access-token'] = accessToken;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default apiClient;
