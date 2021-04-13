import { useFocusEffect, useRoute } from '@react-navigation/core';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsListRequest } from '../../store/actions/action';

import { NewsListView } from './NewsListView';
import { NewsListType, RootState } from './types';

export const NewsList: FC<NewsListType> = (props) => {
  const { category, period } = props;
  const dispatch = useDispatch();

  const newsList = useSelector((state: RootState) => state.newsList.list);
  const loading = useSelector((state: RootState) => state.newsList.loading);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(newsListRequest(category, period));
      return;
    }, []),
  );

  return <NewsListView data={newsList} loading={loading} />;
};
