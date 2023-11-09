/**
 * @description the hook to handle all authentication's action
 */
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { NavigationService, Routes } from 'navigation';
import * as UserActions from 'store/user';
import * as HomeActions from 'store/home';
import { UserSelectors } from 'store/user';
import { IInfoDevice, IUser } from 'types';
import { API_ENDPOINT, EnumLogin, KEY_CONTEXT } from 'utils';
import { useKey } from './useKey';
import { useNotify } from './useNotify';
import { HomeSelectors, setPasscode } from 'store/home';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoadingGlobal } from 'components';
import { useHome } from './useHome';
import { getRequest, postRequest } from 'utils/services/fetch';

GoogleSignin.configure({
  webClientId:
    '819569331887-jpm26758m6e58i740ala3cdu4ornp688.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
  profileImageSize: 120,
});

export const useAuth = () => {
  const dispatch = useDispatch();
  const { danger, success } = useNotify();
  const { saveKeyStore, resetKeyStore, getKeyStore } = useKey();
  const { t } = useTranslation();
  const { onGetExchangeRate } = useHome();
  const loading = useSelector(UserSelectors.getLoading);
  const user =
    (useSelector(UserSelectors.getAttrByKey('user')) as IUser) || null;
  const infoDevice =
    (useSelector(HomeSelectors.getAttrByKey('infoDevice')) as IInfoDevice) ||
    null;
  const code =
    (useSelector(HomeSelectors.getAttrByKey('passcode')) as string) || null;

  const onLogin = useCallback(
    async formData => {
      try {
        if (!formData?.remember) {
          resetKeyStore(KEY_CONTEXT.REMEMBER_ME);
        } else {
          saveKeyStore(KEY_CONTEXT.REMEMBER_ME, JSON.stringify(formData));
        }
        dispatch(
          UserActions.postBaseActionsRequest(
            {
              formData: {
                ...formData.dataLogin,
                ...infoDevice,
                login_at: Date.now(),
                type: EnumLogin.USER,
              },
              endPoint: API_ENDPOINT.LOGIN,
            },
            res => {
              if (res.status === 200) {
                saveKeyStore(
                  KEY_CONTEXT.ACCESS_TOKEN,
                  res.data[0].access_token,
                );
                if (formData?.fromRegister) {
                  NavigationService.navigate(Routes.SetupPasscode, {
                    fromOtp: true,
                  });
                } else {
                  NavigationService.navigate(Routes.OtpLogin, {
                    email: formData.dataLogin.email,
                  });
                }
              } else {
                danger(t('notify.error'), res.message);
              }
            },
          ),
        );
      } catch (error: any) {
        danger(t('notify.error'), `${error?.message}`);
      }
    },
    [danger, success, infoDevice],
  );

  const onLoginGoogle = useCallback(async () => {
    try {
      const ress = await GoogleSignin.hasPlayServices();
      console.log(
        '===================== RESSSSSSSSSS ==================',
        ress,
      );
      const resGoogle = await GoogleSignin.signIn();
      console.log('================= resGoogle ================', resGoogle);
      dispatch(
        UserActions.postBaseActionsRequest(
          {
            formData: {
              ...infoDevice,
              login_at: Date.now(),
              type: EnumLogin.GOOGLE,
              idToken: resGoogle.idToken,
            },
            endPoint: API_ENDPOINT.LOGIN,
          },
          res => {
            if (res.status === 200) {
              saveKeyStore(KEY_CONTEXT.ACCESS_TOKEN, res.data[0].access_token);
              NavigationService.navigate(Routes.SetupPasscode, {
                fromOtp: true,
              });
            } else {
              danger(t('notify.error'), res.message);
            }
          },
        ),
      );
    } catch (error: any) {
      danger(t('notify.error'), `${error?.message}`);
    }
  }, [danger, success, infoDevice]);

  const onRegister = useCallback(
    async formData => {
      try {
        dispatch(
          UserActions.postBaseActionsRequest(
            {
              formData: formData,
              endPoint: API_ENDPOINT.REGISTER,
            },
            res => {
              if (res.status === 200) {
                success(t('notify.success'), res.message);
                NavigationService.navigate(Routes.OtpRegister, {
                  email: formData.email,
                  password: formData.password,
                });
              } else {
                danger(t('notify.error'), res.message);
              }
            },
          ),
        );
      } catch (error: any) {
        danger(t('notify.error'), `${error?.message}`);
      }
    },
    [danger, success],
  );
  // const onUpdateProfile = useCallback(
  //   async formData => {
  //     try {
  //       dispatch(
  //         UserActions.postBaseActionsRequest(
  //           {
  //             formData: formData,
  //             endPoint: API_ENDPOINT.UPDATE_PROFILE,
  //           },
  //           res => {
  //             if (res.status === 200) {
  //               success(t('notify.success'), res.message);
  //               NavigationService.navigate(Routes.OtpRegister, {
  //                 email: formData.email,
  //                 password: formData.password,
  //               });
  //             } else {
  //               danger(t('notify.error'), res.message);
  //             }
  //           },
  //         ),
  //       );
  //     } catch (error: any) {
  //       danger(t('notify.error'), `${error?.message}`);
  //     }
  //   },
  //   [danger, success],
  // );
  const onUpdateProfile = async formData => {
    try {
      const res = await postRequest({
        endPoint: API_ENDPOINT.UPDATE_PROFILE,
        formData: formData,
        isFormData: true,
      });
      console.log('🚀 ~ file: useAuth.ts:185 ~ onUpdateProfile ~ res:', res);
      if (res.status === 200 && res.message === 'Update User Success') {
        success(t('notify.success'), res.message);
        dispatch(UserActions.getDataSuccess({ user: res?.data?.[0] }));
      }
    } catch (error: any) {
      danger(t('notify.error'), `${error?.message}`);
    }
  };
  const onGetProfile = async () => {
    try {
      const res = await getRequest({
        endPoint: API_ENDPOINT.GET_PROFILE,
      });
      if (res.status === 200 && res.message === 'profile') {
        dispatch(UserActions.getDataSuccess(res?.data?.[0]));
        return res.data[0];
      }
    } catch (error: any) {
      danger(t('notify.error'), `${error?.message}`);
    }
  };

  const onConfirmOtp = useCallback(
    async (formData: any, callback?: (res) => void) => {
      try {
        dispatch(
          UserActions.postBaseActionsRequest(
            {
              formData: {
                request_type: formData?.request_type,
                otp_code: formData?.otp_code,
              },
              endPoint: API_ENDPOINT.CONFIRM_OTP,
            },
            res => {
              if (res.status === 200) {
                if (formData?.fromOtpLogin) {
                  NavigationService.navigate(Routes.SetupPasscode, {
                    fromOtp: true,
                  });
                } else {
                  onLogin({
                    dataLogin: formData.dataLogin,
                    fromRegister: true,
                  });
                }
              } else {
                callback?.(res);
              }
            },
          ),
        );
      } catch (error: any) {
        danger(t('notify.error'), `${error?.message}`);
      }
    },
    [danger, success],
  );

  const onConfirmOtpForgotPassword = useCallback(
    async (formData: any, callback?: (res) => void) => {
      try {
        dispatch(
          UserActions.postBaseActionsRequest(
            {
              formData: {
                request_type: formData?.request_type,
                otp_code: formData?.otp_code,
              },
              endPoint: API_ENDPOINT.CONFIRM_OTP,
            },
            res => {
              callback?.(res);
            },
          ),
        );
      } catch (error: any) {
        danger(t('notify.error'), `${error?.message}`);
      }
    },
    [danger, success],
  );

  const onRequestOtp = useCallback(
    async (formData: any, callback?: () => void) => {
      try {
        dispatch(
          UserActions.postBaseActionsRequest(
            {
              formData: formData,
              endPoint: API_ENDPOINT.REQUEST_OTP,
            },
            res => {
              if (res.status === 200) {
                success(t('notify.success'), res.message);
                callback?.();
              } else {
                danger(t('notify.error'), res.message || 'Error server');
              }
            },
          ),
        );
      } catch (error: any) {
        danger(t('notify.error'), `${error?.message}`);
      }
    },
    [danger, success],
  );

  const onCreatePasscode = useCallback(
    async formData => {
      LoadingGlobal(true);
      try {
        dispatch(
          UserActions.postBaseActionsRequest(
            {
              formData: formData,
              endPoint: API_ENDPOINT.CREATE_PASSCODE,
            },
            res => {
              if (res.status === 200) {
                NavigationService.navigate(Routes.InsertPasscode);
                LoadingGlobal(false);
              } else {
                danger(t('notify.error'), res.message);
                LoadingGlobal(false);
              }
            },
          ),
        );
      } catch (error: any) {
        danger(t('notify.error'), `${error?.message}`);
        LoadingGlobal(false);
      }
    },
    [danger, success],
  );

  const onCheckPasscode = useCallback(
    async formData => {
      LoadingGlobal(true);
      try {
        dispatch(
          UserActions.postBaseActionsRequest(
            {
              dataKey: 'user',
              formData: formData,
              endPoint: API_ENDPOINT.CHECK_PASSCODE,
            },
            res => {
              if (!res.success) {
                NavigationService.navigate(Routes.Login);
                LoadingGlobal(false);
              }
              if (res.status === 200) {
                success(t('notify.success'), res.message);
                NavigationService.navigate(Routes.HomeTabs);
                LoadingGlobal(false);
              } else {
                LoadingGlobal(false);
                danger(t('notify.error'), res.message);
              }
            },
          ),
        );
      } catch (error: any) {
        danger(t('notify.error'), 'Please logout and login again !');
        danger(t('notify.error'), `${error?.message}`);
        LoadingGlobal(false);
      }
    },
    [danger, success],
  );

  const onForgotPassword = useCallback(
    async formData => {
      try {
        dispatch(
          UserActions.postBaseActionsRequest(
            {
              formData: formData,
              endPoint: API_ENDPOINT.FORGOT_PASSWORD,
            },
            res => {
              if (res.status === 200) {
                success(t('notify.success'), res.message);
                NavigationService.navigate(Routes.Login);
              } else {
                danger(t('notify.error'), res.message);
              }
            },
          ),
        );
      } catch (error: any) {
        danger(t('notify.error'), `${error?.message}`);
      }
    },
    [danger, success],
  );

  const onUpdatePassword = useCallback(
    async formData => {
      try {
        dispatch(
          UserActions.postBaseActionsRequest(
            {
              formData: formData,
              endPoint: API_ENDPOINT.UPDATE_PASSWORD,
            },
            res => {
              if (res.status === 200) {
                success(t('notify.success'), res.message);
                NavigationService.goBack();
              } else {
                danger(t('notify.error'), res.message);
              }
            },
          ),
        );
      } catch (error: any) {
        danger(t('notify.error'), `${error?.message}`);
      }
    },
    [danger, success],
  );

  const onLogout = useCallback(async () => {
    await resetKeyStore();
    await GoogleSignin.signOut();
    dispatch(UserActions.reset());
    dispatch(HomeActions.reset());
    NavigationService.navigate(Routes.Login);
  }, [dispatch]);

  const getCode = async () => {
    try {
      const res = await getKeyStore(KEY_CONTEXT.PASSCODE);
      res && dispatch(setPasscode(res));
    } catch (error) {
      NavigationService.navigate(Routes.Login);
    }
  };

  // =============== SWAP ==================
  const onDepositToken = useCallback(
    async (formData, refRBSheet: any) => {
      try {
        dispatch(
          UserActions.postBaseActionsRequest(
            {
              formData: formData,
              endPoint: API_ENDPOINT.DEPOSIT_TOKEN,
            },
            res => {
              if (res.status === 200) {
                success(t('notify.success'), res.message);
                refRBSheet.current.close();
                onGetExchangeRate();
              } else {
                danger(t('notify.error'), res.message);
                refRBSheet.current.close();
              }
            },
          ),
        );
      } catch (error: any) {
        danger(t('notify.error'), `${error?.message}`);
      }
    },
    [danger, success],
  );

  const onWithdrawPoint = useCallback(
    async (formData, refRBSheet) => {
      try {
        dispatch(
          UserActions.postBaseActionsRequest(
            {
              formData: formData,
              endPoint: API_ENDPOINT.WITHDRAW_POINT,
            },
            res => {
              if (res.status === 200) {
                success(t('notify.success'), res.message);
                refRBSheet.current.close();
                onGetExchangeRate();
              } else {
                danger(t('notify.error'), res.message);
                refRBSheet.current.close();
              }
            },
          ),
        );
      } catch (error: any) {
        danger(t('notify.error'), `${error?.message}`);
      }
    },
    [danger, success],
  );

  return {
    user,
    code,
    loading,
    onLogout,
    onLogin,
    onRegister,
    onConfirmOtp,
    onRequestOtp,
    onCreatePasscode,
    onCheckPasscode,
    onForgotPassword,
    onConfirmOtpForgotPassword,
    getCode,
    onLoginGoogle,
    onUpdatePassword,
    onDepositToken,
    onWithdrawPoint,
    onUpdateProfile,
    onGetProfile,
  };
};
