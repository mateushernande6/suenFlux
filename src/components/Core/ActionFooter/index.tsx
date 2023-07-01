import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import Colors from '../../../styles/Colors';

const ActionFooter = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

export const ActionPrimaryButton = ({title, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionSecondaryButton = ({title, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.secondaryButton}>
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingVertical: 10,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryButton: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  primaryButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.green,
  },
  secondaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secondaryButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.white,
  },
});

export default ActionFooter;
