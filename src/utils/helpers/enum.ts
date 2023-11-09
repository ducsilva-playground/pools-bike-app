export enum ELanguage {
  VI = 'vi',
  EN = 'en',
}

export enum EnumTime {
  DAY = '1D',
  WEEK = '1W',
  MONTH = '1M',
  QUARTER = '3M',
  YEAR = '1Y',
}

export enum EnumFilterTime {
  DAY = '24h',
  TEN_DAYS = '10 days',
  THIRTY_DAY = '30 days',
  SIXTY_DAY = '60 days',
}

export enum EnumFilterDay {
  TEN_DAYS = '10 days',
  THIRTY_DAY = '30 days',
  SIXTY_DAY = '60 days',
  NINETY_DAY = '90 days',
}

export enum EnumFilterMonth {
  THIS_MONTH = 'This month',
  LAST_MONTH = 'Last month',
  SIXTY_DAY = '60 days',
  NINETY_DAY = '90 days',
}

export enum EnumFilterYear {
  LAST_YEAR = 'Last year',
  LAST_TWO_YEAR = 'Last 2 years',
  LAST_THREE_YEAR = 'Last 3 years',
}

export enum EnumOrder {
  MOST_EARN = 'Most earn',
  LEAST_EARN = 'Least earn',
}

export enum EnumViewPool {
  GENERAL = 'earn.general',
  HISTORY = 'earn.history',
}

export enum EnumLogin {
  USER = 'USER',
  GOOGLE = 'GOOGLE',
}

export enum EnumRequestOtp {
  REGISTER = 'REGISTER',
  FORGOT = 'FORGOT',
  LOGIN = 'LOGIN',
  CHANGEPWD = 'CHANGEPWD',
}

export enum EnumStatusAddress {
  DEFAULT = 'DEFAULT',
  CHECKED = 'CHECKED',
  NORMAL = 'NORMAL',
}

export enum EnumSettingDoc {
  ABOUT_US = 'AboutUs',
  POLICY_PASSCODE = 'PolicyPasscode',
  CONDITIONS = 'Conditions',
  BANNERS = 'Banners',
  REFERRAL_POLICY = 'ReferralPolicy',
  WITHDRAW_POLICY = 'WithdrawPolicy',
  DEPOSIT_POLICY = 'DepositPolicy',
  EXCHANGE_TOKEN = 'exChange_Token',
  EXCHANGE_POINT = 'exChange_Point',
}

export enum EnumChain {
  POOL_TESTNET = 12345,
  POOL_MAINNET = 6868,
}
