import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';

const Report = ({navigation}) => {
  const balanceValue = 2065.35;

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <Picker onValueChange={(value, index) => console.log(value)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <Picker onValueChange={value => console.log(value)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
      <ScrollView>
        <EntrySummary />
        <EntryList />
      </ScrollView>

      <ActionFooter>
        <ActionPrimaryButton
          title="Fechar"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Report;
