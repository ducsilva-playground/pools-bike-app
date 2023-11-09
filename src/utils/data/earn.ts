import { Images } from 'assets';
import { INewsItem } from 'types';
import { EnumViewPool } from 'utils/helpers';
import { IFilter } from './home';

export const ORDERBY: IFilter[] = [
  {
    id: 1,
    title: 'earn.most_earn',
  },
  {
    id: 2,
    title: 'earn.least_earn',
  },
];

export const POOL_EARN = [
  { id: 1, name: 'Pools Call', points: 100, percentEarn: 43, usage: 100 },
  { id: 2, name: 'Pools Call', points: 100, percentEarn: 43, usage: 100 },
  { id: 3, name: 'Pools Call', points: 100, percentEarn: 43, usage: 100 },
];

export const NEWS: INewsItem[] = [
  {
    id: 1,
    name: 'DApp Spotlight: ONUS Validator Staking',
    description:
      'Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero',
    date: new Date(),
    thumbnail: Images.news_one,
  },
  {
    id: 2,
    name: 'DApp Spotlight: ONUS Validator Staking',
    description:
      'Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero',
    date: new Date(),
    thumbnail: Images.news_two,
  },
  {
    id: 3,
    name: 'DApp Spotlight: ONUS Validator Staking',
    description:
      'Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero',
    date: new Date(),
    thumbnail: Images.news_three,
  },
];

export const TABS = [
  {
    id: 1,
    title: EnumViewPool.GENERAL,
  },
  {
    id: 2,
    title: EnumViewPool.HISTORY,
  },
];
