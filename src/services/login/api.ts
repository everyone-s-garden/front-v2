import apiClient from '@/api/apiClient';

const loginApi = {
  kakaoLogin: async (code: string | null, redirectUri: string) => {
    const response = await apiClient.post('/v1/auth/kakao', {
      code: code,
      redirectUri: redirectUri,
    });

    return response.data;
  },
};

export default loginApi;
