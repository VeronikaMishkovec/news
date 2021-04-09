import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NewsList } from './src/components/NewsList';
import { store } from './src/store/store';

const Stack = createStackNavigator();

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Most Popular News" component={NewsList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
