import { useNavigation } from '@react-navigation/core';
import React, { FC } from 'react';
import { SCREEN } from '../../../constants';
import { SettingIconView } from './SettingsView';

export const SettingsIcon: FC = () => {
  const navigation = useNavigation();

  const settings = () => navigation.navigate(SCREEN.SETTINGS);
  
  return <SettingIconView onPress={() => settings()} />;
};
