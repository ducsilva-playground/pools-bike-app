import {
  BottomSheetCommon,
  Buttons,
  MainLayout,
  TextCus,
  ViewCus,
} from 'components';
import React, { useEffect, useRef, useState } from 'react';
import { Colors } from 'theme';
import { Switch, StyleSheet } from 'react-native';
import SecuritySvg from 'assets/svg/SecuritySvg';
import { RBSheetProps } from 'react-native-raw-bottom-sheet';
import { IRefBottom } from 'types';
import { height } from 'utils';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { useNotify } from 'hooks';
import { useTranslation } from 'react-i18next';

const Biometric = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const refRBSheet = useRef<RBSheetProps | IRefBottom>();
  const { danger, info } = useNotify();
  const { t } = useTranslation();
  const rnBiometrics = new ReactNativeBiometrics();
  const [isSupport, setIsSupport] = useState(false);

  const createKeys = async () => {
    try {
      const resultObject = await rnBiometrics.createKeys();
      const { publicKey } = resultObject;
      console.log(publicKey);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    rnBiometrics.isSensorAvailable().then(resultObject => {
      const { available, biometryType } = resultObject;
      if (available && biometryType === BiometryTypes.TouchID) {
        // console.log('TouchID is supported');
      } else if (available && biometryType === BiometryTypes.FaceID) {
        info(t('notify.warning'), 'Your device only support faceId');
        setIsSupport(true);
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        // console.log('Biometrics is supported');
      } else {
        danger(t('notify.error'), 'Your device does not support biometrics');
        setIsSupport(true);
      }
    });
  }, []);

  return (
    <MainLayout showAuthHeader titleAuthHeader="security.biometric">
      <ViewCus px-24 pt-14>
        <ViewCus fd-row items-center justify-space-between mt-10 mb-10>
          <TextCus colorCF body1 useI18n>
            security.enable
          </TextCus>
          <Switch
            trackColor={{ false: Colors.color33, true: Colors.color1E }}
            thumbColor={Colors.white}
            ios_backgroundColor={Colors.color33}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </ViewCus>
        <ViewCus
          fd-row
          items-center
          justify-space-between
          style={styles.boxFinger}>
          <ViewCus fd-row items-center style={{ gap: 15 }}>
            {SecuritySvg.Finger()}
            <TextCus>Fingerprint 1</TextCus>
          </ViewCus>
          <ViewCus fd-row items-center style={{ gap: 15 }}>
            {SecuritySvg.Edit()}
            {SecuritySvg.delete()}
          </ViewCus>
        </ViewCus>

        <ViewCus
          fd-row
          items-center
          justify-space-between
          style={styles.boxFinger}>
          <ViewCus fd-row items-center style={{ gap: 15 }}>
            {SecuritySvg.Finger()}
            <TextCus>Fingerprint 1</TextCus>
          </ViewCus>
          <ViewCus fd-row items-center style={{ gap: 15 }}>
            {SecuritySvg.Edit()}
            {SecuritySvg.delete()}
          </ViewCus>
        </ViewCus>

        <ViewCus mt-32>
          <Buttons
            disabled={isSupport}
            onPress={() => refRBSheet?.current?.open()}>
            <TextCus body2 bold useI18n>
              button.add
            </TextCus>
          </Buttons>
        </ViewCus>
      </ViewCus>
      <BottomSheetCommon ref={refRBSheet} height={height / 1.5}>
        <ViewCus
          p-24
          style={{ height: '90%' }}
          fd-column
          items-center
          justify-space-between>
          <TextCus body1 darkPrimaryColor>
            Place Your Finger
          </TextCus>

          <ViewCus
            fd-row
            items-center
            justify-space-between
            mt-12
            style={{ width: '100%' }}>
            <Buttons
              onPress={() => refRBSheet?.current?.close()}
              outline
              style={[
                styles.styleBtn,
                { backgroundColor: Colors.transparent },
              ]}>
              <TextCus bold body2 useI18n>
                button.cancel
              </TextCus>
            </Buttons>
            <Buttons
              disabled={isSupport}
              style={styles.styleBtn}
              onPress={createKeys}>
              <TextCus bold body2 useI18n>
                button.add
              </TextCus>
            </Buttons>
          </ViewCus>
        </ViewCus>
      </BottomSheetCommon>
    </MainLayout>
  );
};

export default Biometric;

const styles = StyleSheet.create({
  boxFinger: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: Colors.color11,
    borderRadius: 12,
    marginTop: 12,
  },
  styleBtn: {
    width: '47%',
  },
});
