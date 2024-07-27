import { create } from 'zustand';

interface UseShowGardenDetailStore {
  showGardenDetail: boolean;
  setShowGardenDetail: (showGardenDetailState: boolean) => void;
}

const useShowGardenDetailStore = create<UseShowGardenDetailStore>((set) => ({
  showGardenDetail: false,
  setShowGardenDetail: (showGardenDetailState: boolean) =>
    set(() => ({ showGardenDetail: showGardenDetailState })),
}));

export default useShowGardenDetailStore;
