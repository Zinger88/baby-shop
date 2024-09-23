'use client';

import { useEffect } from 'react';
import { SwitcherButton } from './switcherButton/SwitcherButton';
import { useCommonStore } from '@/store/commonStore';


export const ThemeSwitcher: React.FC = () => {
    const toogleDarkMode = useCommonStore((state) => state.toogleDarkMode);
    const isDarkMode = useCommonStore((state) => state.isDarkMode);
    const setDarkModeFromLS = useCommonStore((state) => state.setDarkModeFromLS);
    
    useEffect(() => {
        setDarkModeFromLS();
    }, [setDarkModeFromLS]);
    const handleClick = () => {
        toogleDarkMode();
    }
    return (
        <SwitcherButton onClick={handleClick} isDark={isDarkMode} />
    );
};


