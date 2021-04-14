import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { HomeScreen } from '../screens/HomeScreen';
import { RootStackParamList } from './types';
import { NewsNavigation } from '../screens/NewsListBottomBar';
import { SCREEN } from '../constants';
import { SettingsIcon } from '../components/SettingsIcon';
import { SettingScreen } from '../screens/SettingScreen';
import { DarkTheme } from '../theme';

const RootStack = createStackNavigator<RootStackParamList>();

export const Navigation: FC = () => {
  // const navigation = useNavigation();
  return (
    <NavigationContainer theme={DarkTheme}>
      <RootStack.Navigator>
        <RootStack.Screen
          name={SCREEN.HOME}
          component={HomeScreen}
          options={{
            headerRight: () => <SettingsIcon />,
          }}
        />
        <RootStack.Screen name={SCREEN.NEWS} component={NewsNavigation} />
        <RootStack.Screen name={SCREEN.SETTINGS} component={SettingScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
