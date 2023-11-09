import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import { isIos } from 'utils';

export const usePermission = () => {
  const permission = isIos
    ? [
        PERMISSIONS.IOS.CAMERA,
        // PERMISSIONS.IOS.LOCATION_ALWAYS,
        // PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        PERMISSIONS.IOS.PHOTO_LIBRARY,
        PERMISSIONS.IOS.MICROPHONE,
      ]
    : [
        PERMISSIONS.ANDROID.CAMERA,
        // PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        // PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
        PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      ];
  const avatarPermission = isIos
    ? [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY]
    : [
        PERMISSIONS.ANDROID.CAMERA,

        PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
        PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
      ];
  const requestPermission = async () => {
    const statuses = await requestMultiple(permission);
    return statuses;
  };
  const requestAvatarPermission = async () => {
    const statuses = await requestMultiple(avatarPermission);
    console.log(
      '🚀 ~ file: usePermission.ts:34 ~ requestAvatarPermission ~ statuses:',
      statuses,
    );

    return statuses;
  };
  const requestCustomPermission = async per => {
    const statuses = await requestMultiple([per]);
    return statuses?.[per] === 'granted';
  };

  return {
    requestPermission,
    requestCustomPermission,
    requestAvatarPermission,
  };
};
