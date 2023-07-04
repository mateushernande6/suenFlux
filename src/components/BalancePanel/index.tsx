import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {BalanceLabelProps} from '../../types';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import useBalance from '../../hooks/usebalance';

import Colors from '../../styles/Colors';

const BalancePanel = ({onNewEntryPress}: BalanceLabelProps) => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={balance} />
        <BalancePanelChart />
      </LinearGradient>

      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="plus" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: -23,
    zIndex: 1,
  },
  panel: {},
  button: {
    backgroundColor: Colors.green,
    borderRadius: 100,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    shadowColor: Colors.black,
    elevation: 5,
    marginTop: -25,
    marginRight: 10,
  },
});

export default BalancePanel;
