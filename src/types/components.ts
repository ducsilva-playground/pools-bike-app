export interface IItemFormCreateTicket {
  groupDetailId?: string; // 'bf791584-7201-40db-8f8b-1cc1b808fc25';
  name: string; //  'Test canceled';
  paymentType: 'coin_transfer' | 'cash'; // 'coin_transfer';
  amount: string; //50000;
  commission: string; //10;
}

export interface ITimer {
  timer: number;
  startTimer: (time: number) => void;
  stopTimer: () => void;
}

export interface ICountDownProps {
  start?: number;
  fps?: number;
}

export type TmodeContent = 'light-content' | 'dark-content' | 'default';

export interface ISwiperProps {
  images?: [];
  visible: boolean;
  toggleModal?: () => void;
}

export interface IDropdownOption {
  id?: number | string;
  title?: string;
  data?: any;
}

export interface ILineConfig {
  initialSpacing?: number;
  curved?: boolean;
  isAnimated?: boolean;
  delay?: number;
  thickness?: number;
  color?: string | any; //	'black'
  hideDataPoints?: boolean; //	false
  dataPointsShape?: string; //	'circular'
  dataPointsWidth?: number; //	2
  dataPointsHeight?: number; //	3
  dataPointsColor?: string | any; //	'black'
  dataPointsRadius?: number; //	3
  textColor?: string | any; //	'gray'
  textFontSize?: number; //	10
  textShiftX?: number; //	0
  textShiftY?: number; //	0
  shiftY?: number; //	0
  startIndex?: number; //	0
  endIndex?: number; //lineData.length - 1
  showArrow?: boolean; //	false
  arrowConfig?: any; //arrowType	defaultArrowConfig
}

declare module '@env';

export interface INewsItem {
  id: number;
  name: string;
  description: string;
  date: Date;
  thumbnail?: any;
}
