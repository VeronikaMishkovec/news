import { GET_NEWS_LIST, SET_NEWS_LIST } from '../actions/action';
import { List } from '../type';

export type InitialStateType = typeof initialState

const initialState = {
  list: [],
  loading: true,
};

export const newsList = (
  state = initialState,
  action: { type: string; payload: List },
) => {
  switch (action.type) {
    case GET_NEWS_LIST:
      return { ...state };
    case SET_NEWS_LIST:
      return { ...state, list: action.payload.data.results, loading: false };
    default:
      return { ...state };
  }
};
