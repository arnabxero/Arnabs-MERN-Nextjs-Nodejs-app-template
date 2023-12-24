// AlertContext.js
'use client'
import { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({
        message: '',
        type: 'info',
        visibility: false,
    });

    const showAlert = (message, type = 'info') => {
        setAlert({ message, type, visibility: true });

        setTimeout(() => {
            setAlert({ ...alert, visibility: false });
        }, 5000);
    };

    const hideAlert = () => {
        setAlert({ ...alert, visibility: false });
    };

    return (
        <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
            {children}
        </AlertContext.Provider>
    );
};
