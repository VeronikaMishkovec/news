import React, { FC, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useTheme } from '@react-navigation/native';

import { HomeScreen } from '../screens/HomeScreen';
import { RootStackParamList } from './types';
import { NewsNavigation } from '../screens/NewsListBottomBar';
import { SCREEN } from '../constants';
import { SettingScreen } from '../screens/SettingScreen';
import { DarkTheme, LightTheme } from '../theme';
import { useSelector } from 'react-redux';
import { RootState } from '../components/NewsList/types';

const RootStack = createStackNavigator<RootStackParamList>();

export const Navigation: FC = () => {
  const theme = useSelector((state: RootState) => state.theme.payload);

  return (
    <NavigationContainer theme={theme ? DarkTheme : LightTheme}>
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
