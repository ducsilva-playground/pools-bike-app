import { Platform } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { KEY_CONTEXT } from 'utils';

export const useKey = () => {
  const savePwd = async (account: string, password: string) => {
    await Keychain.setGenericPassword(account, password, {
      service: 'account',
      accessControl:
        Platform.OS === 'ios' ? null : Keychain.ACCESS_CONTROL?.USER_PRESENCE,
    });
  };

  const saveKeyStore = async (service: string, value: string) => {
    await Keychain.setGenericPassword(service, value, {
      service,
      accessControl:
        Platform.OS === 'ios' ? null : Keychain.ACCESS_CONTROL?.USER_PRESENCE,
    });
  };

  const getKeyStore = async (service: string) => {
    const credentials = await Keychain.getGenericPassword({
      service,
      accessControl:
        Platform.OS === 'ios' ? null : Keychain.ACCESS_CONTROL.USER_PRESENCE,
    });
    if (credentials) {
      return credentials.password;
    }
  };

  const getPwd = async () => {
    try {
      const credentials = await Keychain.getGenericPassword({
        service: 'account',
        accessControl:
          Platform.OS === 'ios' ? null : Keychain.ACCESS_CONTROL.USER_PRESENCE,
      });
      if (credentials) {
        //  'Credentials successfully loaded for user ' + credentials.username,
        return {
          account: credentials.username,
          password: credentials.password,
        };
      }
      return null;
    } catch (error) {
      return null;
    }
  };

  const resetKeyStore = async (service?: string) => {
    if (service) {
      await Keychain.resetGenericPassword({ service });
    } else {
      await Keychain.resetGenericPassword({
        service: KEY_CONTEXT.ACCESS_TOKEN,
      });
      await Keychain.resetGenericPassword({
        service: KEY_CONTEXT.USER,
      });
    }
  };

  return { savePwd, getPwd, resetKeyStore, saveKeyStore, getKeyStore };
};
