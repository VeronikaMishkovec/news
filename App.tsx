import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import { store } from './src/store/store';
import { Navigation } from './src/navigation/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { themeAction } from './src/store/actions/ThemeAction';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
