import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import tokenManager from '@/services/login/tokenManager';

interface UseLoginStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (loginState: boolean) => void;
  logout: () => void;
}

const useLoginStore = create(
  persist<UseLoginStore>(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (loginState: boolean) =>
        set(() => ({ isLoggedIn: loginState })),
      logout: () =>
        set(() => {
          tokenManager.removeToken();

          return { isLoggedIn: false };
        }),
    }),
    {
      name: 'login-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useLoginStore;
