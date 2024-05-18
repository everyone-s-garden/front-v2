import tokenManager from './tokenManager';
import apiClient from '@/api/apiClient';

const loginAPI = {
  login: async (
    type: 'kakao' | 'naver',
    code: string | null,
    redirectUri: string,
  ) => {
    const response = await apiClient.post(`/v1/auth/${type}`, {
      code: code,
      redirectUri: redirectUri,
    });

    tokenManager.setAccessToken(response.data.accessToken);

    return response.data;
  },

  refresh: async () => {
    const response = await apiClient.post('/v1/auth/refresh');

    tokenManager.removeToken();
    tokenManager.setAccessToken(response.data.accessToken);

    return response;
  },
};

export default loginAPI;
