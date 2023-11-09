import { IconNames } from 'assets';
import { IconCus } from 'components/IconCus';
import { TextCus } from 'components/TextCus';
import React from 'react';
import { ViewStyle } from 'react-native';
import { Colors } from 'theme';
import { Buttons } from './Buttons';
import styles from './styles';

interface Props {
  onPress: () => void;
  loading?: boolean;
  textBtn?: string;
  disabled?: boolean;
  styleAction?: ViewStyle;
  isShowIcon?: boolean;
}

export const ButtonBottom: React.FC<Props> = ({
  onPress,
  loading,
  disabled,
  textBtn,
  isShowIcon,
}) => {
  return (
    <Buttons
      style={[styles.btlogi, styles.btnActive]}
      onPress={onPress}
      disabled={disabled}
      loading={loading}>
      <TextCus useI18n >
        {textBtn ?? 'continue'}
      </TextCus>
      {isShowIcon && (
        <IconCus
          name={IconNames.ARROW_RIGHT}
          size={16}
          color={Colors.white}
        />
      )}
    </Buttons>
  );
};
