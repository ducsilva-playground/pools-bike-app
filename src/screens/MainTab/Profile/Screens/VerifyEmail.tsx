import React, { useCallback, useEffect, useState } from 'react';
import {
  Buttons,
  MainLayout,
  ModalCus,
  TextCus,
  TouchCus,
  ViewCus,
} from 'components';
import { useAuth } from 'hooks';
import { NavigationService } from 'navigation';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import { IFormVerifyOTP } from 'types';
import LogoNotText from 'assets/svg/LogoNotText';
import { Colors } from 'theme';
import { height, width } from 'utils';

const HARD_OTP = '123456';
export default function VerifyEmail() {
  const {
    control,
    formState: { isDirty, isValid, isSubmitting },
    setValue,
    getValues,
    handleSubmit,
  } = useForm<IFormVerifyOTP>();
  const { params } = NavigationService.route() || '';
  const { onVerifyOTP } = useAuth();
  const [openModalConfirm, setOpenModalConfirm] = useState(false);

  useEffect(() => {
    params?.type_check && setValue('typeCheck', params.type_check);
    params?.otp_code && setValue('otpCode', params.otp_code);
    params?.phoneNumber && setValue('phoneNumber', params.phoneNumber);
  }, [JSON.stringify(params)]);

  const onSubmit = useCallback(
    (value: IFormVerifyOTP) => {
      onVerifyOTP({
        typeCheck: value?.typeCheck,
        otpCode: params.otp_code,
        phoneNumber: value?.phoneNumber,
      });
    },
    [onVerifyOTP],
  );

  useEffect(() => {
    if (getValues('otpCode') === HARD_OTP) {
    }
  }, [getValues('otpCode')]);

  const checkOtp = () => {
    return !isDirty || !isValid;
    // return getValues('otpCode') !== HARD_OTP || !isDirty || !isValid;
  };
  console.log(isSubmitting, handleSubmit, checkOtp, onSubmit);
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
                xxx@gmail.com
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
          <ViewCus fd-row items-center mt-10 style={styles.errOtp}>
            <TextCus errorColor textAlign={'left'} bold caption1 useI18n>
              validateForm.errorOtp
            </TextCus>
          </ViewCus>
          <Buttons
            style={styles.btnSend}
            disabled={false}
            onPress={() => {
              setOpenModalConfirm(true);
              // handleSubmit(onSubmit)();
            }}>
            <TextCus useI18n whiteColor body2 bold>
              button.verify
            </TextCus>
          </Buttons>

          <ViewCus fd-row items-center mt-15>
            <TextCus whiteColor useI18n>
              auth.didnt_receive_code
            </TextCus>
            <TouchCus onPress={() => {}}>
              <TextCus ml-5 primaryColor useI18n>
                auth.resend_code
              </TextCus>
            </TouchCus>
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
        hideModal={() => setOpenModalConfirm(false)}
        visible={openModalConfirm}
        title="profile.note">
        <ViewCus>
          <TextCus
            useI18n
            body1
            textAlign="center"
            whiteColor
            style={styles.textContent}>
            profile.desc_popup_confirm
          </TextCus>
          <ViewCus fd-row items-center justify-space-between mt-24>
            <Buttons outline style={styles.btnClose}>
              <TextCus useI18n primaryColor body2>
                button.close
              </TextCus>
            </Buttons>
            <Buttons style={styles.btnVerify}>
              <TextCus useI18n whiteColor body2>
                button.verify
              </TextCus>
            </Buttons>
          </ViewCus>
        </ViewCus>
      </ModalCus>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height - 70,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCheck: {
    maxWidth: 253,
    textAlign: 'center',
    marginTop: -85,
    justifyContent: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  rowItem: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputOTP: {
    width: (width - 122) / 6,
    height: 'auto',
    borderRadius: 0,
    borderBottomColor: Colors.colorB1,
    borderBottomWidth: 1,
    textAlign: 'center',
    color: Colors.white,
    fontSize: 32,
    fontWeight: '700',
    maxWidth: 100,
  },
  btnSend: {
    width: width - 48,
    marginTop: 32,
  },
  errOtp: {
    width: '100%',
  },
  btnClose: {
    width: '47%',
    backgroundColor: Colors.transparent,
  },
  btnVerify: {
    width: '47%',
  },
  textContent: {
    marginTop: 10,
    lineHeight: 22,
    letterSpacing: 0.024,
    fontWeight: '400',
  },
});
