import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ar from './locales/ar.json';
import fr from './locales/fr.json';
import de from './locales/de.json';

// Geolocation-based language detection
const detectLanguageByLocation = async (): Promise<string> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const countryCode = data.country_code?.toLowerCase();
    
    const countryLanguageMap: { [key: string]: string } = {
      'ae': 'ar', // UAE -> Arabic
      'sa': 'ar', // Saudi Arabia -> Arabic
      'qa': 'ar', // Qatar -> Arabic
      'kw': 'ar', // Kuwait -> Arabic
      'fr': 'fr', // France -> French
      'de': 'de', // Germany -> German
      'at': 'de', // Austria -> German
      'ch': 'de', // Switzerland -> German
    };
    
    return countryLanguageMap[countryCode] || 'en';
  } catch {
    return 'en';
  }
};

// Custom hybrid detector
const hybridDetector = {
  name: 'hybridDetector',
  async: true,
  detect: async (callback: (lng: string) => void) => {
    const supportedLangs = ['en', 'ar', 'fr', 'de'];
    
    // 1. Check browser language first
    const browserLang = navigator.language.split('-')[0];
    if (supportedLangs.includes(browserLang)) {
      callback(browserLang);
      return;
    }
    
    // 2. Fallback to geolocation
    const geoLang = await detectLanguageByLocation();
    callback(geoLang);
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      fr: { translation: fr },
      de: { translation: de }
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'hybridDetector'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

i18n.services.languageDetector.addDetector(hybridDetector);

export default i18n;