import { create } from 'zustand';

interface UseSearchRegionsInputValue {
  searchRegionsInputValue: string;
  setSearchRegionsInputValue: (inputValue: string) => void;
}

const useSearchRegionsInputValueStroe = create<UseSearchRegionsInputValue>(
  (set) => ({
    searchRegionsInputValue: '',

    setSearchRegionsInputValue: (inputValue: string) =>
      set(() => ({
        searchRegionsInputValue: inputValue,
      })),
  }),
);

export default useSearchRegionsInputValueStroe;
