import moment from 'moment';

import Clipboard from '@react-native-clipboard/clipboard';
import {
  Dimensions,
  Linking,
  PixelRatio,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import { Image } from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';

const scaleValue = PixelRatio.get() / 2;

const dimensions = Dimensions.get('window');

const isIos = Platform.OS === 'ios';

export const copyToClipboard = (mess: string) => {
  Clipboard.setString(mess);
};

export const formatAddress = (
  account: string,
  beginning: number,
  final: number,
) => {
  return account
    ? account.slice(0, beginning) + '...' + account.slice(-final)
    : '';
};

const formatMoney = (value: number, unit = 'đ') =>
  `${value?.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,')}${unit}`;

export const formatter = new Intl.NumberFormat('vn-VN', {
  style: 'currency',
  currency: 'VND',
});

export const formatterCurrency = (num: number) =>
  `${num?.toString()?.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}đ`;

export { dimensions, formatMoney, isIos };

export const addOrRemoveItemSelected = (array, item) => {
  const exists = array.includes(item);
  return exists ? array.filter(c => c !== item) : [item, ...array];
};

export const onlyUnique = (value, index, array) =>
  array.indexOf(value) === index;

export const openLink = (k: 'email' | 'telephone' | 'url', val: string) => {
  switch (k) {
    case 'email':
      return Linking.openURL(`mailto:${val}`);
    case 'telephone':
      return Linking.openURL(`${isIos ? 'telprompt:' : 'tel:'}${val}`);
    case 'url':
      return Linking.openURL(val);
  }
};

export const offsetKeyboard = Platform.select({
  ios: 0,
  android: 20,
});

//rotate90: { transform: `rotate(${}deg)`},
export const getTransformRotate = (deg: number) => ({
  transform: [{ rotate: `${deg}deg` }],
});

export const getWidthBySpace = (w: number) => ({
  width: width - w,
});

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const trimStr = (str: string): string => {
  return str.toUpperCase().replace(/\s/g, '');
};

export const strExists = (str: string) => str.search(/Hidden/g) !== -1;

export const { width, height } = Dimensions.get('window');

export const scaleWithPixel = (size: number, limitScale = 1.2) => {
  /* setting default upto 20% when resolution device upto 20% with defalt iPhone 7 */
  const value = scaleValue > limitScale ? limitScale : scaleValue;
  return size * value;
};

export const heightHeader = () => {
  const landscape = width > height;

  if (Platform.OS === 'android') {
    return 45;
  }

  switch (height) {
    case 375:
    case 414:
    case 812:
    case 896:
    case 926:
    case 844:
    case 812:
    case 844:
      return landscape ? 45 : 88;
    default:
      return landscape ? 45 : 65;
  }
};

export const getFileExtension = (filename: string) => {
  const ext = /^.+\.([^.]+)$/.exec(filename);
  return !ext ? '' : ext[1];
};

export const getFileName = (path: string) => {
  try {
    const ext = path.split('/');
    return ext[ext.length - 1];
  } catch (error) {
    return '';
  }
};

export const formatLL = (str: string) => moment(str).format('LL');

export const formatDBYMDHMS = (str: string) =>
  moment(str).format('YYYY-MM-DD HH:mm:ss');

export const formatDBYMDHM = (str: string) =>
  moment(str).format('YYYY-MM-DD HH:mm');

export const formatDBYMD = (str: string) => moment(str).format('YYYY-MM-DD');

export const convertYMD = (str: string) => {
  const s = str.split('/');
  return `${s[2]}-${s[1]}-${s[0]}`;
};

export const formatDBHM = (str: string) => moment(str).format('HH:mm');
export const formatMinuteHours = (str: string) =>
  moment(str, 'HH').format('HH:mm');

export const formatDMY = (str: string) => moment(str).format('DD/MM/YYYY');
export const formatYMD = (str: string) => moment(str).format('YYYY-MM-DD');
export const formatYYYY = (str: string) => moment(str).format('YYYY');

export const getPrevDay = () =>
  moment().subtract(1, 'days').format('DD/MM/YYYY');

export const getPrevMonth = () =>
  moment().subtract(1, 'months').format('DD/MM/YYYY');

export const formatDMYHM = (str: string) =>
  moment(str).format('DD/MM/YYYY HH:mm');

export const formatHMDMY = (str: string) =>
  moment(str).format('HH:mm DD/MM/YYYY');

export const convertObjToArrayByKey = obj => {
  try {
    return Object.entries(obj)
      .map(([k, v]) => (v ? k : null))
      .filter(e => e);
  } catch (e) {
    return [];
  }
};

export const formatDMYIso = (str: string) =>
  moment(str, 'DD/MM/YYYY').toISOString();

export const isEmptyObject = (obj: any) => {
  return Object.keys(obj).length === 0;
};

export const isArray = (obj: any) => {
  return !!obj && obj.constructor === Array;
};

export const divisibleNumber = (n: number, divider: number) =>
  n % divider === 0;
export const generateLocaleTime = (time: string) => {
  if (time) {
    let timeTmp = time.slice(0, 2);
    if (Number(timeTmp) < 12) {
      return 'AM';
    } else {
      return 'PM';
    }
  }
};

export function getExtension(filename: string) {
  const parts = filename.split('.');
  return parts[parts.length - 1];
}

export const isImage = (filename: string) => {
  const ext = getExtension(filename);
  switch (ext.toLowerCase()) {
    case 'jpg':
    case 'gif':
    case 'bmp':
    case 'png':
      //etc
      return true;
  }
  return false;
};

export const replaceHtml = (value: any) => {
  return value?.replace(/\\n/i, '');
};

export const generateTypeGroup = (fileName: string) => {
  if (fileName) {
    const lastIndex = fileName.lastIndexOf('.');
    return fileName.slice(0, lastIndex);
  }
};

export const sortByKey = (data: any[], key: string) => {
  try {
    return data.sort((a, b) => (a?.[key] < b?.[key] ? 1 : -1));
  } catch (error) {
    return data;
  }
};

export const FormatNumber = (number: number) => {
  return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(
    number,
  );
};
export const getComponent = disabled => {
  if (!disabled) {
    return View;
  }
  return TouchableOpacity;
};

export const formartDateTime = date => {
  return moment(date).format('HH[h]mm DD/MM/YYYY');
};

export const showErr = msg => Toast.show({ text1: msg, type: 'error' });
export const showInfo = msg => Toast.show({ text1: msg, type: 'info' });

export const parseJSON = (str: string, out = []) => {
  try {
    const val = JSON.parse(str);
    return val ?? out;
  } catch (error) {
    return out;
  }
};

export const convertPhoneNumber = (str: string) => {
  if (!str) {
    return;
  }
  const phoneCode = str.slice(1, 4);
  const phoneNumber = str.slice(6, str.length);

  return { phoneCode, phoneNumber };
};

export const uploadImage = (
  { mime, filename, path }: Image,
  key = 'file',
  isFormData = true,
) => {
  filename = `${new Date().getTime()}_${filename || ''}`;
  const file = {
    filename: filename,
    fileType: mime,
    uri: Platform.OS === 'android' ? path : path.replace('file://', ''),
  };
  if (isFormData) {
    const formData = new FormData();
    formData.append(key, {
      type: file.fileType,
      name: file.filename,
      uri: file.uri,
    });
    return formData;
  }
  return file;
};

export const isValidURL = str => {
  return (
    str.startsWith('http://') ||
    str.startsWith('https://') ||
    str.startsWith('file://') ||
    str.startsWith('data:image/') ||
    str.startsWith('www')
  );
};

export const openURL = url => {
  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        console.log(`Can't handle URL: ${url}`);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch(err => console.error('An error occurred', err));
};
