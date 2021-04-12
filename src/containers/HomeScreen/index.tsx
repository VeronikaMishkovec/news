import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';

import { Home } from '../../components/Home';
import { RootStackParamList } from '../../navigation/types';

type HomeScreenNavigationType = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = {
  navigation: HomeScreenNavigationType;
};

export const HomeScreen: FC<Props> = () => {
  const navigation = useNavigation<HomeScreenNavigationType>();

  return (
    <Home
      emailed={() =>
        navigation.navigate('News', {
          category: 'emailed',
          period: '1',
        })
      }
      viewed={() =>
        navigation.navigate('News', {
          category: 'viewed',
          period: '1',
        })
      }
      shared={() =>
        navigation.navigate('News', {
          category: 'viewed',
          period: '1',
        })
      }
    />
  );
};
