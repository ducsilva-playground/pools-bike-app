import React from 'react';
import {
  HomeLayout,
  TextCus,
  ViewCus,
  KeyboardScrollView,
  IconCus,
  TouchCus,
  ImageCus,
} from 'components';
import styles from './styles';
import { Colors } from 'theme';
import { BankName, IconNames } from 'assets';
import { styleSpacing } from 'utils';
import { NavigationService, Routes } from 'navigation';

const Bank = () => {
  const headerProps = {
    renderLeft: () => (
      <IconCus name={IconNames.CHEVRON_LEFT} size={18} color={Colors.white} />
    ),
    renderCenter: () => (
      <ViewCus>
        <TextCus title4 medium whiteColor>
          Tài khoản thanh toán
        </TextCus>
      </ViewCus>
    ),
  };

  const renderBankCard = () => (
    <TouchCus onPress={() => {}}>
      <ViewCus bg-white mt-16 p-16 fd-row items-center br-12>
        <ImageCus source={BankName.vietcom} size={24} />
        <TextCus ml-16>ATM 8888</TextCus>
      </ViewCus>
    </TouchCus>
  );

  return (
    <HomeLayout
      bgColor={Colors.main}
      statusBarMode={'dark-content'}
      safeAreaEdges={['left', 'top', 'right']}
      header={{ ...headerProps }}>
      <ViewCus style={styles.container}>
        <KeyboardScrollView
          textBtn={'Thêm ngân hàng'}
          iconLeft
          onPress={() => NavigationService.navigate(Routes.BankSelected)}
          styleBtn={styleSpacing('pb-30')}>
          <ViewCus px-16>{renderBankCard()}</ViewCus>
        </KeyboardScrollView>
      </ViewCus>
    </HomeLayout>
  );
};

export default Bank;
