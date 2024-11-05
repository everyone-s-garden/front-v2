import { create } from 'zustand';

interface ImageState {
  images: { file: File; url: string }[] | string[];
  setImages: (images: { file: File; url: string }[] | string[]) => void;
  resetImages: () => void;
}

export const useImageStore = create<ImageState>((set) => ({
  images: [],
  setImages: (images) => set({ images }),
  resetImages: () => set({ images: [] }),
}));
