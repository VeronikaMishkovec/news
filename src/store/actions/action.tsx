import { InitialStateType } from "../reducers/listReducer";

export const GET_NEWS_LIST = 'GET/NEWS_LIST';
export const SET_NEWS_LIST = 'SET/NEWS_LIST';

export const getNewsList = () => ({
  type: GET_NEWS_LIST,
});

export const setNewsList = (list: {}, loading: InitialStateType['loading']) => {
  return {
    list,
    loading,
    type: SET_NEWS_LIST,
  };
};
