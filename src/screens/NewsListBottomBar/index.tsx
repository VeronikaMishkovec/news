import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { PARAMS, SCREEN } from '../../components/constants';
import { RootStackParamList } from '../../navigation/types';
import { NewsListScreen } from '../NewsListScreen';
import { Props } from './type';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont();

const Tab = createBottomTabNavigator<RootStackParamList>();

export const NewsNavigation: FC<Props> = (props) => {
  const { route } = props;

  return (
    <Tab.Navigator>
      <Tab.Screen
        component={NewsListScreen}
        initialParams={{ category: route.params.category, period: PARAMS.DAY }}
        name={SCREEN.DAY}
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="calendar-today" size={25} />;
          },
        }}
      />
      <Tab.Screen
        component={NewsListScreen}
        initialParams={{ category: route.params.category, period: PARAMS.WEEK }}
        name={SCREEN.WEEK}
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="calendar-week" size={25} />;
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
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="calendar-month" size={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
