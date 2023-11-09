import { TextCus, ViewCus } from 'components';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { Colors } from 'theme';
import { BaseStyle, DefaultFont } from 'theme/typography';

export function TextInputs(props: ITextInputs) {
  const { t } = useTranslation();
  const {
    style,
    leftIcon,
    rightIcon,
    textStyle,
    onKeyPress,
    placeholder,
    numberOfLines,
    disabled,
    error,
    label,
    isRequired,
    styleWrapperInput,
    labelStyle,
    keyboardType = 'default',
  } = props;
  return (
    <ViewCus mb-16 style={[styleWrapperInput]}>
      {label ? (
        <ViewCus mb-12 fd-row>
          <TextCus style={labelStyle} useI18n>
            {label}
          </TextCus>
          {isRequired && <TextCus>*</TextCus>}
        </ViewCus>
      ) : null}
      <ViewCus
        style={[
          BaseStyle.textInput,
          {
            borderColor: error ? Colors.errorColor : Colors.colorB1,
          },
          style,
        ]}>
        {leftIcon}
        <TextInput
          keyboardType={keyboardType}
          {...props}
          style={[
            styles.txt,
            {
              fontFamily: DefaultFont,
            },
            textStyle,
          ]}
          numberOfLines={numberOfLines}
          autoCapitalize={'none'}
          // spellCheck={false}
          // autoCorrect={false}
          selectionColor={Colors.colorB1}
          placeholderTextColor={Colors.colorB1}
          placeholder={t(`${placeholder ?? ''}`) as string}
          onKeyPress={onKeyPress}
          editable={!disabled}
        />
        {rightIcon}
      </ViewCus>
      {error ? (
        <TextCus mt-5 useI18n>
          {error}
        </TextCus>
      ) : null}
    </ViewCus>
  );
}

const styles = StyleSheet.create({
  txt: {
    flex: 1,
    height: '100%',
    paddingTop: 0,
    paddingBottom: 0,
    color: Colors.white,
  },
});
export interface ITextInputs extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<any>;
  success?: boolean;
  editable?: boolean;
  onSubmitEditing?: () => void;
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onChangeText?: (text: any) => void;
  onTouchStart?: () => void;
  placeholderTextColor?: string;
  placeholder?: string | undefined;
  value?: string;
  color?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  multiline?: boolean;
  numberOfLines?: number;
  textStyle?: any;
  onKeyPress?: any;
  error?: string;
  label?: string;
  isRequired?: boolean;
  styleWrapperInput?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions | undefined;
}
