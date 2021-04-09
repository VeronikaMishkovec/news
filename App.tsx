import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from './src/store/store';
import { NewsListScreen } from './src/containers/NewsListScreen';
import { AchiveScreen } from './src/containers/ArchiveScreen';

const Stack = createStackNavigator();

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Most Popular News"
            component={NewsListScreen}
            options={{ title: 'News' }}
          />
          <Stack.Screen name="Archive News" component={AchiveScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
