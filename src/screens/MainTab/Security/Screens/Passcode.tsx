import { Buttons, MainLayout, TextCus, ViewCus } from 'components';
import { NavigationService, Routes } from 'navigation';
import React, { useState } from 'react';
import { Switch } from 'react-native';
import { Colors } from 'theme';

const Passcode = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <MainLayout showAuthHeader titleAuthHeader="security.passcode">
      <ViewCus px-24 pt-24>
        <ViewCus fd-row items-center justify-space-between>
          <TextCus colorCF body1 useI18n>
            security.enable
          </TextCus>
          <Switch
            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
            trackColor={{ false: Colors.color33, true: Colors.color1E }}
            thumbColor={Colors.white}
            ios_backgroundColor={Colors.color33}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </ViewCus>
        <ViewCus fd-row items-center justify-space-between mt-10>
          <TextCus colorCF body1 useI18n>
            security.use_passcode_on_access_app
          </TextCus>
          <Switch
            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
            trackColor={{ false: Colors.color33, true: Colors.color1E }}
            thumbColor={Colors.white}
            ios_backgroundColor={Colors.color33}
            onValueChange={toggleSwitch}
            value={!isEnabled}
          />
        </ViewCus>
        <ViewCus mt-64>
          <Buttons
            onPress={() => NavigationService.navigate(Routes.InsertPasscode)}>
            <TextCus body2 bold useI18n>
              button.set_passcode
            </TextCus>
          </Buttons>
        </ViewCus>
      </ViewCus>
    </MainLayout>
  );
};

export default Passcode;
