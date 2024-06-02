const tokenManager = {
  setAccessToken: (accessToken: string) =>
    localStorage.setItem('access-token', accessToken),
  accessToken: () => localStorage.getItem('access-token'),
  removeToken: () => localStorage.removeItem('access-token'),
};

export default tokenManager;
