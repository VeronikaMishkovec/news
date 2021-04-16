import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { themeAction } from '../../store/actions/ThemeAction';

import { RootState } from '../NewsList/types';
import { SettingsView } from './SettingsView';

export const Settings: FC = () => {
  const theme = useSelector((state: RootState) => state.theme.payload);
  const [isEnabled, setIsEnabled] = useState(theme);
  const dispatch = useDispatch();

  const toggleSwitch = (value: boolean) => {
    setIsEnabled(value);
    dispatch(themeAction(value));
    AsyncStorage.setItem('theme', `${value}`);
  };

  return <SettingsView theme={isEnabled} toggleSwitch={toggleSwitch} />;
};
