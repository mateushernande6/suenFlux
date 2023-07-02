import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import RelativeDaysModal from '../../components/RelativeDaysModal';
import CategoryModal from '../../components/CategoryModal';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../styles/Colors';

const Report = ({navigation}) => {
  const [relativeDaysModalVisible, setRelativeDaysModalVisible] =
    useState(false);

  const [categoryModalVisible, setCategoryModalVisible] = useState(false);

  const [relativeDays, setRelativeDays] = useState(7);
  const [category, setCategory] = useState({
    id: null,
    name: 'Todas Categorias',
  });

  const onRelativeDayClosePress = () => {
    setRelativeDaysModalVisible(false);
  };

  const onCategoryClosePress = () => {
    setCategoryModalVisible(false);
  };

  const onCategoryPress = item => {
    setCategory(item);
    onCategoryClosePress();
  };

  const onRelativeDays = item => {
    setRelativeDays(item);

    onRelativeDayClosePress();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View style={styles.filtersContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setRelativeDaysModalVisible(true)}>
          <Text
            style={
              styles.filterButtonText
            }>{`Últimos ${relativeDays} dias`}</Text>
          <Icon name="chevron-down" size={20} color={Colors.champagneDark} />
        </TouchableOpacity>

        <RelativeDaysModal
          isVisible={relativeDaysModalVisible}
          onConfirm={onRelativeDays}
          onCancel={onRelativeDayClosePress}
        />

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            setCategoryModalVisible(true);
          }}>
          <Text style={styles.filterButtonText}>{category.name}</Text>
          <Icon name="chevron-down" size={20} color={Colors.champagneDark} />
        </TouchableOpacity>

        <CategoryModal
          categoryType="all"
          isVisible={categoryModalVisible}
          onConfirm={onCategoryPress}
          onCancel={onCategoryClosePress}
        />
      </View>

      <ScrollView>
        <EntrySummary />
        <EntryList days={relativeDays} category={category} />
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
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  filterButton: {
    flexDirection: 'row',
    borderColor: Colors.champagneDark,
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  filterButtonText: {
    color: Colors.champagneDark,
  },
});

export default Report;
