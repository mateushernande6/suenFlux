import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../styles/Colors';

const NewEntryDatePicker = ({value, onChange}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const onCancel = () => {
    setDatePickerVisibility(false);
  };

  const onChangeValue = date => {
    onChange(date);
    onCancel();
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setDatePickerVisibility(true)}>
        <Icon name="calendar-today" size={30} color={Colors.white} />
      </TouchableOpacity>

      <DateTimePickerModal
        mode="date"
        cancelTextIOS="Cancelar"
        confirmTextIOS="OK"
        date={value}
        isVisible={isDatePickerVisible}
        onConfirm={onChangeValue}
        onCancel={onCancel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.asphalt,
    width: 59,
    height: 59,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
});

export default NewEntryDatePicker;
