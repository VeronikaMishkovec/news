import React, { FC } from 'react';

import { HomeView } from './HomeView';
import { HomeViewTypes } from './types';

export const Home: FC<HomeViewTypes> = (props) => {
  const { onPress } = props;
  return <HomeView onPress={onPress} />;
};
