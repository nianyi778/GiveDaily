import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh from './locales/zh.json'
import en from './locales/en.json'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  lng: 'zh',
  fallbackLng: 'en',
  resources: {
    zh: { translation: zh },
    en: { translation: en },
  },
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
