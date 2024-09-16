'use client';

import { useState, useEffect } from 'react';
import { SwitcherButton } from './switcherButton/SwitcherButton';

type Theme = 'light' | 'dark';

export const ThemeSwitcher: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('light');

    const applyTheme = (theme: Theme): void => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const toggleTheme = (): void => {
        const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    useEffect(() => {
        applyTheme(theme);
        setTheme(theme);
    }, [theme]);

    return (
        <SwitcherButton onClick={toggleTheme} isDark={theme === 'dark'} />
    );
};


