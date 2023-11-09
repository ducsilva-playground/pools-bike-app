import { NavigationService } from 'navigation';
import React, { ReactNode, useEffect } from 'react';
import { StatusBar } from 'react-native';
import styles from './styles';

import { TouchCus, ViewCus } from 'components';

export function Header(props: IHeader) {
  const {
    onPressLeft,
    renderLeft,
    renderCenter,
    renderRight,
    notGoBack = false,
    styleContainer,
  } = props;

  useEffect(() => {
    const option = 'dark-content';
    StatusBar.setBarStyle(option, true);
  });

  return (
    <ViewCus style={[styles.headerContainer, styleContainer]}>
      {renderLeft && (
        <ViewCus style={[styles.flex1, styleContainer]}>
          <TouchCus
            onPress={() =>
              notGoBack
                ? null
                : onPressLeft
                ? onPressLeft()
                : NavigationService.goBack()
            }>
            {renderLeft()}
          </TouchCus>
        </ViewCus>
      )}
      {renderCenter && (
        <ViewCus style={styles.centerContainer}>{renderCenter()}</ViewCus>
      )}

      {renderRight && (
        <ViewCus style={styles.rightContainer}>{renderRight()}</ViewCus>
      )}
    </ViewCus>
  );
}

export interface IHeader {
  styleContainer?: any;
  styleLeft?: any;
  styleCenter?: any;
  styleRight?: any;
  styleRightSecond?: any;
  renderCenter?: () => ReactNode;
  renderLeft?: () => ReactNode;
  renderRight?: () => ReactNode;
  renderRightSecond?: () => ReactNode;
  onPressRightSecond?: () => void;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  title?: string;
  subTitle?: string;
  barStyle?: string;
  notGoBack?: boolean;
  showCenter?: boolean;
  showRight?: boolean;
  // type?: 'threeItem' | 'twoItem' | 'oneItem' | 'none';
}
