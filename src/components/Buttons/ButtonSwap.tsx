import SvgIcon from 'assets/IconSVG';
import React from 'react';
import { Buttons } from './Buttons';
import styles from './styles';

interface Props {
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  icon?: any;
}

export const ButtonSwap: React.FC<Props> = ({
  onPress,
  loading,
  disabled,
  icon = <SvgIcon.Swap />,
}) => {
  return (
    <Buttons
      style={[styles.swapBtn]}
      onPress={onPress}
      disabled={disabled}
      loading={loading}>
      {icon}
    </Buttons>
  );
};
