import dayjs from 'dayjs';
import apiClient from '@/api/apiClient';

interface LoginData {
  grantType: string;
  accessToken: string;
  accessTokenExpiredDate: number;
  refreshTokenExpiredDate: number;
  memberId: number;
}

const loginApi = {
  kakaoLogin: async (code: string | null, redirectUri: string) => {
    const response = await apiClient.post('/v1/auth/kakao', {
      code: code,
      redirectUri: redirectUri,
    });

    return response.data;
  },

  onLoginSuccess: (data: LoginData) => {
    const { accessToken, accessTokenExpiredDate } = data;
    const now = dayjs();
    const targetTime = dayjs(accessTokenExpiredDate);
    const JWT_EXPIRY_TIME = targetTime.diff(now, 'millisecond');
    const ONE_MINUTE = 60 * 1000;

    apiClient.defaults.headers.common['access-token'] = accessToken;

    setTimeout(() => {
      console.log('토큰 갱신 필요!');
    }, JWT_EXPIRY_TIME - ONE_MINUTE);
  },
};

export default loginApi;
