import { useState } from 'react';
import DeviceInfo from 'react-native-device-info';
import { Platform } from 'react-native';

export const useDevice = () => {
  const [infoDevice, setInfoDevice] = useState({
    device_name: '',
    device_id: '',
    platform: '',
    ip_address: '',
  });

  const getName = DeviceInfo.getDeviceName();
  const getId = DeviceInfo.getUniqueId();
  const getPlatform = Platform.OS;
  const getIpAddress = DeviceInfo.getIpAddress();

  const getInfoDevice = async () => {
    try {
      const [device_name, device_id, platform, ip_address] = await Promise.all([
        getName,
        getId,
        getPlatform,
        getIpAddress,
      ]);
      setInfoDevice({
        device_name,
        device_id,
        platform,
        ip_address,
      });
    } catch (error) {
      console.warn('ERROR', error);
    }
  };

  return { infoDevice, getInfoDevice };
};
