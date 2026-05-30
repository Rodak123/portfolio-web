import { useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { type ThemeMode, Themes, type Theme, ThemeModes } from '../types/theme';
import { resolveTheme } from '../utils/resolveTheme';

interface ThemeProviderProps {
  defaultThemeMode: ThemeMode;
  themeLSKey?: string;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, defaultThemeMode, themeLSKey = 'stored-theme' }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const storedKey = localStorage.getItem(themeLSKey);
    return (storedKey && storedKey in ThemeModes)
      ? ThemeModes[storedKey as keyof typeof ThemeModes]
      : defaultThemeMode;
  });

  useEffect(() => {
    const body = document.body;
    Object.values(Themes).forEach((val) => body.classList.remove(val));
    body.classList.add(themeMode);

    const themeKey = Object.entries(Themes).find(([, val]) => val === themeMode)?.[0];
    if (themeKey) localStorage.setItem(themeLSKey, themeKey);
  }, [themeMode, themeLSKey]);

  const changeTheme = (theme: Theme) => setThemeMode(theme);
  const cycleTheme = () => {
    const themes = Object.values(Themes);
    const current = themes.findIndex((t) => t === themeMode);
    setThemeMode(themes[(current + 1) % themes.length]);
  };

  return (
    <ThemeContext.Provider value={{
      theme: resolveTheme(themeMode),
      changeTheme,
      cycleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
