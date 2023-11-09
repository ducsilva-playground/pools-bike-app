import React, { useState } from 'react';
import styles from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { ScrollView } from 'react-native';
import {
  Buttons,
  CheckBoxCus,
  MainLayout,
  ModalCus,
  TextCus,
  TextInputs,
  TouchCus,
  ViewCus,
} from 'components';
import { useAuth } from 'hooks';
import { Controller, useForm } from 'react-hook-form';
import { IFormRegisterData } from 'types';
import { validateFormRegister } from 'utils';
import { Colors } from 'theme';
import AuthSvg from 'assets/svg/AuthSvg';

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IFormRegisterData>({
    mode: 'onChange',
    resolver: yupResolver(validateFormRegister),
  });
  const { onRegister, loading } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [showPass, setShowPass] = useState({
    password: false,
    confirmPass: false,
  });

  const onSubmit = data => {
    onRegister({ ...data, name: 'user' });
  };

  return (
    <MainLayout showAuthHeader showTextBack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewCus px-24 style={styles.mainContainer}>
          <ViewCus style={styles.titleContainer}>
            <TextCus style={styles.titleText} whiteColor useI18n>
              auth.create_an_account
            </TextCus>
            <TextCus darkPrimaryColor useI18n>
              auth.fill_the_form_to_continue
            </TextCus>
          </ViewCus>
          <ViewCus style={styles.formContainer}>
            <ViewCus>
              <Controller
                control={control}
                defaultValue={''}
                name="email"
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextInputs
                    label="auth.email_address"
                    labelStyle={styles.inputTitle}
                    style={styles.inputContainer}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="auth.enter_your_email"
                    autoFocus={false}
                    error={errors?.email?.message}
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
                    label="auth.password"
                    labelStyle={styles.inputTitle}
                    style={styles.inputContainer}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="auth.enter_your_password"
                    error={errors?.password?.message}
                    rightIcon={
                      <TouchCus
                        onPress={() =>
                          setShowPass({
                            ...showPass,
                            password: !showPass.password,
                          })
                        }>
                        {AuthSvg.ShowPass(showPass.password)}
                      </TouchCus>
                    }
                    secureTextEntry={!showPass.password}
                  />
                )}
              />
            </ViewCus>
            <ViewCus>
              <Controller
                control={control}
                defaultValue={''}
                name="confirmPassword"
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextInputs
                    label="auth.confirm_password"
                    labelStyle={styles.inputTitle}
                    style={styles.inputContainer}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="auth.confirm_your_password"
                    error={errors?.confirmPassword?.message}
                    rightIcon={
                      <TouchCus
                        onPress={() =>
                          setShowPass({
                            ...showPass,
                            confirmPass: !showPass.confirmPass,
                          })
                        }>
                        {AuthSvg.ShowPass(showPass.confirmPass)}
                      </TouchCus>
                    }
                    secureTextEntry={!showPass.confirmPass}
                  />
                )}
              />
            </ViewCus>
            <ViewCus fd-row items-center mt--5 mb-24>
              <CheckBoxCus
                size={15}
                color={Colors.colorB1}
                onChange={e => setIsChecked(e)}
                status={'checked'}
              />
              <ViewCus fd-row>
                <TextCus ml-4 caption2 mt-1 useI18n darkPrimaryColor>
                  auth.i_agree_to_the
                </TextCus>
                <TouchCus onPress={() => setOpenModal(true)}>
                  <TextCus
                    style={{
                      borderWidth: 0.25,
                      borderBottomColor: Colors.colorB1,
                    }}
                    ml-4
                    caption2
                    mt-1
                    useI18n
                    darkPrimaryColor>
                    auth.terms_and_conditions
                  </TextCus>
                </TouchCus>
              </ViewCus>
            </ViewCus>
            <Buttons
              onPress={() => {
                handleSubmit(onSubmit)();
              }}
              disabled={!isValid || isSubmitting || !isChecked}
              loading={loading}>
              <TextCus bold body2 whiteColor style={styles.register} useI18n>
                button.register
              </TextCus>
            </Buttons>
          </ViewCus>
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
      <ModalCus
        visible={openModal}
        title="auth.terms_and_conditions"
        hideModal={() => setOpenModal(false)}>
        <TextCus
          style={{ lineHeight: 18 }}
          darkPrimaryColor
          caption1
          textAlign={'center'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          consectetur repellat minima laborum, sint aperiam perspiciatis, quasi
          voluptas, dolorum ab quas officiis neque optio tenetur ipsum magni
          atque ex? Deleniti? Lorem ipsum dolor sit amet consectetur
        </TextCus>
      </ModalCus>
    </MainLayout>
  );
};

export default Register;
