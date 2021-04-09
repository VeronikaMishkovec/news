import { NewsListActionType } from '../actions/action';
import { ACTION_TYPE, List, RootType } from '../type';

export type InitialStateType = {
  error: RootType['error'];
  list: List[];
  loading: RootType['loading'];
};

const initialState: InitialStateType = {
  error: '',
  list: [],
  loading: false,
};

export const newsListReducer = (
  state = initialState,
  action: NewsListActionType,
): InitialStateType => {
  switch (action.type) {
    case ACTION_TYPE.LIST_REQUEST:
      return { ...state, loading: true };
    case ACTION_TYPE.LIST_SUCCESS:
      return { ...state, loading: false, list: action.list };
    case ACTION_TYPE.LIST_FAILED:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
