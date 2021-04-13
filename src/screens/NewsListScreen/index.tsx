import React, { FC } from 'react';
import { NewsList } from '../../components/NewsList';
import { Props } from './type';

export const NewsListScreen: FC<Props> = (props) => {
  const { route } = props;

  const { category, period } = route.params;

  return <NewsList category={category} period={period} />;
};
