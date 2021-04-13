import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { PARAMS, SCREEN } from '../../components/constants';
import { RootStackParamList } from '../../navigation/types';
import { NewsListScreen } from '../NewsListScreen';
import { Props } from './type';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const NewsNavigation: FC<Props> = (props) => {
  const { route } = props;

  return (
    <Tab.Navigator>
      <Tab.Screen
        component={NewsListScreen}
        initialParams={{ category: route.params.category, period: PARAMS.DAY }}
        name={SCREEN.DAY}
      />
      <Tab.Screen
        component={NewsListScreen}
        initialParams={{ category: route.params.category, period: PARAMS.WEEK }}
        name={SCREEN.WEEK}
      />
      <Tab.Screen
        component={NewsListScreen}
        initialParams={{
          category: route.params.category,
          period: PARAMS.MONTH,
        }}
        name={SCREEN.MONTH}
      />
    </Tab.Navigator>
  );
};
