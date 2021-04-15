import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { themeAction } from '../../store/actions/ThemeAction';

import { RootState } from '../NewsList/types';
import { SettingsView } from './SettingsView';

export const Settings: FC = () => {
  const theme = useSelector((state: RootState) => state.theme.payload);
  const [isEnabled, setIsEnabled] = useState(theme);
  const dispatch = useDispatch();

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const storeData = async (value: boolean) => {
    try {
      await AsyncStorage.setItem('theme', `${value}`);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('theme');
      if (value === 'false') return setIsEnabled(false);
      if (value === 'true') return setIsEnabled(true);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    storeData(isEnabled);
    getData().then(() => dispatch(themeAction(isEnabled)));
  }, [isEnabled]);

  return <SettingsView theme={isEnabled} toggleSwitch={() => toggleSwitch()} />;
};
