// ThemeContext.js
// how to use
//import { useCampusTheme } from '@/contexts/ThemeContext';
// const { campusTheme } = useCampusTheme();
// const isDark = (campusTheme === "dark");
//{`${(isDark) ? 'dark-bg-1' : 'light-bg-1'}


import React, { createContext, useContext, useState } from 'react';

// Create a new context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Function to set the theme value
    const setThemeValue = (value) => {
        setTheme(value);
        localStorage.setItem('theme', value);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: setThemeValue }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to easily access the context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};