import {useEffect, useState} from 'react';
import RealmContext from '../services/Realm';

import {getBalance} from '../services/Balance';

const useBalance = () => {
  const [balance, setBalance] = useState(0);

  const {useRealm} = RealmContext;
  const realm = useRealm();

  const currency = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  useEffect(() => {
    async function loadBalance() {
      const value = await getBalance(realm);
      setBalance(value);
    }

    loadBalance();
  }, [realm]);

  return [currency.format(balance)];
};

export default useBalance;
