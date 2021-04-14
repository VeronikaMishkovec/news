import React, { FC } from 'react';
import { PARAMS, SCREEN } from '../../constants';

import { Home } from '../../components/Home';
import { NavParamsType } from '../../navigation/types';
import { HomeScreenProps } from './type';

export const HomeScreen: FC<HomeScreenProps> = (props) => {
  const { navigation } = props;

  const NewsScrenNav = (category: NavParamsType['category']) => {
    navigation.navigate(SCREEN.NEWS, {
      category: category,
      period: PARAMS.DAY,
    });
  };

  return (
    <Home
      emailed={() => NewsScrenNav(PARAMS.EMAILED)}
      viewed={() => NewsScrenNav(PARAMS.VIEWED)}
      shared={() => NewsScrenNav(PARAMS.SHARED)}
    />
  );
};
