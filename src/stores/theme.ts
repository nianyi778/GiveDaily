// src/stores/theme.ts
import {create} from 'zustand';

type Theme = 'light' | 'dark' | 'japan';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>(set => ({
  theme: 'light',
  setTheme: theme => set({theme}),
}));
