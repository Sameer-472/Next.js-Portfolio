import { create } from "zustand";

const useModalStore = create((set) => ({
  isOpen: false,
  type: null, // type of modal to differentiate between different modals
  data: null, // optional data to pass to modal
  openModal: (type, data = null) => set({ isOpen: true, type, data }),
  closeModal: () => set({ isOpen: false, type: null, data: null }),
}));

export default useModalStore;
