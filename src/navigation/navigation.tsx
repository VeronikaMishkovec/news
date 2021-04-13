import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from '../screens/HomeScreen';
import { RootStackParamList } from './types';
import { NewsNavigation } from '../screens/NewsListBottomBar';
import { SCREEN } from '../components/constants';

const RootStack = createStackNavigator<RootStackParamList>();

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={SCREEN.HOME} component={HomeScreen} />
        <RootStack.Screen name={SCREEN.NEWS} component={NewsNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
