import React, { FC, useCallback } from 'react';
import { PARAMS, SCREEN } from '../../constants';

import { Home } from '../../components/Home';
import { NavParamsType } from '../../navigation/types';
import { HomeScreenProps } from './type';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';

export const HomeScreen: FC<HomeScreenProps> = (props) => {
  const { navigation } = props;

  const NewsScrenNav = (category: NavParamsType['category']) => {
    navigation.navigate(SCREEN.NEWS, {
      category: category,
      period: PARAMS.DAY,
    });
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

  return (
    <Home
      emailed={() => NewsScrenNav(PARAMS.EMAILED)}
      viewed={() => NewsScrenNav(PARAMS.VIEWED)}
      shared={() => NewsScrenNav(PARAMS.SHARED)}
    />
  );
};
