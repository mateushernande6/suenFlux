import {Alert} from 'react-native';
import {getUUID} from './UUID';

export const getEntry = async (realm: any) => {
  const entries = await realm.objects('Entry').sorted('entryAt', true);

  console.log('getEntry :: entries - ', entries);

  return entries;
};

export const saveEntry = async (realm: any, value: any, entry: any = {}) => {
  let data = {};

  try {
    await realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        amount: value.amount || entry.amount,
        entryAt: value.entryAt || entry.entryAt,
        description: value.category.name,
        isInit: false,
        category: value.category || entry.category,
      };

      realm.create('Entry', data, 'modified');
    });

    console.log('SaveEntry :: passed -> ', data);
  } catch (error) {
    console.error('SaveEntry:: Error :: ', error);
    Alert.alert('Erro ao salvar os dados de lançamento');
  }

  return data;
};

export const deleteEntry = async (realm: any, entry: any) => {
  try {
    realm.write(() => {
      realm.delete(entry);
    });
  } catch (error) {
    console.error('Delete:: Error :: ', error);
    Alert.alert('Erro ao deletar dados');
  }
};
