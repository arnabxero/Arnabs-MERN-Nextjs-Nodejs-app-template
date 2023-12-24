'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/utility/Loader';
import { useTheme } from '@/contexts/ThemeContext';
import '../globals.css';

const Page = () => {

  const { theme } = useTheme();
  const isDark = (theme === "dark");

  const router = useRouter();

  const [timer, setTimer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimer(timer + 1);

      setIsLoggedIn(localStorage.getItem('authorization'));

      if (isLoggedIn) {
        router.push('/');
      } else {
        if (timer > 5) {
          router.push('/login');
        }
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [timer]);

  return (
    <div className={`${(isDark) ? 'dark-bg-1 dark-text-2' : 'light-bg-1'} h-screen`}>
      Hello world
      {(timer < 5 || !isLoggedIn) && (<><Loader /></>)}
    </div>
  );
};

export default Page;
