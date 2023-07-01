import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {NavigationProps} from '../../types';
// import RealmContext from '../../services/Realm';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';

const Main: React.FC<NavigationProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />

      <ScrollView>
        <EntrySummary
          onPressActionButton={() => navigation.navigate('Report')}
        />
        <EntryList
          onEntryPress={(entry: any) =>
            navigation.navigate('NewEntry', {entry})
          }
          onPressActionButton={() => navigation.navigate('Report')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Main;
