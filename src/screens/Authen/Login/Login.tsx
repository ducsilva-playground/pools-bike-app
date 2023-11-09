import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthSvg from 'assets/svg/AuthSvg';
import LogoSvg from 'assets/svg/LogoSvg';
import {
  Buttons,
  MainLayout,
  TextCus,
  TextInputs,
  TouchCus,
  ViewCus,
} from 'components';
import { EDivider } from 'components/EDivider/EDivider';
import { useAuth, useDevice, useKey } from 'hooks';
import { NavigationService, Routes } from 'navigation';
import { Controller, useForm } from 'react-hook-form';
import { ILoginForm } from 'types';
import { KEY_CONTEXT, parseJSON, validateFormLogin, width } from 'utils';
import { setInfoDevice } from 'store/home';
import { useDispatch } from 'react-redux';

export default function Login() {
  const { onLogin, loading, code, getCode, onLoginGoogle } = useAuth();
  const { getKeyStore } = useKey();
  const { infoDevice, getInfoDevice } = useDevice();
  const dispatch = useDispatch();
  // const { WidgetExample } = NativeModules;

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    setValue,
  } = useForm<ILoginForm>({
    mode: 'onChange',
    resolver: yupResolver(validateFormLogin),
  });
  const [checked, setChecked] = useState<
    'unchecked' | 'checked' | 'indeterminate'
  >('unchecked');
  const [isActive, setIsActive] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    if (infoDevice) {
      dispatch(setInfoDevice(infoDevice));
    }
  }, [infoDevice]);

  const onSubmit = data => {
    onLogin({ dataLogin: data });
  };

  useEffect(() => {
    const getDefault = async () => {
      const d = await getKeyStore(KEY_CONTEXT.REMEMBER_ME);
      if (d) {
        const { email, password } = parseJSON(d) || '';
        setChecked('checked');
        setValue('email', email);
        setValue('password', password);
        setIsActive(true);
        return;
      }
      setChecked('unchecked');
    };
    getDefault();
    getInfoDevice();
    getCode();
  }, []);

  const handleCheckPasscode = () => {
    code
      ? NavigationService.navigate(Routes.InsertPasscode)
      : NavigationService.navigate(Routes.SetupPasscode);
  };

  return (
    <MainLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewCus p-24 pt-32 style={styles.container}>
          <ViewCus items-center justify-center mb-40>
            <LogoSvg />
          </ViewCus>
          <ViewCus>
            <ViewCus fd-row items-center>
              <Controller
                control={control}
                defaultValue={''}
                name="email"
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextInputs
                    style={styles.styleInput}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="auth.email"
                    autoFocus={false}
                    error={errors?.email?.message}
                  />
                )}
              />
            </ViewCus>
            <ViewCus fd-row items-center>
              <Controller
                control={control}
                defaultValue={''}
                name="password"
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextInputs
                    style={styles.styleInput}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="auth.password"
                    error={errors?.password?.message}
                    rightIcon={
                      <TouchCus onPress={() => setShowPass(pre => !pre)}>
                        {AuthSvg.ShowPass(showPass)}
                      </TouchCus>
                    }
                    secureTextEntry={!showPass}
                  />
                )}
              />
            </ViewCus>
            <ViewCus fd-row items-center justify-space-between mb-20>

              <TouchCus
                onPress={() => {
                  NavigationService.navigate(Routes.ForgotPassword);
                }}>
                <TextCus useI18n >
                  auth.forgot_password
                </TextCus>
              </TouchCus>
            </ViewCus>
            <Buttons
              loading={loading}
              disabled={(!isValid || !isDirty) && !isActive}
              onPress={() => {
                handleSubmit(onSubmit)();
              }}>
              <TextCus useI18n color-main fs-20>
                auth.login
              </TextCus>
            </Buttons>

            <ViewCus fd-row items-center justify-center my-10>
              <EDivider width={width / 2 - 42} />
              <TextCus useI18n m-10>
                auth.or
              </TextCus>
              <EDivider width={width / 2 - 42} />
            </ViewCus>

            <TouchCus onPress={() => onLoginGoogle()}>
              <ViewCus
                fd-row
                py-10
                items-center
                justify-center
                style={styles.btnGG}>
                {AuthSvg.Google()}
                <TextCus style={styles.styleGG} useI18n>
                  auth.continue_with_google
                </TextCus>
              </ViewCus>
            </TouchCus>

            {/* <TouchCus onPress={handleCheckPasscode}>
              <ViewCus
                mt-16
                fd-row
                py-10
                mb-30
                items-center
                justify-center
                style={styles.btnLater}>
                <TextCus bold body1 primaryColor useI18n>
                  auth.login_later
                </TextCus>
              </ViewCus>
            </TouchCus> */}

            <ViewCus fd-row items-center justify-center mt-20>
              <TextCus whiteColor useI18n body2>
                auth.dont_have_an_account
              </TextCus>
              <TouchCus
                onPress={() => {
                  NavigationService.navigate(Routes.Register);
                }}>
                <TextCus useI18n whiteColor body2 ml-3 semibold>
                  auth.sign_up
                </TextCus>
              </TouchCus>
            </ViewCus>
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
    </MainLayout>
  );
}
