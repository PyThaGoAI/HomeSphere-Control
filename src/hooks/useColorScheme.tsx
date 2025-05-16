
import { useEffect, useState } from 'react';

export type AccentColor = {
  name: string;
  color: string;
  cssVar: string;
};

export const accentColors: AccentColor[] = [
  { name: "Cosmic Teal", color: "#00E5E5", cssVar: "#00E5E5" },
  { name: "Cosmic Purple", color: "#9b87f5", cssVar: "#9b87f5" },
  { name: "Cosmic Pink", color: "#D946EF", cssVar: "#D946EF" },
  { name: "Cosmic Orange", color: "#F97316", cssVar: "#F97316" },
  { name: "Cosmic Blue", color: "#0EA5E9", cssVar: "#0EA5E9" },
  { name: "Cosmic Green", color: "#10B981", cssVar: "#10B981" }
];

export const useColorScheme = () => {
  const [selectedColor, setSelectedColor] = useState<AccentColor>(accentColors[0]);

  useEffect(() => {
    // Load saved color from localStorage on mount
    const savedColorName = localStorage.getItem('accentColor');
    if (savedColorName) {
      const savedColor = accentColors.find(color => color.name === savedColorName);
      if (savedColor) {
        setSelectedColor(savedColor);
      }
    }
  }, []);

  const changeAccentColor = (color: AccentColor) => {
    // Save to localStorage
    localStorage.setItem('accentColor', color.name);
    
    // Update CSS variable
    document.documentElement.style.setProperty('--accent-color', color.cssVar);
    
    // Update state
    setSelectedColor(color);
  };

  return { selectedColor, changeAccentColor, accentColors };
};
