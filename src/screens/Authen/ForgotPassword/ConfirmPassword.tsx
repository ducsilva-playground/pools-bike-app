import { yupResolver } from '@hookform/resolvers/yup';
import AuthSvg from 'assets/svg/AuthSvg';
import {
  Buttons,
  MainLayout,
  TextCus,
  TextInputs,
  TouchCus,
  ViewCus,
} from 'components';
import { useAuth } from 'hooks';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IFormForgotPassword } from 'types';
import { validateForgotPasswordSchema } from 'utils';
import { Colors } from 'theme';
import { NavigationService } from 'navigation';

const ConfirmPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<IFormForgotPassword>({
    mode: 'onChange',
    resolver: yupResolver(validateForgotPasswordSchema),
  });
  const { onForgotPassword, loading } = useAuth();
  const [showPass, setShowPass] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  const { params } = NavigationService.route();

  const onSubmit = data => {
    onForgotPassword({
      email: params?.email,
      password: data?.newPassword,
      code_change: params?.codeChange,
    });
  };

  return (
    <MainLayout showAuthHeader titleAuthHeader="security.update_password">
      <ViewCus px-24 pt-24>
        <ViewCus>
          <Controller
            control={control}
            defaultValue={''}
            name="newPassword"
            render={({ field: { value, onChange, onBlur } }) => (
              <TextInputs
                label="security.new_password"
                labelStyle={styles.labelStyle}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors?.newPassword?.message}
                secureTextEntry={!showPass.newPassword}
                rightIcon={
                  <TouchCus
                    onPress={() =>
                      setShowPass({
                        ...showPass,
                        newPassword: !showPass.newPassword,
                      })
                    }>
                    {AuthSvg.ShowPass(showPass.newPassword)}
                  </TouchCus>
                }
              />
            )}
          />
        </ViewCus>
        <ViewCus mb-30>
          <Controller
            control={control}
            defaultValue={''}
            name="confirmNewPassword"
            render={({ field: { value, onChange, onBlur } }) => (
              <TextInputs
                label="security.confirm_new_password"
                labelStyle={styles.labelStyle}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors?.confirmNewPassword?.message}
                secureTextEntry={!showPass.confirmPassword}
                rightIcon={
                  <TouchCus
                    onPress={() =>
                      setShowPass({
                        ...showPass,
                        confirmPassword: !showPass.confirmPassword,
                      })
                    }>
                    {AuthSvg.ShowPass(showPass.confirmPassword)}
                  </TouchCus>
                }
              />
            )}
          />
        </ViewCus>

        <Buttons
          loading={loading}
          onPress={() => {
            handleSubmit(onSubmit)();
          }}
          disabled={!isValid || !isDirty}>
          <TextCus bold body2 whiteColor useI18n>
            button.update
          </TextCus>
        </Buttons>
      </ViewCus>
    </MainLayout>
  );
};

export default ConfirmPassword;

const styles = StyleSheet.create({
  labelStyle: {
    color: Colors.colorB1,
  },
});
