import { Colors } from 'theme';

// color?: ColorValue | undefined;
//   fontFamily?: string | undefined;
//   fontSize?: number | undefined;
//   fontStyle?: 'normal' | 'italic' | undefined;
//   /**
//    * Specifies font weight. The values 'normal' and 'bold' are supported
//    * for most fonts. Not all fonts have a variant for each of the numeric
//    * values, in that case the closest one is chosen.
//    */
//   fontWeight?:
//     | 'normal'
//     | 'bold'
//     | '100'
//     | '200'
//     | '300'
//     | '400'
//     | '500'
//     | '600'
//     | '700'
//     | '800'
//     | '900'
//     | undefined;
//   letterSpacing?: number | undefined;
//   lineHeight?: number | undefined;
//   textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
//   textDecorationLine?:
//     | 'none'
//     | 'underline'
//     | 'line-through'
//     | 'underline line-through'
//     | undefined;
//   textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed' | undefined;
//   textDecorationColor?: ColorValue | undefined;
//   textShadowColor?: ColorValue | undefined;
//   textShadowOffset?: {width: number; height: number} | undefined;
//   textShadowRadius?: number | undefined;
//   textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;

const spacing = {
  'mt-': 'marginTop',
  'mb-': 'marginBottom',
  'mr-': 'marginRight',
  'ml-': 'marginLeft',
  'mx-': 'marginHorizontal',
  'my-': 'marginVertical',
  'pt-': 'paddingTop',
  'pb-': 'paddingBottom',
  'pr-': 'paddingRight',
  'pl-': 'paddingLeft',
  'px-': 'paddingHorizontal',
  'py-': 'paddingVertical',
  'm-': 'margin',
  'p-': 'padding',
  't-': 'top',
  'r-': 'right',
  'b-': 'bottom',
  'l-': 'left',
  'w-': 'width',
  'h-': 'height',
  'maxh-': 'maxHeight',
  'maxw-': 'maxWidth',
  'minh-': 'minHeight',
  'minw-': 'minWidth',
  'brw-': 'borderRightWidth',
  'bw-': 'borderWidth',
  'bbw-': 'borderBottomWidth',
  'bbc-': 'borderBottomColor',
  'bc-': 'borderColor',
  'bg-': 'backgroundColor',
  'fd-': 'flexDirection',
  'f-': 'flex',
  'items-': 'alignItems',
  'justify-': 'justifyContent',
  'br-': 'borderRadius',
  'brc-': 'borderRightColor',
  'fw-': 'flexWrap',
  'pos-': 'position',
  'gap-': 'gap',

  // text
  'color-': 'color',
  'fontSize-': 'fontSize',
  'fontFamily-': 'fontFamily',
  'fontStyle-': 'fontStyle',
  'fontWeight-': 'fontWeight',
  'letterSpacing-': 'letterSpacing',
  'lineHeight-': 'lineHeight',
  'textAlign-': 'textAlign',
  'textDecorationLine-': 'textDecorationLine',
  'textDecorationStyle-': 'textDecorationStyle',
  'textDecorationColor-': 'textDecorationColor',
  'textShadowColor-': 'textShadowColor',
  'textShadowRadius-': 'textShadowRadius',
  'textTransform-': 'textTransform',
};

export const withOpacity = (color, opacity) => {
  let op = Math.round(255 * opacity);
  return `${color}${op.toString(16).toUpperCase()}`;
};

export const styleSpacing = key => {
  const bc = ['bg-', 'bc-', 'bbc-', 'color-'];
  const exceptNum = [
    ...bc,
    'fd-',
    'items-',
    'justify-',
    'brc-',
    'fw-',
    'pos-',
    'gap',
  ];
  for (const [prefix, prop] of Object.entries(spacing)) {
    if (key.indexOf(prefix) === 0) {
      const keys = key.split(prefix)[1];
      const vals = exceptNum.includes(prefix) ? keys : Number(keys);
      const v = bc.includes(prefix) ? Colors[`${vals}`] : vals;
      return { [prop]: v };
    }
  }
  return {};
};
