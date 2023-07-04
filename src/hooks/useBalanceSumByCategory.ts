import {useEffect, useState} from 'react';

import RealmContext from '../services/Realm';
import {getBalanceSumByCategory} from '../services/Balance';

const useBalanceSumByCategory = (days = 7) => {
  const [balanceSum, setBalanceSum] = useState<any[]>([]);

  const {useRealm} = RealmContext;

  const realm = useRealm();

  useEffect(() => {
    const loadBalanceSumByCategory = async () => {
      const data = await getBalanceSumByCategory(realm, days);
      setBalanceSum([...data]);
    };

    loadBalanceSumByCategory();
  }, [days, realm]);

  return [balanceSum];
};

export default useBalanceSumByCategory;
