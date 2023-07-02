import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import CategoryModal from '../../../components/CategoryModal';

import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onClosePress = () => {
    setModalVisible(false);
  };

  const onCategoryPress = item => {
    onChangeCategory(item);
    onClosePress();
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>

      <CategoryModal
        categoryType={debit ? 'debit' : 'credit'}
        isVisible={modalVisible}
        onConfirm={onCategoryPress}
        onCancel={onClosePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  pickerButton: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  pickerButtonText: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default NewEntryCategoryPicker;
