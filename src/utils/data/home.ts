import SecuritySvg from 'assets/svg/SecuritySvg';
import { NavigationService, Routes } from 'navigation';
import {
  EnumFilterDay,
  EnumFilterMonth,
  EnumFilterTime,
  EnumFilterYear,
  EnumTime,
} from 'utils/helpers';

export const TRACKING_DAILY = [
  {
    isClaim: false,
    name: 'Pools Call',
    id: 1,
    text: 'home.claim',
    points: 100,
  },
  {
    isClaim: false,
    name: 'Pools Call',
    id: 2,
    text: 'home.claim',
    points: 100,
  },
  {
    isClaim: true,
    name: 'Pools Call',
    id: 3,
    text: 'home.claimed',
    points: 100,
  },
  {
    isClaim: true,
    name: 'Pools Call',
    id: 4,
    text: 'home.claimed',
    points: 100,
  },
  {
    isClaim: false,
    name: 'Pools Call',
    id: 5,
    text: 'home.claim',
    points: 100,
  },
  {
    isClaim: true,
    name: 'Pools Call',
    id: 6,
    text: 'home.claimed',
    points: 100,
  },
];

export const EARNING = [
  { time: 'Today', points: 100 },
  { time: 'This week', points: 100 },
  { time: 'This Month', points: 100 },
];

export const REFERRAL = [
  { time: 'Today', members: 10 },
  { time: 'This week', members: 15 },
  { time: 'This Month', members: 10 },
];

export const MENUS = [
  {
    name: 'menu.events',
    icon: SecuritySvg.Event(),
    action: () => NavigationService.navigate(Routes.Event),
  },
  {
    name: 'menu.security',
    icon: SecuritySvg.Secur(),
    action: () => NavigationService.navigate(Routes.Security),
  },
  {
    name: 'menu.referral',
    icon: SecuritySvg.Referral(),
    action: () => NavigationService.navigate(Routes.Referral),
  },
  {
    name: 'menu.wallet',
    icon: SecuritySvg.Wallet(),
    action: () => NavigationService.navigate(Routes.WalletList),
  },
  {
    name: 'menu.news',
    icon: SecuritySvg.News(),
    action: () => NavigationService.navigate(Routes.Event),
  },
  {
    name: 'menu.about',
    icon: SecuritySvg.AboutUs(),
    action: () => NavigationService.navigate(Routes.AboutUs),
  },
  {
    name: 'menu.support',
    icon: SecuritySvg.Support(),
    action: () => NavigationService.navigate(Routes.Event),
  },
  {
    name: 'menu.policy',
    icon: SecuritySvg.Policy(),
    action: () => NavigationService.navigate(Routes.Policy),
  },
  {
    name: 'menu.terms_Conditions',
    icon: SecuritySvg.Terms(),
    action: () => NavigationService.navigate(Routes.Conditions),
  },
  {
    key: 'LOGOUT',
    name: 'menu.sign_out',
    icon: SecuritySvg.Logout(),
    action: null,
  },
];

export interface IFilter {
  id: number;
  title: string;
  value?: number | string;
}

export const FILTER_BY_TIME: IFilter[] = [
  { id: 1, title: EnumTime.DAY, value: 1 },
  { id: 2, title: EnumTime.WEEK, value: 7 },
  { id: 3, title: EnumTime.MONTH, value: 30 },
  { id: 4, title: EnumTime.QUARTER, value: 90 },
  { id: 5, title: EnumTime.YEAR, value: 365 },
];

export const FILTER_BY_DAY: IFilter[] = [
  { id: 1, title: EnumFilterDay.TEN_DAYS, value: 10 },
  { id: 2, title: EnumFilterDay.THIRTY_DAY, value: 30 },
  { id: 3, title: EnumFilterDay.SIXTY_DAY, value: 60 },
  { id: 4, title: EnumFilterDay.NINETY_DAY, value: 90 },
];

export const FILTER_BY_HOURS_DAY: IFilter[] = [
  // { id: 1, title: EnumFilterTime.DAY, value: 1 },
  { id: 2, title: EnumFilterTime.TEN_DAYS, value: 10 },
  { id: 3, title: EnumFilterTime.THIRTY_DAY, value: 30 },
  { id: 4, title: EnumFilterTime.SIXTY_DAY, value: 60 },
];

export const FILTER_BY_MONTH: IFilter[] = [
  { id: 1, title: EnumFilterMonth.THIS_MONTH },
  { id: 2, title: EnumFilterMonth.LAST_MONTH },
  { id: 3, title: EnumFilterMonth.SIXTY_DAY },
  { id: 4, title: EnumFilterMonth.NINETY_DAY },
];

export const FILTER_BY_YEAR: IFilter[] = [
  { id: 1, title: EnumFilterYear.LAST_YEAR },
  { id: 2, title: EnumFilterYear.LAST_TWO_YEAR },
  { id: 3, title: EnumFilterYear.LAST_THREE_YEAR },
];
