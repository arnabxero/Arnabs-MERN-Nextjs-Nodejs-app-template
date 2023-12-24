'use client'
import './globals.css';
import { Inter } from 'next/font/google';
import { AlertProvider } from '@/contexts/AlertContext';
import Alert from '@/components/alert/Alert';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ToggleTheme from '@/components/theme/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Project Campus',
//   description: 'Project Campus - Getting Started',
// };

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AlertProvider>
            <Alert />
            {children}
            <ToggleTheme />
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
