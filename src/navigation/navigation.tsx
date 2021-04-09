import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { NewsListScreen } from '../containers/NewsListScreen';
import { AchiveScreen } from '../containers/ArchiveScreen';
import { HomeScreen } from '../containers/HomeScreen';

const Stack = createStackNavigator();

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Most Popular News"
          component={NewsListScreen}
          options={{ title: 'News' }}
        />
        <Stack.Screen name="Archive News" component={AchiveScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
