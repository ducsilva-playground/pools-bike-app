import { HomeLayout, TextCus, TouchCus, ViewCus } from 'components';
import { useAuth } from 'hooks';
import { NavigationService, Routes } from 'navigation';
import React from 'react';
import { ScrollView } from 'react-native';
import { Colors } from 'theme';
import { EMenu } from 'types';
import styles from './styles';

interface IOptionItem {
  title?: string;
  icon?: any;
  route?: string;
  onPress?: () => void;
}
const OptionItem = ({ title, icon, route, onPress }: IOptionItem) => {
  const { onLogout } = useAuth();
  return (
    <TouchCus
      onPress={() => {
        title === EMenu.LOG_OUT
          ? onLogout()
          : route
          ? NavigationService.navigate(route)
          : onPress
          ? onPress()
          : {};
      }}>
      <ViewCus style={styles.optionContainer}>
        <ViewCus style={{ gap: 8, flexDirection: 'row' }}>
          <ViewCus>{icon}</ViewCus>
          <ViewCus>
            <TextCus>{title}</TextCus>
          </ViewCus>
        </ViewCus>

        {/* <ViewCus>{CommonSvg.arrowRight()}</ViewCus> */}
      </ViewCus>
    </TouchCus>
  );
};

export default function Setting() {
  const [action, setAction] = React.useState('menu');
  const optAction = { action, setAction };

  return (
    <HomeLayout bgColor={Colors.white} header {...optAction}>
      <ViewCus f-1>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
          <ViewCus style={{ paddingHorizontal: 24, gap: 16 }}>
            <ViewCus>
              <TextCus>My profile</TextCus>
              <OptionItem
                title={EMenu.CHANGE_PASS}
                // icon={MenuSvg.password()}
                route={Routes.ChangePassword}
              />
              {/* <OptionItem
                route={''}
                title={EMenu.SUBCRIPTION}
                icon={MenuSvg.sub()}
              />
              <OptionItem
                route={''}
                title={EMenu.SHOP_PROFILE}
                icon={MenuSvg.shop_profile()}
              /> */}
            </ViewCus>
            <ViewCus>
              <TextCus>Setting</TextCus>
              <OptionItem
                route={Routes.SettingLang}
                title={EMenu.LANGUAGE}
                // icon={MenuSvg.language()}
              />
            </ViewCus>
            <ViewCus>
              <TextCus>SUPPORT</TextCus>
              {/* <OptionItem
                route={''}
                title={EMenu.SUPPORT_US}
                icon={MenuSvg.support_us()}
              /> */}
              <OptionItem
                route={''}
                title={EMenu.RATE_APP}
                // icon={MenuSvg.rate_app()}
              />
              <OptionItem
                title={EMenu.CONTACT_US}
                // icon={MenuSvg.contact_us()}
                route={Routes.ContactUs}
              />
              {/* <OptionItem
                route={''}
                title={EMenu.PRIVACY}
                icon={MenuSvg.privacy()}
              /> */}
              <OptionItem
                route={''}
                title={EMenu.LOG_OUT}
                // icon={MenuSvg.log_out()}
              />
            </ViewCus>
          </ViewCus>
        </ScrollView>
      </ViewCus>
    </HomeLayout>
  );
}
