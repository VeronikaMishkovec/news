import React, { FC } from 'react';

import { HomeView } from './HomeView';
import { HomeViewTypes } from './types';

export const Home: FC<HomeViewTypes> = (props) => {
  const { emailed, shared, viewed } = props;
  return <HomeView emailed={emailed} shared={shared} viewed={viewed} />;
};
