import { Images } from 'assets';
import { API_HOST } from '@env';

export const checkItemExistsByKey = (arr, keyCompare, key) => {
  try {
    return arr.filter(c => c?.[key] === keyCompare).length;
  } catch (error) {
    return false;
  }
};

export const checkExist = (arr: Array<[]>, day: any, key: any) => {
  if (Array.isArray(arr)) {
    return arr?.some(it => {
      if (it?.[key] === day?.[key]) {
        return true;
      }
      return false;
    });
  }
};

export const checkCategories = (arr: any, category: any) => {
  if (arr?.length) {
    return arr?.some(it => {
      if (it === category) {
        return true;
      }
      return false;
    });
  }
};

export const generateWeekDay = (weekdays: Array<any>) => {
  if (Array.isArray(weekdays)) {
    const strArr = weekdays?.map(it => it?.id);
    return strArr?.join('-');
  }
};

export const genUrlImage = (path: string | undefined) => {
  if (path) {
    console.log('path', API_HOST + 'images/' + path);
    console.log(
      '🚀 ~ file: functions.ts:44 ~ genUrlImage ~ API_HOST:',
      API_HOST,
    );

    return {
      uri: API_HOST + 'images/' + path,
    };
  } else {
    return Images.news_one;
  }
};

export const convertPoolsToDollar = (tokens: number, exchange: number) => {
  console.log(tokens, exchange);
  return +tokens * exchange || 0;
};

export const formatNumber = (number: number, digit: number) => {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: digit,
  }).format(number);
};

// Number.prototype.format = function(n, x, s, c) {
//   var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
//       num = this.toFixed(Math.max(0, ~~n));
//   return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
// };
