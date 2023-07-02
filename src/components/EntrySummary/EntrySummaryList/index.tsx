import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const EntrySummaryList = ({entriesGrouped}: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={entriesGrouped}
        scrollEnabled={false}
        renderItem={({item}) => (
          <Text>
            {item.description} - ${item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EntrySummaryList;
