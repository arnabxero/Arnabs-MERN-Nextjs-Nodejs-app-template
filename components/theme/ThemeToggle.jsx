import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();

    const isDark = theme === 'dark';
    const isLight = theme === 'light';


    const isDarkTheme = theme === 'dark';

    const toggleTheme = () => {
        const newTheme = isDarkTheme ? 'light' : 'dark';
        setTheme(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className={`p-2 border-2 w-full rounded-md text-xs ${isDark && 'bg-white text-black'} ${isLight && 'bg-black text-white'}`}>
            {isLight && 'DARK'} {isDark && 'LIGHT'}
        </button>
    );
};

export default ToggleTheme;
