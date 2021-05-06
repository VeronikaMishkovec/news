import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../NewsList/types';

import { HomeView } from './HomeView';
import { HomeViewTypes } from './types';

export const Home: FC<HomeViewTypes> = (props) => {
  const { emailed, shared, viewed } = props;
  const userName = useSelector((state: RootState) => state.user.payload);
  return (
    <HomeView
      emailed={emailed}
      name={userName}
      shared={shared}
      viewed={viewed}
    />
  );
};
