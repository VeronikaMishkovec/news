import { ACTION_TYPE, List, RootType } from '../type';

type ListFailedType = {
  type: ACTION_TYPE.LIST_FAILED;
  error: RootType['error'];
};
type ListRequestType = { type: ACTION_TYPE.LIST_REQUEST };
type ListSuccessType = { type: ACTION_TYPE.LIST_SUCCESS; list: List[] };

export type NewsListActionType =
  | ListRequestType
  | ListSuccessType
  | ListFailedType;

export const newsListRequest = (): NewsListActionType => {
  return { type: ACTION_TYPE.LIST_REQUEST };
};

export const newsListSuccess = (list: List[]): NewsListActionType => {
  return { type: ACTION_TYPE.LIST_SUCCESS, list };
};

export const newsListFailed = (
  error: RootType['error'],
): NewsListActionType => {
  return { type: ACTION_TYPE.LIST_FAILED, error };
};
