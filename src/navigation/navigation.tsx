import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from '../containers/HomeScreen';
import { RootStackParamList } from './types';
import { NewsNavigation } from '../containers/NewsListBottomBar';

const RootStack = createStackNavigator<RootStackParamList>();

export const Navigation: FC = () => {
  return (
    <NavigationContainer >
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="News" component={NewsNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
