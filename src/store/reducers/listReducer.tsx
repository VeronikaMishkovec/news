// import { GET_NEWS_LIST, SET_NEWS_LIST } from '../actions/action';
// import { List } from '../type';

// export type InitialStateType = typeof initialState

// const initialState = {
//   list: [],
//   loading: true,
// };

// export const newsList = (
//   state = initialState,
//   action: { type: string; payload: List },
// ) => {
//   switch (action.type) {
//     case GET_NEWS_LIST:
//       return { ...state };
//     case SET_NEWS_LIST:
//       return { ...state, list: action.payload.data.results, loading: false };
//     default:
//       return { ...state };
//   }
// };

import { NewsListActionType } from '../actions/action';
import { RootType } from '../type';

export type InitialStateType = {
  error: RootType['error'];
  list: Object;
  loading: RootType['loading'];
};

const initialState: InitialStateType = {
  error: '',
  list: {},
  loading: false,
};

export const newsListReducer = (
  state = initialState,
  action: NewsListActionType,
): InitialStateType => {
  switch (action.type) {
    case 'LIST_REQUEST':
      return { ...state, loading: true };
    case 'LIST_SUCCESS':
      console.log('rducer', action)
      return { ...state, loading: false, list: action.list };
    // case 'LIST_FAILED':
    //   return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
