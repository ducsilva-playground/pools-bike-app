/**
 * @description define all colors value used in project
 */

export interface IColors {
  main: string;
  white: string;
  dark: string;
  primary: string;
  secondary: string;
  support: string;
  backgroundMain: string;
  errorColor: string;
  color11: string;
  color23: string;
  color33: string;
  color51: string;
  color62: string;
  color7E: string;
  color9E: string;
  colorB1: string;
  colorCF: string;
  colorE1: string;
  color85: string;
  transparent: string;
  colorB09: string;
  color00C: string;
  color049: string;
  colorFFD6: string;
  colorB1FD: string;
  colorFFC3: string;
  color1890: string;
  colorE8: string;
  color00E: string;
  color5A: string;
  color1E: string;
  colorFF00: string;
  colorD9: string;
  color78: string;
  color1A: string;
  colorB091F: string;
  color56: string;
  color624: string;

  setOpacity: (hexColor: string, opacity: number) => string;
}

export const Colors: IColors = {
  main: '#DC4534',
  dark: '#3A3A3C',
  white: '#FFFFFF',
  primary: '#1AB6FA',
  secondary: '#78D4FC',
  support: '#1ECB4F',
  backgroundMain: '#000000',
  errorColor: '#FF1F1F',
  color11: '#111111',
  color23: '#232323',
  color33: '#333333',
  color51: '#515151',
  color62: '#626262',
  color7E: '#7E7E7E',
  color9E: '#9E9E9E',
  colorB1: '#B1B1B1',
  colorCF: '#CFCFCF',
  colorE1: '#E1E1E1',
  color85: '#858585',
  transparent: 'transparent',
  colorB09: '#B09FFF',
  color00C: '#00C4C9',
  color049: '#049EA280',
  colorFFD6: '#FFD60A',
  colorB1FD: '#B1FDFF',
  colorFFC3: '#FFC300',
  color1890: '#1890FF00',
  colorE8: '#E80054',
  color00E: '#00E8A2',
  color5A: '#5ABBBD',
  color1E: '#1ECB4F',
  colorFF00: '#FF0000',
  colorD9: '#D9D9D9',
  color78: '#78D4FC',
  color1A: '#1AB6FA',
  colorB091F: '#B09FFF1F',
  color56: '#560BAD',
  color624: '#6242F8',

  setOpacity: (hexColor, opacity) => {
    const hexOpacity = Math.floor(opacity * 255).toString(16);
    return `${hexColor}${hexOpacity}`;
  },
};

export const hexToRgb = (hex: string, a = 1) => {
  const rs = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  console.log('rs', rs);
  if (rs) {
    return hex;
  }
  const r = parseInt(rs?.[1], 16);
  const g = parseInt(rs[2], 16);
  const b = parseInt(rs[3], 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
export const ColorsGradient = {
  slider: ['rgba(0, 0, 0, 0.00)', 'rgba(0, 0, 0, 0.55)'],
};
