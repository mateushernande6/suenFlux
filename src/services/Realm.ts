// import Realm from 'realm';
import {createRealmContext} from '@realm/react';

import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';

import {getDefaultCategories} from './Categories';

const RealmContext = createRealmContext({
  schema: [EntrySchema, CategorySchema],
  schemaVersion: 3,
});

export const initDB = async realm => {
  const categoriesLength = await realm.objects('Category').length;

  console.log('Init DB :: Quantidade de categorias no DB: ', categoriesLength);

  if (categoriesLength === 0) {
    const categories = getDefaultCategories(realm);

    console.log('Init DB :: Initing DB...');

    try {
      await realm.write(() => {
        categories.forEach((category: any) => {
          console.log(
            `Init DB :: create category : ${JSON.stringify(categories)}`,
          );

          realm.create('Category', category, 'modified');
        });
      });
    } catch (error) {}
  } else {
    console.log('Init DB :: Categories already exist...');
  }
};

export default RealmContext;
