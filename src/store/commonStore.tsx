import { create } from 'zustand';

interface ToggleState {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

export const useToggleStore = create<ToggleState>((set) => ({
    isDarkMode: false,
    setDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));