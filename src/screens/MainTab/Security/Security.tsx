import { MainLayout, TextCus, TouchCus, ViewCus } from 'components';
import { NavigationService, Routes } from 'navigation';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'theme';

const Security = () => {
  const ListMenuSecurity = [
    {
      title: 'security.device_management',
      onPress: () => NavigationService.navigate(Routes.Profile),
    },
    {
      title: 'security.recover_email',
      onPress: () => NavigationService.navigate(Routes.RecoverEmail),
    },
    {
      title: 'security.change_password',
      onPress: () => NavigationService.navigate(Routes.UpdatePassword),
    },
    {
      title: 'security.passcode',
      onPress: () => NavigationService.navigate(Routes.Passcode),
    },
    {
      title: 'security.biometric',
      onPress: () => NavigationService.navigate(Routes.Biometric),
    },
  ];

  const renderMenuSecurity = useCallback(() => {
    return ListMenuSecurity.map(({ title, onPress }, index) => {
      return (
        <TouchCus style={styles.rowMenu} key={index} onPress={onPress}>
          <ViewCus>
            <TextCus whiteColor body2 medium useI18n>
              {title}
            </TextCus>
          </ViewCus>
        </TouchCus>
      );
    });
  }, [ListMenuSecurity]);

  return (
    <MainLayout showAuthHeader titleAuthHeader="security.security">
      <ViewCus px-24 pt-10 fd-column items-center>
        {renderMenuSecurity()}
      </ViewCus>
    </MainLayout>
  );
};

export default Security;

const styles = StyleSheet.create({
  rowMenu: {
    paddingTop: 20,
    paddingBottom: 12,
    borderBottomWidth: 0.25,
    borderColor: Colors.color7E,
    width: '100%',
    marginTop: 5,
  },
});
