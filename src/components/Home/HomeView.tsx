import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import { ThemeTypes } from '../../theme/type';
import { Button } from '../Button';
import { Header } from '../Header';
import { RootState } from '../NewsList/types';
import { styles } from './styles';
import { HomeViewTypes } from './types';

export const HomeView: FC<HomeViewTypes> = (props) => {
  const { emailed, shared, viewed } = props;

  const { colors }: ThemeTypes = useTheme();
  const theme = useSelector((state: RootState) => state.theme.payload);

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <StatusBar barStyle={theme ? 'light-content' : 'dark-content'} />
      <Header back={false} title={'Main Screen'} />
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
