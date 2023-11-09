import { IconNames } from 'assets';
import { HomeLayout, IconCus, TextCus, ViewCus } from 'components';
import React, { useMemo } from 'react';
import { Colors } from 'theme';
import { IDataCard } from 'types';
import { CardItem } from '../../Components';
import styles from './styles';

const Settings = () => {
  const headerProps = {
    renderLeft: () => (
      <IconCus name={IconNames.CHEVRON_LEFT} size={18} color={Colors.white} />
    ),
    renderCenter: () => (
      <ViewCus>
        <TextCus title4 medium whiteColor>
          Cài đặt
        </TextCus>
      </ViewCus>
    ),
  };

  const ACCOUNT_SETTING: IDataCard[] = useMemo(
    () => [
      {
        title: 'Đổi mật khẩu',
        // onPress: () => NavigationService.navigate(Routes.FAQ),
        id: 'change_password',
      },
      {
        title: 'Xóa tài khoản',
        // onPress: () => NavigationService.navigate(Routes.Term),
        id: 'remove_account',
      },
    ],
    [],
  );

  return (
    <HomeLayout
      bgColor={Colors.main}
      statusBarMode={'dark-content'}
      safeAreaEdges={['left', 'top', 'right']}
      header={{ ...headerProps }}>
      <ViewCus style={styles.container} px-16>
        <CardItem iconRight data={ACCOUNT_SETTING} isRequire={false} />
      </ViewCus>
    </HomeLayout>
  );
};

export default Settings;
