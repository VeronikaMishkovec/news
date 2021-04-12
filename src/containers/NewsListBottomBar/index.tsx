import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import { RootStackParamList } from '../../navigation/types';
import { NewsListScreen } from '../NewsListScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

type NewsListScreenRouteProp = RouteProp<RootStackParamList, 'News'>;
type Props = {
  route: NewsListScreenRouteProp;
};

export const NewsNavigation: FC = () => {
  const route = useRoute<NewsListScreenRouteProp>();
  useEffect(() => {
    console.log(route.params);
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Day"
        component={NewsListScreen}
        initialParams={{ category: route.params.category, period: '1' }}
      />
      <Tab.Screen
        name="Week"
        component={NewsListScreen}
        initialParams={{ category: route.params.category, period: '7' }}
      />
      <Tab.Screen
        name="Month"
        component={NewsListScreen}
        initialParams={{ category: route.params.category, period: '30' }}
      />
    </Tab.Navigator>
  );
};
