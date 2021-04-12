import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { NewsListScreen } from '../NewsListScreen';

const Tab = createBottomTabNavigator();

export const NewsNavigation: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="day" component={NewsListScreen} />
      <Tab.Screen name="week" component={NewsListScreen} />
      <Tab.Screen name="month" component={NewsListScreen} />
    </Tab.Navigator>
  );
};
