import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { PARAMS, SCREEN } from '../../constants';
import { RootStackParamList } from '../../navigation/types';
import { NewsListScreen } from '../NewsListScreen';
import { Props } from './type';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeTypes } from '../../theme/type';

MaterialCommunityIcons.loadFont();

const Tab = createBottomTabNavigator<RootStackParamList>();

export const NewsNavigation: FC<Props> = (props) => {
  const { route } = props;
  const { colors }: ThemeTypes = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.text,
        inactiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        component={NewsListScreen}
        initialParams={{ category: route.params.category, period: PARAMS.DAY }}
        name={SCREEN.DAY}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="calendar-today"
                size={focused ? 30 : 20}
                color={focused ? colors.text : colors.primary}
              />
            );
          },
        }}
      />
      <Tab.Screen
        component={NewsListScreen}
        initialParams={{ category: route.params.category, period: PARAMS.WEEK }}
        name={SCREEN.WEEK}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="calendar-week"
                size={focused ? 30 : 20}
                color={focused ? colors.text : colors.primary}
              />
            );
          },
        }}
      />
      <Tab.Screen
        component={NewsListScreen}
        initialParams={{
          category: route.params.category,
          period: PARAMS.MONTH,
        }}
        name={SCREEN.MONTH}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="calendar-month"
                size={focused ? 30 : 20}
                color={focused ? colors.text : colors.primary}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
