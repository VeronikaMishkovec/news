import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useTheme } from '@react-navigation/native';

import { HomeScreen } from '../screens/HomeScreen';
import { RootStackParamList } from './types';
import { NewsNavigation } from '../screens/NewsListBottomBar';
import { SCREEN } from '../constants';
import { SettingsIcon } from '../components/SettingsIcon';
import { SettingScreen } from '../screens/SettingScreen';
import { DarkTheme } from '../theme';
import { ThemeTypes } from '../theme/type';

const RootStack = createStackNavigator<RootStackParamList>();

export const Navigation: FC = () => {
  const { colors }: ThemeTypes = useTheme();
  return (
    <NavigationContainer theme={DarkTheme}>
      <RootStack.Navigator>
        <RootStack.Screen
          name={SCREEN.HOME}
          component={HomeScreen}
          options={{
            headerShown: false,
            // headerRight: () => <SettingsIcon />,
            // headerStyle: {
            //   backgroundColor: colors.background,
            // },
          }}
        />
        <RootStack.Screen
          name={SCREEN.NEWS}
          component={NewsNavigation}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen name={SCREEN.SETTINGS} component={SettingScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
