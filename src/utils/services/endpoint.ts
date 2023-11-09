export const API_ENDPOINT = {
  // ============= Auth =============
  LOGIN: 'auth/login',
  REGISTER: 'auth/register-user',
  UPDATE_PROFILE: 'auth/update-profile',
  FORGOT_PASSWORD: 'auth/forgot-password',
  CONFIRM_OTP: 'auth/check-otp',
  REQUEST_OTP: 'auth/request-opt',
  GET_PROFILE: 'auth/profile',
  CREATE_PASSCODE: 'auth/create-passcode',
  CHECK_PASSCODE: 'auth/check-passcode',
  UPDATE_PASSWORD: 'auth/change-password',
  // ============= End Auth ============

  // ============== Home ===============
  GET_LIST_BANNER: 'banner/all',
  GET_LIST_EVENT: 'events/all',
  GET_LIST_NEWS: 'news/all',
  GET_LIST_APP: 'app-services/user',
  CLAIM_APP: 'app-services/claim',
  GET_STATISTIC_EARN: 'app-services/statistic-earning',
  GET_TOP_EARN: 'app-services/top-earning-month',
  GET_CHART_HOME: 'exchange-rate/chart?duration=',
  SETTING_DOC: 'settings/type?type=',
  // ============== End Home ============

  // =============== Earn ===============
  GET_LIST_EARN_SERVICE: 'app-services/earn',
  GET_LIST_EARN_SERVICE_DURATION: 'app-services/earn?duration=',
  GET_DETAIL_EARN_SERVICE: 'app-services/earn/detail',
  GET_CHART_EARN: 'app-services/earn-by-day?duration=',
  GET_CHART_EARN_DETAIL: 'app-services/earn/detail-by-day',

  // =============== End Earn ===========

  // =========== SWAP ====================
  DEPOSIT_TOKEN: 'user/deposit',
  WITHDRAW_POINT: 'user/withdraw',

  // ============== Wallet ==============
  GET_LIST_WALLET: 'wallet/user',
  GET_EXCHANGE_RATE: 'user/exchange-rate',
  GET_HISTORY_TRANSACTION: 'user/transactions-history?duration=',
  WALLET_CONNECT: 'wallet/connect',
  SET_DEFAULT_WALLET: 'user/set-wallet-default',
  // ============== End Wallet ==========

  // ============== Widget ==============
  GET_WIDGET: 'app-services/earn/widget',
  // ============== End Widget ==========
};
