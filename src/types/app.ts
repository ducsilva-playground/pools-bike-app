import { ReactNode } from 'react';
import { IUser } from './user';

export interface IContextState {
  currentLocation: any;
}

/**
 * @description the interface of user authentication entity
 * @export
 * @interface IAppState
 */
export interface IAppState {
  loading: boolean;
  language: string;
  error: string | null;
  isAuth: boolean;
  user?: IUser | null;
}

export interface IPayloadHome {
  isObject?: boolean;
  redirect?: boolean;
  isPaginate?: boolean;
  formData?: any; // IParamsRequest;
  dataKey?: keyof IAppState | keyof IHomeState | keyof IWalletState;
  isPagination?: boolean;
  type?: string | undefined | null;
  endPoint?: string;
  headers?: any;
  isFormData?: boolean;
}

export interface IResponse {
  status: number;
  data: any[];
  message: string;
  success: boolean;
}

export type ICallback = (results: IResponse) => void;

export interface IHomeActionPayload {
  payload: IPayloadHome;
  callback?: ICallback;
}

/**
 * @description the interface of user login entity
 * @export
 * @interface IFormDataLogin
 */
export interface IFormDataLogin {
  email?: string;
  password?: string;
}

export interface IFormVerifyOTP {
  otpCode: string;
}

export interface IUserKYC {
  name?: string;
  fullName?: string;
  phone: string;
  email?: string;
  bank_account?: string;
  cccd_front?: string;
  cccd_back?: string;
  gpkd_front?: string;
  gpkd_back?: string;
  birthday?: string;
  address?: string;
}

export interface IFormLoginNonePass {
  phonenumber: string;
  secKey: string;
  captcha: string;
  newPassword?: string;
  route?: string;
  refreshToken?: string;
}

export interface IFormLoginGuest {
  secKey: string;
  phonenumber?: string; //'',
  password?: string; //'',
  mail?: string; //BaseSetting.EMAIL_GUEST,
  captcha?: string; //'',
  token?: string; //BaseSetting.TOKEN,
}

export interface IFormForgotPassword {
  newPassword: string;
  confirmNewPassword: string;
}

/**
 * @description the interface of user register entity
 * @export
 * @interface IFormRegisterData
 */
export interface IFormRegisterData {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface IFormUpdatePasswordData {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}
export interface IFormUpdateProfileData {
  name?: string;
  email?: string;
  phone?: string;
}

/**
 * @description the interface of user login entity
 * @export
 * @interface ILoginForm
 */
export interface ILoginForm {
  email: string;
  password: string;
  remember?: boolean;
}

/**
 * @description the interface of request body entity
 * @export
 * @interface IAppState
 */
export interface IPageData<T = any> {
  page: number;
  limit: number;
  query?: T;
}

export interface IActivityProps {
  animating?: boolean;
  color?: string;
  size?: string | any;
  loading?: boolean;
  backdropColor?: string;
}

export interface IAnimatedProps {
  children?: ReactNode;
  style?: any;
  duration?: number;
  toValue?: number;
  useNativeDriver?: boolean;
  type?: any;
}

/**
 * @description the interface of home
 * @export
 * @interface IHomeState
 */

export interface IInfoDevice {
  device_id: string;
  device_name: string;
  ip_address: string;
  platform: string;
}
export type TNews = {
  content: string;
  id: number;
  is_delete: boolean;
  description: string;
  title: string;
  thumbnail: string;
  created_at: string;
};
export type TEvent = {
  content: string;
  id: number;
  is_delete: boolean;
  description: string;
  title: string;
  thumbnail: string;
  created_at: string;
  event_end_date: string;
  event_start_date: string;
};
export type TMenu = {
  id: number;
  created_at: string;
  content: string;
  type: string;
  title: string;
  icon: string;
};
export interface IHomeState {
  loading: boolean;
  error: string | null;
  isOpenMenu: boolean;
  infoDevice: IInfoDevice | null;
  passcode: string | null;
  news: any[] | null;
  events: any[] | null;
  wallets: any[] | null;
  appServices: any[] | null;
  servicesEarn: any[] | null;
  account: any;
}
export interface IWalletState {
  loading: boolean;
  error: string | null;
}
