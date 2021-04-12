import { RouteProp, useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { NewsList } from '../../components/NewsList';
import { RootStackParamList } from '../../navigation/types';

type NewsListScreenRouteProp = RouteProp<RootStackParamList, 'News'>
type Props = {
  route: NewsListScreenRouteProp
}

export const NewsListScreen: FC<Props> = () => {
  const route = useRoute<NewsListScreenRouteProp>();

  return (
    <NewsList category={route.params.category} period={route.params.period} />
  );
};
