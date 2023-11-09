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
import { IFormUpdatePasswordData } from 'types';
import { validateFormUpdatePassword } from 'utils';
import { Colors } from 'theme';

const UpdatePassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IFormUpdatePasswordData>({
    mode: 'onChange',
    resolver: yupResolver(validateFormUpdatePassword),
  });
  const { onUpdatePassword, loading } = useAuth();
  const [showPass, setShowPass] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const onSubmit = data => {
    const { oldPassword, password } = data;
    onUpdatePassword({ oldPassword, password });
  };

  return (
    <MainLayout showAuthHeader titleAuthHeader="security.update_password">
      <ViewCus px-24 pt-24>
        <ViewCus>
          <Controller
            control={control}
            defaultValue={''}
            name="oldPassword"
            render={({ field: { value, onChange, onBlur } }) => (
              <TextInputs
                label="security.current_password"
                labelStyle={styles.labelStyle}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                autoFocus={false}
                error={errors?.oldPassword?.message}
                secureTextEntry={!showPass.currentPassword}
                rightIcon={
                  <TouchCus
                    onPress={() =>
                      setShowPass({
                        ...showPass,
                        currentPassword: !showPass.currentPassword,
                      })
                    }>
                    {AuthSvg.ShowPass(showPass.currentPassword)}
                  </TouchCus>
                }
              />
            )}
          />
        </ViewCus>
        <ViewCus>
          <Controller
            control={control}
            defaultValue={''}
            name="password"
            render={({ field: { value, onChange, onBlur } }) => (
              <TextInputs
                label="security.new_password"
                labelStyle={styles.labelStyle}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors?.password?.message}
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
            name="confirmPassword"
            render={({ field: { value, onChange, onBlur } }) => (
              <TextInputs
                label="security.confirm_new_password"
                labelStyle={styles.labelStyle}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors?.confirmPassword?.message}
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
          disabled={!isValid || isSubmitting}>
          <TextCus bold body2 whiteColor useI18n>
            button.update
          </TextCus>
        </Buttons>
      </ViewCus>
    </MainLayout>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({
  labelStyle: {
    color: Colors.colorB1,
  },
});
