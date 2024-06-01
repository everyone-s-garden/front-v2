import axios, { AxiosError } from 'axios';
import tokenManager from '@/services/login/tokenManager';
import { ApiError } from '@/types/error';

const apiClient = axios.create({
  baseURL: '/api',
});

apiClient.interceptors.request.use(
  (config) => {
    if (config.url === '/v1/auth/refresh') {
      return config;
    }

    const accessToken = tokenManager.accessToken();

    if (accessToken) {
      config.headers['access-token'] = accessToken;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
    return Promise.reject(error.response?.data);
  },
);

export default apiClient;
