import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RealmContext from './services/Realm';

import {initDB} from './services/Realm';
import {dropDB} from './services/Categories';

import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const {useRealm} = RealmContext;
  const realm = useRealm();

  useEffect(() => {
    async function loadEntries() {
      // await dropDB(realm);
      await initDB(realm);
    }
    loadEntries();
  }, [realm]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={() => ({
          headerShown: false,
          gestureEnabled: true,
        })}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          name="NewEntry"
          component={NewEntry}
          initialParams={{
            entry: {
              id: null,
              amount: '0.00',
              entryAt: new Date(),
              category: {id: null, name: 'Selecione'},
            },
          }}
        />
        <Stack.Screen name="Report" component={Report} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
