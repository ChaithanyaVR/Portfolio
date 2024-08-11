import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState(() => {
    // Set initial mode as empty string to avoid SSR mismatch
    return '';
  });

  useEffect(() => {
    const userPref = window.localStorage.getItem('theme');
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const checkPreference = () => {
      if (userPref) {
        return userPref;
      } else {
        return mediaQuery.matches ? 'dark' : 'light';
      }
    };

    const applyTheme = (theme) => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    const initialMode = checkPreference();
    setMode(initialMode);
    applyTheme(initialMode);

    mediaQuery.addEventListener('change', (e) => {
      const newMode = e.matches ? 'dark' : 'light';
      setMode(newMode);
      applyTheme(newMode);
    });

    return () => mediaQuery.removeEventListener('change', (e) => {
      const newMode = e.matches ? 'dark' : 'light';
      setMode(newMode);
      applyTheme(newMode);
    });
  }, []);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem('theme', mode);
      document.documentElement.classList.toggle('dark', mode === 'dark');
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
