import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useTheme } from '@react-navigation/native';

import { HomeScreen } from '../screens/HomeScreen';
import { RootStackParamList } from './types';
import { NewsNavigation } from '../screens/NewsListBottomBar';
import { SCREEN } from '../constants';
import { SettingScreen } from '../screens/SettingScreen';
import { DarkTheme } from '../theme';

const RootStack = createStackNavigator<RootStackParamList>();

export const Navigation: FC = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <RootStack.Navigator>
        <RootStack.Screen
          name={SCREEN.HOME}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={SCREEN.NEWS}
          component={NewsNavigation}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={SCREEN.SETTINGS}
          component={SettingScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
