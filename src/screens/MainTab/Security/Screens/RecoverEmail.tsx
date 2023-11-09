import { Buttons, MainLayout, TextCus, TextInputs, ViewCus } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Colors } from 'theme';

const RecoverEmail = () => {
  const { t } = useTranslation();
  return (
    <MainLayout showAuthHeader titleAuthHeader="security.recover_email">
      <ViewCus px-24 mt-20>
        <TextInputs
          labelStyle={styles.labelStyle}
          label={t('security.recover_email')}
        />
        <ViewCus fd-row justify-flex-end>
          <Buttons outline style={styles.btnOutline}>
            <TextCus useI18n body2 primaryColor>
              security.get_otp
            </TextCus>
          </Buttons>
        </ViewCus>
        <TextInputs
          labelStyle={styles.labelStyle}
          label={t('security.verify_code')}
        />
        <ViewCus fd-row justify-flex-end>
          <Buttons outline style={styles.btnOutline}>
            <TextCus body2 useI18n primaryColor>
              button.verify
            </TextCus>
          </Buttons>
        </ViewCus>

        <ViewCus mt-30>
          <Buttons>
            <TextCus bold body2 useI18n>
              button.update
            </TextCus>
          </Buttons>
        </ViewCus>
      </ViewCus>
    </MainLayout>
  );
};

export default RecoverEmail;

const styles = StyleSheet.create({
  btnOutline: {
    width: 148,
    marginBottom: 26,
    backgroundColor: Colors.transparent,
    height: 36,
  },
  labelStyle: {
    color: Colors.colorB1,
  },
});
