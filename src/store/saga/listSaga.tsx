import { call, put, takeEvery } from 'redux-saga/effects';
import { ACTION_TYPE, NewsListPayloadType } from '../type';
import * as action from '../actions/action';
import { ListRequestType } from '../actions/action';
import { getNewsList } from '../service';

export default function* newsListSaga() {
  yield takeEvery(ACTION_TYPE.LIST_REQUEST, newsList);
}

function* newsList({ category, period }: ListRequestType) {
  try {
    const payload: NewsListPayloadType = yield call(
      getNewsList,
      category,
      period,
    );
    yield put(action.newsListSuccess(payload.data.results));
  } catch (error) {
    yield put(action.newsListFailed(error));
  }
}
