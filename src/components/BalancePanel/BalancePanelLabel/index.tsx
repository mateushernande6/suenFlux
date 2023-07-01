import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BalanceLabelProps} from '../../../types';
import Colors from '../../../styles/Colors';

const BalancePanelLabel = ({currentBalance}: BalanceLabelProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: Colors.white,
  },
  value: {
    fontSize: 36,
    color: Colors.white,
  },
});

export default BalancePanelLabel;
