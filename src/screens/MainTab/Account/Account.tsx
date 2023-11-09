// import Icon from 'assets/svg/Icon';
import { HomeLayout, TextCus, ViewCus } from 'components';
import { useAuth } from 'hooks';
import { NavigationService, Routes } from 'navigation';
import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import { Colors } from 'theme';
import { IDataCard } from 'types';
import { AccountManagement, CardItem } from './Components';
import styles from './styles';

const Account = () => {
  const { onLogout } = useAuth();
  const headerProps = {
    notGoBack: true,
    style: styles.bgHead,
    renderLeft: () => (
      <ViewCus>
        <TextCus title2 medium>
          Tài khoản
        </TextCus>
      </ViewCus>
    ),
  };

  const ACCOUNT_MANAGEMENT: IDataCard[] = useMemo(
    () => [
      {
        title: 'Tài khoản thanh toán',
        icon: Icon.CardPayment(),
        onPress: () => NavigationService.navigate(Routes.Bank),
        id: 'info',
      },
      {
        title: 'Trợ giúp',
        icon: Icon.PhoneBorder(),
        onPress: () => NavigationService.navigate(Routes.Support),
        id: 'report',
      },
      {
        title: 'Cài đặt',
        icon: Icon.Setting(),
        onPress: () => NavigationService.navigate(Routes.Setting),
        id: 'conditions',
      },
    ],
    [],
  );

  const ACCOUNT_LOGOUT: IDataCard[] = useMemo(
    () => [
      {
        title: <TextCus mainColor>Đăng xuất</TextCus>,
        // icon: Icon.LogoutFill({ color: Colors.main }),
        onPress: () => {
          onLogout();
        },
        id: 'logout',
      },
    ],
    [],
  );

  return (
    <HomeLayout
      bgColor={Colors.white}
      statusBarMode={'dark-content'}
      safeAreaEdges={['left', 'top', 'right']}
      header={{ ...headerProps }}>
      <ViewCus style={styles.container}>
        <ScrollView>
          <AccountManagement />
          <ViewCus px-16>
            <CardItem iconLeft data={ACCOUNT_MANAGEMENT} isRequire={false} />
            <CardItem iconLeft data={ACCOUNT_LOGOUT} isRequire={false} />
          </ViewCus>
        </ScrollView>
      </ViewCus>
    </HomeLayout>
  );
};

export default Account;
