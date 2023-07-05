import {FlatList, StyleSheet} from 'react-native';
import React from 'react';

import EntrySummaryListItem from './EntrySummaryListItem';

const EntrySummaryList = ({data}: any) => {
  return (
    <FlatList
      style={styles.container}
      scrollEnabled={false}
      data={data}
      keyExtractor={item => item.category.id}
      renderItem={({item}) => <EntrySummaryListItem entry={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EntrySummaryList;
