/**
 * @description the interface of user entity
 * @export
 * @interface IUser
 */

export interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  code_change: string;
  avatar: string;
  google_id: string;
  referral_code: string;
  active_code: string;
  pools_id: string;
  finger: string;
  passcode: string;
  point: number | null;
  phone_number: string;
}

export type TDriverDetail = 'messages' | 'members';
export interface IDriverDetail {
  group_id: string;
  type?: TDriverDetail;
  limit?: number;
}

export interface IParamsRequest {
  action: string;
  method: string;
  data: any;
  type: string;
  tid: number;
}

export interface IRSResult {
  success: boolean;
  message: string;
  title: string;
  data: IUser;
}

export enum EUserType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  UPDATE_AVATAR = 'UPDATE_AVATAR',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  FORGOT_PASSWORD_SCODE = 'FORGOT_PASSWORD_SCODE',
  FORGOT_PASSWORD_SPASSWORD = 'FORGOT_PASSWORD_SPASSWORD',
}

export interface INofifyState {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  options: {
    position: {
      vertical: 'top' | 'bottom';
      horizontal: 'left' | 'center' | 'right';
    };
    autoHideDuration: number;
    useI18n: boolean;
  };
}
// export interface IResponse {
//   action: string;
//   method: string;
//   tid: number;
//   type: string;
//   result: IRSResult;
// }

export interface IUserAction {
  type: string;
  user: IUser;
}

/**
 * @description the interface of user reducer entity in redux
 * @export
 * @interface IUserState
 */
export interface IUserState {
  loading: boolean;
  error: string | null;
  listNoti: [];
  countBadget: number;
  notiTransactions: [];
}
export interface ICompanyState {
  loading: boolean;
  error: string | null;
  company: ICompany;
  tutorials: ITutorial[];
  contact: any;
}

export interface ITutorial {
  answer?: string; //'<p>Li&ecirc;n hệ ph&ograve;ng dịch vụ kh&aacute;ch h&agrave;ng</p>';
  appcode?: string; //'CC';
  qnatype?: string; //'QNA03';
  question?: string; //'Thủ tục chuyển nhượng?';
  status?: string; //'W';
  typename?: string; //'Chuyển nhượng và bàn giao';
}

export interface ICompany {
  companyName?: string; //'PHAT DAT REAL ESTATE DEVELOPMENT CORP';
  address?: string; //'';
  phonenumber?: string; //'';
  website?: string; //'';
  contact?: string; //'';
  contactphone?: string; //' ';
  users?: number; // 5000;
  expired?: string; // '01/12/2050';
}
export interface ISurveyState {
  loading?: boolean;
  error: string | null;
  listSurvey: [];
  questionSurvey: [];
  answerSurvey: [];
}

/**
 * @description the interface of push notification data
 * @export
 * @interface PushNotifcation
 */
export interface PushNotifcation {
  id: string;
  token: string;
  brand?: string;
  osName?: string;
  modelId?: string;
  osVersion?: string;
  modelName?: string;
  deviceName?: string;
  manufacturer?: string;
}
export interface IFormConfirmOTP {
  code: string;
  confirmKey: string;
  confirmCode: string;
  secKey?: string;
  route?: string;
}

export interface IFormResetPassword {
  password: string;
  secKey: string;
  confirmCode: string;
  route?: string;
  newPassword?: string;
  confirmPassword?: string;
}
export interface IFormImgData {
  documentcode?: string; // documentcode
  autonum?: string; //autonum
  filename?: string; // name
  subject?: string; // subject
  category?: string; // category
  data?: string; // data
  linkto: string;
  referencekey1?: string; // user.prospect
  referencekey2?: string;
  comments?: string;
  name?: string | any;
  uri?: string | any;
}
export interface IFormSkipLimit {
  start: number;
  limit: number;
}

export interface IListSurveyParams {
  searchString?: string;
  surveyid?: string;
  custid?: string;
  customer?: string;
}

export interface IFormNewsList {
  searchString?: string; // item
  newstype: string; // code
  sort: string;
  project?: string;
  eventstype?: string;
  promotiontype?: string;
  customer?: string;
  newsid?: string;
  eventscode?: string;
  promotioncode?: string;
  type?: string;
  cusname?: string; // user?.name,
  attend?: string; // value,
}
export interface IFormEventList {
  searchString?: string; // item
  sort: string;
  promotiontype?: string;
  eventstype: string; // code
  customer: string; // user?.prospect
}
export interface IItemNotification {
  content?: string;
  createddate?: string;
  formid?: string;
  isread?: string;
  recordid?: string;
  referenceid?: string;
  targetlink?: string;
  title?: string;
  tvcdb?: string;
}
export interface IItemNoti {
  item?: IItemNotification;
  ispin?: boolean;
}

export interface INotiParams {
  recordid?: string;
  operatorid?: string;
  isread?: string;
}

export enum UserTab {
  MyQRCode = 0,
  ScanQRCode = 1,
}

export interface IRequestAccountParams {
  status?: string; //'W';
  ticketdesc?: string; //'Yêu cầu đóng tài khoản';
  tic?: string; //'';
  ticketclass?: string; //'02';
  ticketchannel?: string; //'06';
  requestdate?: string; //'2021-09-27 17:22:25';
  customer?: string;
  ccapp?: string;
}

export interface ILanguageParams {
  language?: string;
}

export interface IAddBankInformation {
  bank_id: string;
  account_number: string;
  account_name: string;
  identification: string;
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IContact {
  problem?: string;
  rating?: string;
  message?: string;
}

export interface IUserGG {
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
}
