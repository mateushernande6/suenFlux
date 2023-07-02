import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import ActionFooter, {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../components/Core/ActionFooter';

import RealmContext from '../../services/Realm';
import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from './NewEntryInput';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryDatePicker from './NewEntryDatePicker';
import NewEntryDeleteAction from './NewEntryDeleteAction';

import useEntries from '../../hooks/useEntries';

import Colors from '../../styles/Colors';

const NewEntry: React.FC = ({route, navigation}: any) => {
  const {entry} = route.params;

  const [, saveEntry, deleteEntry] = useEntries();

  const [amount, setAmount] = useState<string>(entry.amount);
  const [debit, setDebit] = useState(entry.amount <= 0);
  const [category, setCategory] = useState(entry.category);
  const [entryAt, setEntryAt] = useState(entry.entryAt);

  const {useRealm} = RealmContext;
  const realm = useRealm();

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }

    return false;
  };

  const onClose = () => {
    navigation.goBack();
  };

  const onSave = async () => {
    const data = {
      amount: parseFloat(amount),
      category: category,
      entryAt: entryAt,
    };

    await saveEntry(realm, data, entry);

    onClose();
  };

  const onDelete = async () => {
    deleteEntry(realm, entry);
    onClose();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View style={styles.formContainer}>
        <NewEntryInput
          value={amount}
          onChangeValue={setAmount}
          onChangeDebit={setDebit}
        />

        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />

        <View style={styles.formActionContainer}>
          <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
          <NewEntryDeleteAction entry={entry} onOkPress={onDelete} />
        </View>

        {/* <Button title="Gps" />
        <Button title="Camera" /> */}
      </View>

      <ActionFooter>
        <ActionPrimaryButton
          title={entry.id ? 'Salvar' : 'Adicionar'}
          onPress={() => {
            isValid() && onSave();
          }}
        />
        <ActionSecondaryButton title="Cancelar" onPress={onClose} />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  formActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default NewEntry;
