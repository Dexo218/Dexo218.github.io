import { useEffect, useState } from 'react';

function useDarkMode(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedPref = window.localStorage.getItem('color-theme');
      if (storedPref) {
        return storedPref === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('color-theme', 'light');
    }
  }, [isDark]);

  return [isDark, setIsDark];
}

export default useDarkMode;
