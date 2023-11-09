import {
  GoogleSignin,
  User,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useState } from 'react';

GoogleSignin.configure({
  webClientId:
    '819569331887-jpm26758m6e58i740ala3cdu4ornp688.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
  profileImageSize: 120,
});

export const useGoogle = () => {
  const [userGG, setUserGG] = useState<User>();

  const signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();

      setUserGG(user);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return { signInGoogle, userGG };
};
