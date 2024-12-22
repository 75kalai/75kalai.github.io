import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import DILIP_PORTFOLIO_DATA from './data/dilip';
import KALAI_PORTFOLIO_DATA from './data/kalai';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'dilip',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      'dilip': {
        translation: DILIP_PORTFOLIO_DATA
      },
      'kalai':{
        translation: KALAI_PORTFOLIO_DATA
      }
    }
  });

export default i18n;