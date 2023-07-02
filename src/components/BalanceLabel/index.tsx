import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import useBalance from '../../hooks/usebalance';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';

const BalanceLabel = () => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <LinearGradient
        style={styles.panel}
        colors={[Colors.violet, Colors.blue]}>
        <Text style={styles.value}>{balance}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 14,
    color: Colors.white,
  },
  panel: {
    borderRadius: 10,
    minWidth: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
  },
});

export default BalanceLabel;
