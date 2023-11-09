// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { getLocales } from 'react-native-localize';

export const STORE_LANGUAGE_KEY = 'language';

const LanguageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async () => {
    try {
      //get stored language from Async storage
      const language = await Keychain.getGenericPassword({
        STORE_LANGUAGE_KEY,
        accessControl:
          Platform.OS === 'ios' ? null : Keychain.ACCESS_CONTROL.USER_PRESENCE,
      });

      if (language) {
        //if language was stored before, use this language in the app
        return `${language}`;
      } else {
        //if language was not stored yet, use device's locale
        return `${getLocales()[0].languageCode}`;
      }
    } catch (error) {
      console.log('Error reading language', error);
    }
  },
  init: () => {},
  cacheUserLanguage: async (language: string) => {
    try {
      //save a user's language choice in Async storage
      await Keychain.setGenericPassword(STORE_LANGUAGE_KEY, language, {
        STORE_LANGUAGE_KEY,
        accessControl:
          Platform.OS === 'ios' ? null : Keychain.ACCESS_CONTROL?.USER_PRESENCE,
      });
    } catch (error) {}
  },
};

export default LanguageDetector;
