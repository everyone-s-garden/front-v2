import { create } from 'zustand';
import { OrderByOptions, PostType } from '@/pages/Community/types';

interface WhisperState {
  params: {
    searchContent: string;
    postType: PostType | '';
    orderBy: OrderByOptions | '';
  };
  resetParams: () => void;
  setSearchContent: (searchContent: string) => void;
  setPostType: (postType: PostType | '') => void;
  setOrderBy: (orderBy: OrderByOptions | '') => void;
}

export const useWhisperStore = create<WhisperState>((set) => ({
  params: {
    searchContent: '',
    postType: '',
    orderBy: '',
  },
  resetParams: () =>
    set({ params: { searchContent: '', postType: '', orderBy: '' } }),
  setSearchContent: (searchContent) =>
    set((state) => ({ params: { ...state.params, searchContent } })),
  setPostType: (postType) =>
    set((state) => ({ params: { ...state.params, postType } })),
  setOrderBy: (orderBy) =>
    set((state) => ({ params: { ...state.params, orderBy } })),
}));
