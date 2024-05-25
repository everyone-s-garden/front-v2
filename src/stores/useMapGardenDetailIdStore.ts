import { create } from 'zustand';

interface UseMapGardenDetailIdStore {
  gardenId: number | null;
  setGardenId: (newGardenId: number) => void;
}

const useMapGardenDetailIdStore = create<UseMapGardenDetailIdStore>((set) => ({
  gardenId: null,
  setGardenId: (newGardenId: number) => set(() => ({ gardenId: newGardenId })),
}));

export default useMapGardenDetailIdStore;
