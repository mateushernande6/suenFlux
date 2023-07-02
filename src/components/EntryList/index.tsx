import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import Container from '../Core/Container';

import EntryListItem from './EntryListItem';

import useEntries from '../../hooks/useEntries';

const EntryList = ({days = 7, category, onEntryPress, onPressActionButton}) => {
  const [entries] = useEntries({days, category});

  return (
    <Container
      title="Últimos lançamentos"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <View style={styles.list}>
        <FlatList
          data={entries}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          renderItem={({item, index}) => (
            <EntryListItem
              entry={item}
              isFirstItem={index === 0}
              islastItem={index === entries.length - 1}
              onEntryPress={onEntryPress}
            />
          )}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
  list: {
    paddingBottom: 20,
  },
});

export default EntryList;
