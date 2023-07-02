export const getBalance = async realm => {
  let entries = await realm.objects('Entry');

  return entries.sum('amount');
};
