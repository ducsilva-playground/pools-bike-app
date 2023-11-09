import { ReactNode } from 'react';
import { StyleProp, TextProps, ViewProps } from 'react-native';

export interface IText extends TextProps {
  // props styles
  style?: StyleProp<any>;
  children?: ReactNode;
  useI18n?: boolean;
  paramI18n?: any;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
}
export interface IView extends ViewProps {}

export interface IRefBottom {
  open: () => void;
  close: () => void;
}
