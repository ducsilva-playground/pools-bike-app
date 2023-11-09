import React, { useMemo } from 'react';
import { HomeLayout, TextCus, ViewCus, IconCus } from 'components';
import styles from './styles';
import { Colors } from 'theme';
import { IconNames } from 'assets';
import { CardItem } from '../../Components';
import { IDataCard } from 'types';
import { openLink } from 'utils';

const Support = () => {
  const headerProps = {
    renderLeft: () => (
      <IconCus name={IconNames.CHEVRON_LEFT} size={18} color={Colors.white} />
    ),
    renderCenter: () => (
      <ViewCus>
        <TextCus title4 medium whiteColor>
          Trợ giúp
        </TextCus>
      </ViewCus>
    ),
  };

  const ACCOUNT_SUPPORT_HOT: IDataCard[] = useMemo(
    () => [
      {
        title: 'Gọi hỗ trợ',
        onPress: () => {
          openLink('telephone', '0936 008 079');
        },
        textRight: '0936 008 079',
        id: 'call',
      },
      {
        title: 'Gửi email',
        textRight: 'Namsao.support@gmail.com',
        onPress: () => {
          openLink('email', 'Namsao.support@gmail.com');
        },
        id: 'sendmail',
      },
    ],
    [],
  );

  const ACCOUNT_SUPPORT: IDataCard[] = useMemo(
    () => [
      {
        title: 'Các câu hỏi thường gặp',
        // onPress: () => NavigationService.navigate(Routes.FAQ),
        id: 'FAQ',
      },
      {
        title: 'Điều khoản sử dụng',
        // onPress: () => NavigationService.navigate(Routes.Term),
        id: 'term',
      },
      {
        title: 'Chính sách bảo mật',
        // onPress: () => NavigationService.navigate(Routes.Policy),
        id: 'policy',
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
        <CardItem iconRight data={ACCOUNT_SUPPORT} isRequire={false} />
        <CardItem iconRight data={ACCOUNT_SUPPORT_HOT} isRequire={false} />
      </ViewCus>
    </HomeLayout>
  );
};

export default Support;
