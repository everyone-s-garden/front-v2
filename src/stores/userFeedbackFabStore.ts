import { create } from 'zustand';

interface UserFeedbackFabState {
  modalOpen: boolean;
  setModalOpen: () => void;
}

export const userFeedbackFabStore = create<UserFeedbackFabState>((set) => ({
  modalOpen: false,
  setModalOpen: () => set((state) => ({ modalOpen: !state.modalOpen })),
}));
