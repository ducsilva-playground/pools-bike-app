import { Buttons, MainLayout, TextCus, TextInputs, ViewCus } from 'components';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './styles';
import LogoNotText from 'assets/svg/LogoNotText';
import { ScrollView } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { EnumRequestOtp, validateEmailShema } from 'utils';
import { useAuth } from 'hooks';
import { NavigationService, Routes } from 'navigation';

export default function ForgotPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validateEmailShema),
  });
  const { onRequestOtp, loading } = useAuth();

  const onSubmit = data => {
    onRequestOtp(
      {
        request_type: EnumRequestOtp.FORGOT,
        email: data?.email,
      },
      () => {
        NavigationService.navigate(Routes.OtpForgotPassword, {
          email: data?.email,
        });
      },
    );
  };

  return (
    <MainLayout showAuthHeader showTextBack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewCus px-24 style={styles.container}>
          <ViewCus fd-column items-center justify-center>
            <LogoNotText />
            <ViewCus fd-row items-center mt-40 style={{ maxWidth: 253 }}>
              <TextCus textAlign="center" useI18n>
                auth.content_forgot_password
              </TextCus>
            </ViewCus>
          </ViewCus>
          <ViewCus fd-row items-center mt-24>
            <Controller
              control={control}
              defaultValue={''}
              name="email"
              render={({ field: { value, onChange, onBlur } }) => (
                <TextInputs
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder="auth.enter_your_email"
                  autoFocus={false}
                  style={styles.inputEmail}
                  error={errors.email?.message}
                />
              )}
            />
          </ViewCus>

          <Buttons
            loading={loading}
            style={styles.btnSend}
            disabled={!isValid || !isDirty}
            onPress={() => {
              handleSubmit(onSubmit)();
            }}>
            <TextCus useI18n>
              button.send
            </TextCus>
          </Buttons>
        </ViewCus>
        <ViewCus items-center justify-center>
          <TextCus
            style={{
              position: 'absolute',
              bottom: 20,
            }}>
            Copyright 2023. Powered by Pools
          </TextCus>
        </ViewCus>
      </ScrollView>
    </MainLayout>
  );
}
