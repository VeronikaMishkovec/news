import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';

import { Button } from '../Button';
import { styles } from './styles';

export const HomeView: FC = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => navigation.navigate('NewsListScreen')}
        title={'Most popular articles on NYTimes.com'}
      />
    </SafeAreaView>
  );
};
