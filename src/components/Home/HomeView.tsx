import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';

import { Button } from '../Button';
import { styles } from './styles';
import { HomeViewTypes } from './types';

export const HomeView: FC<HomeViewTypes> = (props) => {
  const { onPress } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={onPress}
        title={'Most popular articles on NYTimes.com'}
      />
    </SafeAreaView>
  );
};
