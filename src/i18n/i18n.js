import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import english from './locales/en.json';
import arabic from './locales/ar.json';
const resources = {
  en: {
    translation: english,
  },
  ar: {
    translation: arabic,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
