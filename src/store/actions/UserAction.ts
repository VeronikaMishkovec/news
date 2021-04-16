import { ACTION_TYPE } from '../type';

export type UserActionType = {
  type: ACTION_TYPE.USER;
  payload: string;
};

export const userAction = (payload: string): UserActionType => {
  return { type: ACTION_TYPE.USER, payload };
};
