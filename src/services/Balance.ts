import dayjs from '../vendors/dayjs';
import _ from 'lodash';
import {getUUID} from './UUID';
import Colors from '../styles/Colors';

export const getBalance = async (realm, untilDays = 0) => {
  let entries = await realm.objects('Entry');

  if (untilDays > 0) {
    const date = dayjs().subtract(untilDays, 'days').toDate();

    entries = entries.filtered('entryAt < $0', date);
  }

  return entries.sum('amount');
};

export const getBalanceSumByDdate = async (realm, days) => {
  const startBalance = await getBalance(realm, days);

  let entries = await realm.objects('Entry');

  if (days > 0) {
    const date = dayjs().subtract(days, 'days').toDate();

    entries = entries.filtered('entryAt >= $0', date);
  }

  entries = entries.sorted('entryAt');

  entries = _(entries)
    .groupBy(({entryAt}) => dayjs(entryAt).format('YYYYMMDD'))
    .map(entry => _.sumBy(entry, 'amount'))
    .map((amount, index, collection) => {
      return (
        (index === 0 ? startBalance : 0) +
        _.sum(_.slice(collection, 0, index)) +
        amount
      );
    });

  return entries;
};

export const getBalanceSumByCategory = async (
  realm,
  days,
  showOther = true,
) => {
  let entries = await realm.objects('Entry');

  if (days > 0) {
    const date = dayjs().subtract(days, 'days').toDate();

    entries = entries.filtered('entryAt >= $0', date);
  }

  entries = _(entries)
    .groupBy(({category: {id}}) => id)
    .map(entry => ({
      category: _.omit(entry[0].category, 'entries'),
      amount: Math.abs(
        _.sumBy(entry, function (a) {
          return a.amount;
        }),
      ),
    }))
    .filter(({amount}) => amount > 0)
    .orderBy('amount', 'desc');

  const othersLimit = 3;

  if (showOther && _(entries).size() > othersLimit) {
    const data1 = _(entries).slice(0, othersLimit);
    const data2 = [
      {
        category: {
          id: getUUID(),
          name: 'Outros',
          color: Colors.magenta,
        },
        amount: _(entries)
          .slice(othersLimit)
          .map(({amount}) => amount)
          .sum(),
      },
    ];

    entries = [...data1, ...data2];
  }
  console.log('getBalanceSumByCategory :: ', entries);

  return entries;
};
