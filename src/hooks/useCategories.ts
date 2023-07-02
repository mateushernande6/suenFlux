import {useEffect, useState} from 'react';

import RealmContext from '../services/Realm';

import {
  getAllCategories,
  getDebitCategories,
  getCreditCategories,
  getInitCategories,
} from '../services/Categories';

const useCategories = () => {
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCreditCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [initCategory, setInitCategory] = useState([]);

  const {useRealm} = RealmContext;
  const realm = useRealm();

  useEffect(() => {
    const loadDebitCategories = async () => {
      const data = await getDebitCategories(realm);
      setDebitCategories(data);
    };

    const loadCreditCategories = async () => {
      const data = await getCreditCategories(realm);
      setCreditCategories(data);
    };

    const loadAllCategories = async () => {
      const data = await getAllCategories(realm);
      setAllCategories(data);
    };

    const loadInitCategory = async () => {
      const data = await getInitCategories(realm);
      setInitCategory(data);
    };

    loadDebitCategories();
    loadCreditCategories();
    loadAllCategories();
    loadInitCategory();
  }, [realm]);

  return [debitCategories, creditCategories, allCategories, initCategory];
};

export default useCategories;
