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

  useEffect(() => {
    dispatch(themeAction(isEnabled));
  }, [isEnabled]);

  return <SettingsView theme={isEnabled} toggleSwitch={() => toggleSwitch()} />;
};
