'use client'
import React, { useEffect, useState } from 'react';
import './Loader.css'; // Use a custom CSS file name, like CustomLoader.css

function Loader() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const isLocalStorageAvailable = typeof localStorage !== 'undefined';

        if (isLocalStorageAvailable) {
            const theme = localStorage.getItem('campusTheme');
            setIsDark(theme === 'dark');
        }
    }, []);

    return (
        <div className={`${(isDark) ? 'dark-bg-1' : 'light-bg-1'} custom-loader-container`}>
            <div className="custom-loader">
                <ul className="custom-circle-list">
                    <li className="custom-circle custom-circle1"></li>
                    <li className="custom-circle custom-circle2"></li>
                    <li className="custom-circle custom-circle3"></li>
                    <li className="custom-circle custom-circle4"></li>
                    <li className="custom-circle custom-circle5"></li>
                    <li className="custom-circle custom-circle6"></li>
                    <li className="custom-circle custom-circle7"></li>
                </ul>
            </div>
        </div>
    );
}

export default Loader;
