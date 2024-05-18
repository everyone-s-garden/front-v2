import axios, { AxiosError } from 'axios';
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

apiClient.interceptors.response.use(
  (response) => response,
  (
    error: AxiosError<{
      type: string;
      title: string;
      status: number;
      detail: string;
      instance: string;
    }>,
  ) => {
    alert(error.response?.data.detail);

    return Promise.reject(error);
  },
);

export default apiClient;
