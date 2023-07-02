import {
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';
import RealmContext from '../../services/Realm';

import {
  getAllCategories,
  getCreditCategories,
  getDebitCategories,
} from '../../services/Categories';

import Colors from '../../styles/Colors';

const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {
  const [categories, setCategories] = useState([]);

  const {useRealm} = RealmContext;
  const realm = useRealm();

  useEffect(() => {
    async function loadCategories() {
      let data;
      if (categoryType === 'all') {
        data = await getAllCategories(realm);
      } else if (categoryType === 'debit') {
        data = await getDebitCategories(realm);
      } else {
        data = await getCreditCategories(realm);
      }
      setCategories(data);
    }
    loadCategories();
  }, [categoryType, realm]);

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modal}>
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => onConfirm(item)}>
              <Text style={[styles.modalItemText, {color: item.color}]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />

        <ActionFooter>
          <ActionPrimaryButton title="Fechar" onPress={onCancel} />
        </ActionFooter>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalItem: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  modalItemText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default CategoryModal;
