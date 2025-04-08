import {createPersistedStore} from './createPersistedStore';
import i18n from '@/i18n';

export type Language = 'zh' | 'en' | 'ja';

interface I18nState {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const useI18nStore = createPersistedStore<I18nState>(
  'language-storage',
  set => ({
    lang: 'zh',
    setLang: lang => {
      i18n.changeLanguage(lang);
      set({lang});
    },
  }),
);
