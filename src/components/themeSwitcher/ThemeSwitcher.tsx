'use client';

import { useState, useEffect } from 'react';
import { SwitcherButton } from './switcherButton/SwitcherButton';

type Theme = 'light' | 'dark';

export const ThemeSwitcher: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('light');
    const [mounted, setMounted] = useState<boolean>(false);

    // Функция для установки класса темы
    const applyTheme = (theme: Theme): void => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Функция для переключения темы
    const toggleTheme = (): void => {
        const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    // Эффект для установки темы при монтировании компонента
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;

        // Если тема не сохранена, используем системные настройки
        if (savedTheme) {
            setTheme(savedTheme);
            applyTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const systemTheme: Theme = prefersDark ? 'dark' : 'light';
            setTheme(systemTheme);
            applyTheme(systemTheme);
        }

        setMounted(true);
    }, []);

    // Не рендерим кнопку, пока компонент не смонтировался
    if (!mounted) return null;

    return (
        <SwitcherButton onClick={toggleTheme} isChecked={theme === 'dark'} />
    );
};


