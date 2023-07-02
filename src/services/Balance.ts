import dayjs from '../vendors/dayjs';
import _ from 'lodash';

export const getBalance = async (realm, untilDays = 0) => {
  let entries = await realm.objects('Entry');

  if (untilDays > 0) {
    const date = dayjs().subtract(untilDays, 'days').toDate();

    entries = entries.filtered('entryAt < $0', date);
  }

  return entries.sum('amount');
};

export const getBalanceSumByDdate = async (realm, days) => {
  // const startBalance = await getBalance(realm, days);

  let entries = await realm.objects('Entry');

  if (days > 0) {
    const date = dayjs().subtract(days, 'days').toDate();

    entries = entries.filtered('entryAt >= $0', date);
  }

  entries = entries.sorted('entryAt');

  entries = _(entries).groupBy(({entryAt}) =>
    dayjs(entryAt).format('YYYYMMDD'),
  );

  console.log(JSON.stringify('teste -> ', entries));

  return entries;
};
