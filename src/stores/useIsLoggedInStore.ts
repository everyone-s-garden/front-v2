import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UseIsLoggedInStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (loginState: boolean) => void;
}

const useIsLoggedInStore = create(
  persist<UseIsLoggedInStore>(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (loginState: boolean) =>
        set(() => ({ isLoggedIn: loginState })),
    }),
    {
      name: 'login-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useIsLoggedInStore;
