import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '@/i18n';

export type Language = 'zh' | 'en'; // 你可以加 'ja' 等

interface I18nState {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const useI18nStore = create<I18nState>()(
  persist(
    set => ({
      lang: 'zh',
      setLang: lang => {
        i18n.changeLanguage(lang);
        set({lang});
      },
    }),
    {
      name: 'language-storage',
      storage: {
        getItem: async key => {
          const value = await AsyncStorage.getItem(key);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (key, value) => {
          await AsyncStorage.setItem(key, JSON.stringify(value));
        },
        removeItem: async key => {
          await AsyncStorage.removeItem(key);
        },
      },
    },
  ),
);
