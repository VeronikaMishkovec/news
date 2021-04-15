import { ACTION_TYPE } from '../type';

export type ThemeActionType = {
  type: ACTION_TYPE.THEME;
  payload: boolean;
};

export const themeAction = (payload: boolean): ThemeActionType => {
  return {
    type: ACTION_TYPE.THEME,
    payload,
  };
};
