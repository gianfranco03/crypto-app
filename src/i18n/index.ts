import * as RNLocalize from 'react-native-localize';
import i18n from 'i18next';

import translationEN from './translations/en/en.json';
import translationES from './translations/es/es.json';

const getLanguage = (): string => {
  const locales = RNLocalize.getLocales();
  return locales && locales.length > 0 ? locales[0].languageCode : 'en';
};

i18n.init({
  lng: getLanguage(),
  fallbackLng: getLanguage(),
  compatibilityJSON: 'v3',
  resources: {
    en: {translation: translationEN},
    es: {translation: translationES},
  },
});

export default i18n;
