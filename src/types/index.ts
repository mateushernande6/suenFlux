import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Main: undefined;
  NewEntry: undefined;
  Report: undefined;
};

export type NavigationProps = {
  navigation: NavigationProp<RootStackParamList>;
};

export type BalanceLabelProps = {
  currentBalance: string | number | undefined;
  onNewEntryPress?: any;
};
