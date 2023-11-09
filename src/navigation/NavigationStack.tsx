/* eslint-disable react/no-unstable-nested-components */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useCallback } from 'react';

import * as Screens from 'screens';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'assets/IconSVG';
import { TextCus, ViewCus } from 'components';
import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { navigationRef } from './NavigationService';
import { Routes } from './Routes';

import { useAuth } from 'hooks';
import { width } from 'utils';

const Tab = createBottomTabNavigator();

const TAB_BOTTOM = [
  {
    name: Routes.Home,
    component: Screens.Home,
    title: 'tab_bottom.home',
    activeIcon: Icon.HomeActive,
    icon: Icon.Home,
  },
  {
    name: Routes.Home,
    component: Screens.Home,
    title: 'tab_bottom.earn',
    activeIcon: Icon.EarnActive,
    icon: Icon.Earn,
  },
  {
    name: Routes.Home,
    component: Screens.Home,
    title: 'tab_bottom.swap',
    activeIcon: Icon.SwapActive,
    icon: Icon.SwapTab,
  },
  {
    name: Routes.Home,
    component: Screens.Home,
    title: 'tab_bottom.stats',
    activeIcon: Icon.StatsActive,
    icon: Icon.Stats,
  },
];

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.wrapBottomTab,
        tabBarItemStyle: styles.wrapItem,
        headerShown: false,
        tabBarInactiveTintColor: Colors.color62,
        tabBarActiveTintColor: Colors.secondary,
      }}>
      {TAB_BOTTOM.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: ({ focused }) => (
              <ViewCus h-18>
                <TextCus
                  useI18n
                  style={focused ? styles.activeText : styles.text}>
                  {item.title}
                </TextCus>
              </ViewCus>
            ),
            tabBarIcon: ({ focused }) => {
              return (
                <ViewCus h-24>
                  {focused ? item?.activeIcon() : item.icon()}
                </ViewCus>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const UnauthNavigator = () => (
  <Stack.Navigator
    initialRouteName={Routes.Login}
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.Login} component={Screens.Login} />
    <Stack.Screen name={Routes.OtpLogin} component={Screens.OtpLogin} />
    <Stack.Screen name={Routes.OtpRegister} component={Screens.OtpRegister} />
    <Stack.Screen
      name={Routes.OtpForgotPassword}
      component={Screens.OtpForgotPassword}
    />
    <Stack.Screen name={Routes.HomeTabs} component={HomeTabs} />
    <Stack.Screen
      name={Routes.ForgotPassword}
      component={Screens.ForgotPassword}
    />
    <Stack.Screen
      name={Routes.ConfirmPassword}
      component={Screens.ConfirmPassword}
    />
    <Stack.Screen name={Routes.Register} component={Screens.Register} />
    <Stack.Screen
      name={Routes.InsertPasscode}
      component={Screens.InsertPasscode}
    />
    <Stack.Screen
      name={Routes.SetupPasscode}
      component={Screens.SetupPasscode}
    />
  </Stack.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    initialRouteName={Routes.InsertPasscode}>
    <Stack.Screen name={Routes.HomeTabs} component={HomeTabs} />
    <Stack.Screen name={Routes.Login} component={Screens.Login} />
    <Stack.Screen name={Routes.OtpLogin} component={Screens.OtpLogin} />
    <Stack.Screen name={Routes.Profile} component={Screens.Profile} />
    <Stack.Screen name={Routes.VerifyEmail} component={Screens.VerifyEmail} />
    <Stack.Screen name={Routes.UpdateNft} component={Screens.UpdateNft} />
    <Stack.Screen name={Routes.DetailNft} component={Screens.DetailNft} />
    <Stack.Screen name={Routes.Security} component={Screens.Security} />
    <Stack.Screen name={Routes.RecoverEmail} component={Screens.RecoverEmail} />
    <Stack.Screen
      name={Routes.UpdatePassword}
      component={Screens.UpdatePassword}
    />
    <Stack.Screen name={Routes.Passcode} component={Screens.Passcode} />
    <Stack.Screen
      name={Routes.InsertPasscode}
      component={Screens.InsertPasscode}
    />
    <Stack.Screen
      name={Routes.SetupPasscode}
      component={Screens.SetupPasscode}
    />
    <Stack.Screen name={Routes.Biometric} component={Screens.Biometric} />
    <Stack.Screen name={Routes.NewDetail} component={Screens.NewDetail} />
  </Stack.Navigator>
);

export const Navigator = () => {
  const { user, code } = useAuth();

  const Check = useCallback(() => {
    if (code && user) {
      return <StackNavigator />;
    }
    return <UnauthNavigator />;
  }, [code, user]);

  return (
    <>
      <NavigationContainer ref={navigationRef}>{Check()}</NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  wrapBottomTab: {
    width,
    height: 80,
    backgroundColor: Colors.backgroundMain,
    borderTopColor: Colors.color33,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#84848426',
    justifyContent: 'space-between',
    paddingVertical: 0,
    paddingHorizontal: 32,
    paddingTop: 7,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
    position: 'absolute',
    overflow: 'hidden',
  },
  wrapBottom: {
    position: 'absolute',
  },
  wrapItem: {
    height: 50,
    marginHorizontal: 4,
    paddingVertical: 0,
  },
  activeText: {
    fontWeight: '600',
    fontSize: 14,
    color: Colors.secondary,
    textAlign: 'center',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.07,
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
    color: Colors.color62,
    textAlign: 'center',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.07,
  },
});
