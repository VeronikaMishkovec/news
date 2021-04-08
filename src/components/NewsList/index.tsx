import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsListRequest } from '../../store/actions/action';

import { NewsListView } from './NewsListView';
import { RootState } from './types';

export const NewsList = () => {
  const dispatch = useDispatch();

  const newsList = useSelector((state: RootState) => state.newsList.list);
  const loading = useSelector((state: RootState) => state.newsList.loading);

  useEffect(() => {
    dispatch(newsListRequest());
    console.log(dispatch(newsListRequest()));
  }, []);

  return <NewsListView data={newsList} loading={loading} />;
};
