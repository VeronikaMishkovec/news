import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';

import { Home } from '../../components/Home';
import { RootStackParamList } from '../../navigation/types';

type HomeScreenNavigationType = StackNavigationProp<RootStackParamList, 'Home'>
type Props = {
  navigation: HomeScreenNavigationType
}

export const HomeScreen: FC<Props> = () => {
  const navigation = useNavigation();

  return <Home onPress={() => navigation.navigate('News')} />;
};
