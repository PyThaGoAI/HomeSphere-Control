
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type ThemeColor = {
  name: string;
  color: string;
};

type ThemeContextType = {
  currentTheme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
};

const defaultTheme: ThemeColor = { name: "Cosmic Teal", color: "#00E5E5" };

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: defaultTheme,
  setTheme: () => {}
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>(() => {
    // Try to get the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
  });

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', JSON.stringify(theme));
    
    // Add CSS variables to the root element for the theme color
    document.documentElement.style.setProperty('--theme-color', theme.color);
    document.documentElement.style.setProperty('--theme-color-50', `${theme.color}80`); // 50% opacity
    document.documentElement.style.setProperty('--theme-color-20', `${theme.color}33`); // 20% opacity
    document.documentElement.style.setProperty('--theme-color-10', `${theme.color}1A`); // 10% opacity
  };

  // Set the theme color on initial render
  useEffect(() => {
    setTheme(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
