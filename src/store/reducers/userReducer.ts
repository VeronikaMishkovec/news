import { UserActionType } from '../actions/UserAction';
import { ACTION_TYPE } from '../type';

export type InitialStateType = {
  payload: string;
};

const InitialState: InitialStateType = {
  payload: '',
};

export const userReducer = (state = InitialState, action: UserActionType) => {
  switch (action.type) {
    case ACTION_TYPE.USER:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return { ...state };
  }
};
