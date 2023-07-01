import React from 'react';
import 'react-native-get-random-values';
import RealmContext from './services/Realm';

import Routes from './routes';

const {RealmProvider} = RealmContext;

const App = () => {
  return (
    <RealmProvider>
      <Routes />
    </RealmProvider>
  );
};

export default App;
