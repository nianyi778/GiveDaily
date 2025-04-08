import {createPersistedStore} from './createPersistedStore';

type Theme = 'light' | 'dark' | 'japan';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = createPersistedStore<ThemeStore>(
  'theme-storage',
  set => ({
    theme: 'light',
    setTheme: theme => set({theme}),
  }),
);
