import { create } from 'zustand';

interface UseShowGardensStore {
  showGardens: boolean;
  setShowGardens: (showGardensState: boolean) => void;
}

const useShowGardensStore = create<UseShowGardensStore>((set) => ({
  showGardens: false,
  setShowGardens: (showGardensState: boolean) =>
    set(() => ({ showGardens: showGardensState })),
}));

export default useShowGardensStore;
