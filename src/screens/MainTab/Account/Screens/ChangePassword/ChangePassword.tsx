import { yupResolver } from '@hookform/resolvers/yup';
import {
  Buttons,
  KeyboardScrollView,
  MainLayout,
  TextCus,
  TextInputs,
  ViewCus,
} from 'components';
import { useUser } from 'hooks';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IChangePassword } from 'types';
import { yupChangePass } from 'utils';
import styles from './styles';

export default function ChangePassword() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IChangePassword>({
    mode: 'onChange',
    resolver: yupResolver(yupChangePass),
  });
  const { onStaffChangePass } = useUser();

  const onSubmit = data => {
    onStaffChangePass(data);
  };

  return (
    <MainLayout showBg={false} showAuthHeader>
      <KeyboardScrollView defaultBtn={false}>
        <ViewCus mt-50>
          <ViewCus style={styles.titleContainer}>
            <TextCus style={styles.titleText} useI18n>
              text_title.change_password
            </TextCus>
          </ViewCus>
          <ViewCus style={styles.formContainer}>
            <ViewCus style={styles.inputForm}>
              <Controller
                control={control}
                defaultValue={''}
                name="oldPassword"
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextInputs
                    label="label.old_pass"
                    labelStyle={styles.inputTitle}
                    style={styles.inputPasswordContainer}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="place_holder.old_pass"
                    error={errors?.oldPassword?.message}
                    isRequired
                  />
                )}
              />
            </ViewCus>
            <ViewCus style={styles.inputForm}>
              <Controller
                control={control}
                defaultValue={''}
                name="newPassword"
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextInputs
                    label="label.new_pass"
                    labelStyle={styles.inputTitle}
                    style={styles.inputPasswordContainer}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="place_holder.new_pass"
                    error={errors?.newPassword?.message}
                    isRequired
                  />
                )}
              />
            </ViewCus>
            <ViewCus style={styles.inputForm}>
              <Controller
                control={control}
                defaultValue={''}
                name="confirmPassword"
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextInputs
                    label="label.confirm_pass"
                    labelStyle={styles.inputTitle}
                    style={styles.inputPasswordContainer}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="place_holder.confirm_pass"
                    error={errors?.confirmPassword?.message}
                    isRequired
                  />
                )}
              />
            </ViewCus>
            <Buttons
              onPress={() => {
                handleSubmit(onSubmit)();
              }}
              disabled={!isValid || isSubmitting}>
              <TextCus style={styles.register} useI18n>
                button.update
              </TextCus>
            </Buttons>
          </ViewCus>
        </ViewCus>
      </KeyboardScrollView>
    </MainLayout>
  );
}
