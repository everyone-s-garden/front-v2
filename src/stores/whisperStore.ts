import { create } from 'zustand';
import {
  CommentOrderByOptions,
  OrderByOptions,
  PostType,
} from '@/pages/Community/types';

interface WhisperState {
  params: {
    searchContent: string;
    postType: PostType | '';
    orderBy: OrderByOptions | '';
  };
  commentsParam: {
    orderBy: CommentOrderByOptions | '';
  };
  resetParams: () => void;
  resetCommentsParam: () => void;
  setSearchContent: (searchContent: string) => void;
  setPostType: (postType: PostType | '') => void;
  setOrderBy: (orderBy: OrderByOptions | '') => void;
  setCommentsOrderBy: (orderBy: CommentOrderByOptions | '') => void;
}

export const useWhisperStore = create<WhisperState>((set) => ({
  params: {
    searchContent: '',
    postType: '',
    orderBy: '',
  },
  commentsParam: {
    orderBy: '',
  },
  resetParams: () =>
    set({ params: { searchContent: '', postType: '', orderBy: '' } }),
  resetCommentsParam: () => set({ commentsParam: { orderBy: '' } }),
  setSearchContent: (searchContent) =>
    set((state) => ({ params: { ...state.params, searchContent } })),
  setPostType: (postType) =>
    set((state) => ({ params: { ...state.params, postType } })),
  setOrderBy: (orderBy) =>
    set((state) => ({ params: { ...state.params, orderBy } })),
  setCommentsOrderBy: (orderBy) => set(() => ({ commentsParam: { orderBy } })),
}));
