import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import Container from '../Core/Container';

import RealmContext from '../../services/Realm';
import {getEntry} from '../../services/Entries';

import EntryListItem from './EntryListItem';

const EntryList = ({days = 7, onEntryPress, onPressActionButton}) => {
  const [entries, setEntries] = useState([]);

  const isFocused = useIsFocused();

  const {useRealm} = RealmContext;
  const realm = useRealm();

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntry(realm);
      setEntries(data);
    }

    loadEntries();

    console.log('EntryList: UseEffect --');
  }, [realm, isFocused]);

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
