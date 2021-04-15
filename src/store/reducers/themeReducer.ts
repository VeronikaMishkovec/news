import { ThemeActionType } from '../actions/ThemeAction';
import { ACTION_TYPE } from '../type';

export type InitialStateType = {
  payload: boolean;
};

const initialState: InitialStateType = {
  payload: true,
};

export const themeReducer = (
  state = initialState,
  action: ThemeActionType,
): InitialStateType => {
  switch (action.type) {
    case ACTION_TYPE.THEME:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};
