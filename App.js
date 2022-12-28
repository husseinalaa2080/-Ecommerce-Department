import React, {useEffect} from 'react';
import {I18nManager} from 'react-native';
import {Provider} from 'react-redux/es';
import {PersistGate} from 'redux-persist/integration/react';
import RootStackNavigator from './src/navigation/RootNavigator';
import {persistor, store} from './src/redux/store';
import {useTranslation} from 'react-i18next';
import './src/i18n/i18n';

const App = () => {
  const {t, i18n} = useTranslation();
  // ####### Starting useEffect Scope to Translation mode ####### //
  useEffect(() => {
    if (I18nManager.isRTL) {
      i18n.changeLanguage('ar');
    } else {
      i18n.changeLanguage('en');
    }
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootStackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
