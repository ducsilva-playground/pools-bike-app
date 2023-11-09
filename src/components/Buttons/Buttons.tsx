import React, { ReactNode } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { Colors } from 'theme';
import styles from './styles';

export function Buttons(props: IButtons) {
  const {
    style,
    icon,
    outline,
    full,
    round,
    loading,
    disabled,
    shadow,
    children,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      style={[
        [
          styles.default,
          { backgroundColor: disabled ? Colors.colorB1 : Colors.primary },
        ],
        outline && [
          styles.outline,
          { backgroundColor: Colors.colorB1, borderColor: Colors.primary },
        ],
        shadow && styles.shadow,
        full && styles.full,
        round && styles.round,
        style,
      ]}
      activeOpacity={0.9}>
      {icon ? icon : null}
      {children || 'Button'}
      {loading ? (
        <ActivityIndicator
          size="small"
          color={outline ? Colors.primary : Colors.white}
          style={styles.padLeft5}
        />
      ) : null}
    </TouchableOpacity>
  );
}

export interface IButtons {
  style?: any;
  shadow?: boolean;
  children?: ReactNode;
  icon?: ReactNode;
  outline?: boolean;
  full?: boolean;
  round?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}
