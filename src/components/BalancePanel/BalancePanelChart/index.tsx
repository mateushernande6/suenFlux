import {View, StyleSheet} from 'react-native';
import React from 'react';

import {BarChart} from 'react-native-svg-charts';

const BalancePanelChart = () => {
  const data = [150, -80, 400, 85, 150, 100, 350];
  return (
    <View style={styles.container}>
      <BarChart
        style={styles.chart}
        data={data}
        svg={{
          fill: 'rgba(0,0,0,0.1)',
          stroke: 'rgba(0,0,0,0.1)',
          strokeWidth: 1,
        }}
        contentInset={{top: 0, bottom: 0}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: -20,
    marginBottom: 3,
  },
  chart: {
    height: 60,
  },
});

export default BalancePanelChart;
