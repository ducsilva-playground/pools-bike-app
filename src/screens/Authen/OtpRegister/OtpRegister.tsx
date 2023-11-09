import { Buttons, MainLayout, TextCus, TouchCus, ViewCus } from 'components';
import { useAuth } from 'hooks';
import { NavigationService } from 'navigation';
import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import { IFormVerifyOTP } from 'types';
import styles from './styles';
import LogoNotText from 'assets/svg/LogoNotText';
import { EnumRequestOtp } from 'utils';

export default function OtpRegister() {
  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useForm<IFormVerifyOTP>();
  const { params } = NavigationService.route();
  const { loading, onConfirmOtp, onRequestOtp } = useAuth();
  const [error, setError] = useState();

  const onSubmit = useCallback(
    (value: IFormVerifyOTP) => {
      onConfirmOtp(
        {
          request_type: EnumRequestOtp.REGISTER,
          otp_code: value.otpCode,
          dataLogin: params,
        },
        err => {
          setError(err);
        },
      );
    },
    [onConfirmOtp],
  );

  return (
    <MainLayout showAuthHeader showTextBack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewCus px-24 style={styles.container}>
          <ViewCus
            style={styles.textCheck}
            fd-column
            items-center
            justify-center>
            <LogoNotText />
            <ViewCus fd-row items-center mt-40>
              <TextCus style={{ textAlign: 'center' }} useI18n body1 whiteColor>
                auth.check_email
              </TextCus>
              <TextCus mx-5 useI18n body1 primaryColor>
                {params?.email}
              </TextCus>
              <TextCus useI18n body1 whiteColor>
                auth.and
              </TextCus>
            </ViewCus>
            <TextCus useI18n body1 whiteColor>
              auth.insert_OTP
            </TextCus>
          </ViewCus>

          <ViewCus style={[styles.rowItem]}>
            <Controller
              control={control}
              name="otpCode"
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
                maxLength: 6,
              }}
              render={({ field: { onChange } }) => (
                <OtpInputs
                  keyboardType="phone-pad"
                  handleChange={onChange}
                  numberOfInputs={6}
                  autofillFromClipboard={false}
                  inputStyles={[styles.inputOTP]}
                  autoFocus
                />
              )}
            />
          </ViewCus>
          {error && (
            <ViewCus fd-row items-center mt-10 style={styles.errOtp}>
              <TextCus errorColor textAlign={'left'} bold caption1 useI18n>
                validateForm.errorOtp
              </TextCus>
            </ViewCus>
          )}
          <Buttons
            style={styles.btnSend}
            disabled={!isDirty || !isValid}
            loading={loading}
            onPress={() => {
              handleSubmit(onSubmit)();
            }}>
            <TextCus useI18n whiteColor body2 bold>
              button.send
            </TextCus>
          </Buttons>

          <ViewCus fd-row items-center mt-15>
            <TextCus whiteColor useI18n>
              auth.didnt_receive_code
            </TextCus>
            <TouchCus
              onPress={() =>
                onRequestOtp({
                  request_type: EnumRequestOtp.REGISTER,
                  email: params?.email,
                })
              }>
              <TextCus ml-5 primaryColor useI18n>
                auth.resend_code
              </TextCus>
            </TouchCus>
          </ViewCus>
          {/* <TouchCus
            onPress={() => NavigationService.navigate(Routes.HomeTabs)}
            style={{ marginTop: 50 }}>
            <ViewCus
              fd-row
              mb-30
              items-center
              justify-center
              style={styles.btnLater}>
              <TextCus bold body1 primaryColor useI18n>
                auth.verify_later
              </TextCus>
            </ViewCus>
          </TouchCus> */}
        </ViewCus>

        <ViewCus items-center justify-center>
          <TextCus
            style={{
              position: 'absolute',
              bottom: 20,
            }}
            lightPrimaryColor
            caption1>
            Copyright 2023. Powered by Pools
          </TextCus>
        </ViewCus>
      </ScrollView>
    </MainLayout>
  );
}
