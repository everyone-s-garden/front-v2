interface LoginResponse {
  grantType: string;
  accessToken: string;
  accessTokenExpiredDate: number;
  refreshTokenExpiredDate: number;
  memberId: number;
}
