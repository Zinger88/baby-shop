import { create } from 'zustand';

interface CommonState {
    isDarkMode: boolean;
    toogleDarkMode: () => void;
    setDarkModeFromLS: () => void;
}

export const useCommonStore = create<CommonState>((set) => ({
    isDarkMode: false,
    setDarkModeFromLS: () => set(() => {
        if (typeof window !== 'undefined') {
            const isDarkMode = localStorage.getItem('baby-shop-theme') === 'dark';
            if (isDarkMode) document.documentElement.classList.add('dark');
            
            return { isDarkMode: isDarkMode }
        }
        return { isDarkMode: false }
    }),
    toogleDarkMode: () => set((state) => {
        /** only client side */ 
        if (typeof window !== 'undefined') {
            /** common logic */
            if (state.isDarkMode) {
                localStorage.setItem('baby-shop-theme', 'light');
                document.documentElement.classList.remove('dark');
            } else {
                localStorage.setItem('baby-shop-theme', 'dark');
                document.documentElement.classList.add('dark');
            }
        }
        return { isDarkMode: !state.isDarkMode }
    })
}));