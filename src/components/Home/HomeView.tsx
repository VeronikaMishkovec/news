import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';

import { Button } from '../Button';
import { styles } from './styles';
import { HomeViewTypes } from './types';

export const HomeView: FC<HomeViewTypes> = (props) => {
  const { emailed, shared, viewed } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={emailed}
        title={'The most emailed articles on NYTimes.com'}
      />
      <Button
        onPress={viewed}
        title={'The most viewed articles on NYTimes.com'}
      />
      <Button
        onPress={shared}
        title={'The most shared articles on NYTimes.com'}
      />
    </SafeAreaView>
  );
};
