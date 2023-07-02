import {useEffect, useState} from 'react';

import RealmContext from '../services/Realm';
import {getBalanceSumByDdate} from '../services/Balance';

const useBalanceSumByDate = (days = 7) => {
  const [balanceSum, setBalanceSum] = useState<any[]>([]);

  const {useRealm} = RealmContext;
  const realm = useRealm();

  useEffect(() => {
    const loadBalanceSumByDate = async () => {
      const data = await getBalanceSumByDdate(realm, days);
      setBalanceSum([...data]);
    };

    loadBalanceSumByDate();
  }, [days, realm]);

  return [balanceSum];
};

export default useBalanceSumByDate;
