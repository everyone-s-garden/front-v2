import { create } from 'zustand';

interface ShowMapAsideState {
  isShowAside: boolean;
  setIsShowAside: (asideState: boolean) => void;
}

const useShowMapAside = create<ShowMapAsideState>((set) => ({
  isShowAside: true,
  setIsShowAside: (asideState) => set(() => ({ isShowAside: asideState })),
}));

export default useShowMapAside;
