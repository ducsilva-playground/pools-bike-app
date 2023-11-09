import moment from 'moment';

const getDateInMonth = (currentYear, currentMonth) =>
  new Date(currentYear, currentMonth, 0).getDate();

const genValue = (start, end) => {
  return Array(end - start + 1)
    .fill('')
    .map((v, idx) =>
      start + idx < 10 ? `0${start + idx}` : (start + idx).toString(),
    );
};
export { genValue, getDateInMonth };

export const getCurrentTS = (t: string) => {
  if (t) {
    return moment(t).unix();
  }
  return moment().unix();
};

export const formatByUnix = (n: number, t: string) => {
  if (typeof n !== 'number') {
    return;
  }
  const format_type = {
    dmy: 'DD/MM/YYYY',
    hm: 'HH:mm',
  };

  return moment.unix(n).format(format_type[t]);
};

export const dateLabel = {
  '-1': 'Hôm nay',
  '0': 'Chủ Nhật',
  '1': 'Thứ 2',
  '2': 'Thứ 3',
  '3': 'Thứ 4',
  '4': 'Thứ 5',
  '5': 'Thứ 6',
  '6': 'Thứ 7',
};

export const addHourByTS = (ts: number, next: number) => {
  const h = moment.unix(ts).add(next, 'h');
  return h.format('HH:mm');
};

export const getDayInWeekByTS = (ts: number) => {
  const d = moment.unix(ts).day();
  return dateLabel[d];
};

export const getBetweenDateAndWeek = (days: number) => {
  return [...Array(days)].map((_, i) => {
    const d = moment().add(i, 'd');
    const day = d.days();
    return {
      year: d.year(),
      month: d.month(),
      date: d.date(),
      day: dateLabel[i !== 0 ? day : -1],
    };
  });
};

export const convertDuration = updatedAt => {
  const updated = moment(updatedAt);
  const duration = moment.duration(moment().diff(updated));
  if (duration.asSeconds() < 60) {
    return `${Math.floor(duration.asSeconds())} giây`;
  }
  if (duration.asMinutes() < 60) {
    return `${Math.floor(duration.asMinutes())} phút`;
  }
  if (duration.asHours() < 24) {
    return `${Math.floor(duration.asHours())} giờ`;
  }
  if (duration.asDays() <= 3) {
    return `${Math.floor(duration.asDays())} ngày`;
  }
  if (duration.asDays() > 3) {
    return moment(updatedAt).format('DD/MM/YY');
  }
};

export const generateTime = (time: number) => {
  if (!time) {
    return '00';
  }
  if (time < 10) {
    return `0${time}`;
  }

  return time;
};
export const FormatMoney = (price: number, unit: string) => {
  return (
    unit +
    new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(
      price,
    )
  );
};

export const FormatTimeNow = (date: string) => {
  return moment(date).fromNow();
};
