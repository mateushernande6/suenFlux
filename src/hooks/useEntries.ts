import {useEffect, useState} from 'react';

import {UseEntriesProps} from '../types';

import RealmContext from '../services/Realm';

import {getEntry, saveEntry, deleteEntry} from '../services/Entries';

const useEntries = ({days = 7, category}: UseEntriesProps = {}) => {
  const [entries, setEntries] = useState<any>([]);

  const {useRealm} = RealmContext;
  const realm = useRealm();

  useEffect(() => {
    const loadEntries = async () => {
      const data = await getEntry(realm, days, category);
      setEntries(data);
    };

    loadEntries();
  }, [realm, days, category]);

  return [entries, saveEntry, deleteEntry];
};

export default useEntries;
