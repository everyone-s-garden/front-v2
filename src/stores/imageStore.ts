import { create } from 'zustand';

interface ImageState {
  images: { file: File; url: string }[];
  setImages: (images: { file: File; url: string }[]) => void;
  resetImages: () => void;
}

export const useImageStore = create<ImageState>((set) => ({
  images: [],
  setImages: (images) => set({ images }),
  resetImages: () => set({ images: [] }),
}));
