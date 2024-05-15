import { create } from 'zustand';

interface SearchState {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  resetSearchValue: () => void;
  showResults: boolean;
  setShowResults: (showResults: boolean) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  searchValue: '',
  setSearchValue: (searchValue) => set({ searchValue }),
  resetSearchValue: () => set({ searchValue: '' }),
  showResults: false,
  setShowResults: (showResults) => set({ showResults }),
}));

export default useSearchStore;
