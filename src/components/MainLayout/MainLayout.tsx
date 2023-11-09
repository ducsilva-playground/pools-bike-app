import SvgIcon from 'assets/IconSVG';

import {
  Header,
  SafeAreaStatusBar,
  SafeAreaViewCus,
  TextCus,
  ViewCus,
} from 'components';
import React from 'react';
import { Colors } from 'theme';

const MainLayout = (props: IMainLayoutProps) => {
  const {
    children,
    showAuthHeader,
    titleAuthHeader,
    onPressLeft,
    notGoBack = false,
    renderRight = () => {},
    showTextBack,
  } = props;

  return (
    <SafeAreaViewCus bgColor={Colors.backgroundMain}>
      <>
        <SafeAreaStatusBar />
        {showAuthHeader && (
          <Header
            title={titleAuthHeader ?? ''}
            renderLeft={() => (
              <ViewCus fd-row items-flex-end w-75>
                {SvgIcon.Back()}
                {showTextBack && (
                  <TextCus useI18n body1 ml-5 whiteColor mb-1>
                    auth.back
                  </TextCus>
                )}
              </ViewCus>
            )}
            renderRight={renderRight}
            renderCenter={() => (
              <ViewCus justify-center mt--8 items-center>
                <TextCus medium title3 useI18n>
                  {titleAuthHeader || ''}
                </TextCus>
              </ViewCus>
            )}
            onPressLeft={onPressLeft}
            notGoBack={notGoBack}
          />
        )}
        {children}
      </>
    </SafeAreaViewCus>
  );
};

export default MainLayout;

export interface IMainLayoutProps {
  children?: React.ReactNode;
  statusBar?: any;
  showAuthHeader?: boolean;
  titleAuthHeader?: string;
  style?: any;
  edges?: any;
  testID?: string;
  onPressLeft?: () => void;
  notGoBack?: boolean;
  renderRight?: any;
  renderCenter?: any;
  colorTitle?: string;
  bgColor?: string;
  showTextBack?: boolean;
}
