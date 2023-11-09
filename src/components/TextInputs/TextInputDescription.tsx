import { TextCus, ViewCus } from 'components';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { Colors } from 'theme';
import { DefaultFont } from 'theme/typography';

export function TextInputDescription(props: ITextInputs) {
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
  } = props;
  return (
    <ViewCus mb-16 style={[styleWrapperInput]}>
      {label ? (
        <ViewCus mb-5 fd-row>
          <TextCus>{label}</TextCus>
          {isRequired && <TextCus>*</TextCus>}
        </ViewCus>
      ) : null}
      <ViewCus
        style={[{ borderColor: error ? Colors.main : Colors.main }, style]}>
        {leftIcon}
        <TextInput
          {...props}
          style={[
            styles.txt,
            {
              fontFamily: DefaultFont,
            },
            textStyle,
          ]}
          numberOfLines={numberOfLines}
          // spellCheck={false}
          // autoCorrect={false}
          selectionColor={Colors.bgBlocAdv}
          placeholderTextColor={Colors.card}
          placeholder={t(`${placeholder ?? ''}`) as string}
          onKeyPress={onKeyPress}
          editable={disabled}
        />
        {rightIcon}
      </ViewCus>
      {error ? (
        <TextCus mainColor mt-5>
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
  },
  wrapperInput: {},
});
export interface ITextInputs extends TextInputProps {
  style?: StyleProp<ViewStyle>;
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
  isRequired?: string;
  styleWrapperInput?: StyleProp<ViewStyle>;
}
