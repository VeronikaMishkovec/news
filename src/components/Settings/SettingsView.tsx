import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from './style';

export const SettingsView: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{'Text'}</Text>
    </SafeAreaView>
  );
};
