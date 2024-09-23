'use client';

import { useEffect } from 'react';
import { SwitcherButton } from './switcherButton/SwitcherButton';
import { useToggleStore } from '@/store/commonStore';

type Theme = 'light' | 'dark';

export const ThemeSwitcher: React.FC = () => {
    const { isDarkMode, setDarkMode } = useToggleStore();

    const applyTheme = (theme: Theme): void => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        const theme: Theme = isDarkMode ? 'dark' : 'light';
        applyTheme(theme);
    }, [isDarkMode]);
    return (
        <SwitcherButton onClick={setDarkMode} isDark={isDarkMode} />
    );
};


