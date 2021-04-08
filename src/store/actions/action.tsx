// import { InitialStateType } from '../reducers/listReducer';

import { List, RootType } from "../type";

// export const GET_NEWS_LIST = 'GET/NEWS_LIST';
// export const SET_NEWS_LIST = 'SET/NEWS_LIST';

// export const getNewsList = () => ({
//   type: GET_NEWS_LIST,
// });

// export const setNewsList = (list: {}) => {
//   return {
//     list,
//     type: SET_NEWS_LIST,
//   };
// };

export type NewsListActionType =
  | { type: 'LIST_REQUEST' }
  | { type: 'LIST_SUCCESS'; list: Object }
  | { type: 'LIST_FAILED'; error: RootType['error'] };

export const newsListRequest = (): NewsListActionType => {
  console.log('request')
  return { type: 'LIST_REQUEST' };
};

export const newsListSuccess = (list: Object): NewsListActionType => {
  console.log('success')
  return { type: 'LIST_SUCCESS', list };
};

export const newsListFailed = (error: RootType['error']): NewsListActionType => {
  console.log('failed')
  return { type: 'LIST_FAILED', error };
};
