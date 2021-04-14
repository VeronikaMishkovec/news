import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../../components/Header';
import { Settings } from '../../components/Settings';

export const SettingScreen: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header back={true} title={'Settings'} />
      <Settings />
    </SafeAreaView>
  );
};
