// import { put, call, takeEvery } from 'redux-saga/effects';
// import { getNewsList } from '../service';
// import { GET_NEWS_LIST, SET_NEWS_LIST } from '../actions/action';
// import { List, NewsListActionType } from '../type';

import { call, put, takeEvery } from 'redux-saga/effects';
import { List, NewsListActionType } from '../type';
import * as action from '../actions/action';
import { getNewsList } from '../service';

// function* newsList() {
//   try {
//     const payload: List[] = yield call(getNewsList);
//     const res: NewsListActionType = yield put({
//       type: SET_NEWS_LIST,
//       payload,
//     });
//     return res.payload.data;
//   } catch (error) {
//     console.log('Something went wrong', error);
//   }
// }

// export default function* newsListSaga() {
//   yield takeEvery(GET_NEWS_LIST, newsList);
// }

export default function* newsListSaga() {
  yield takeEvery('LIST_REQUEST', newsList);
  // yield takeEvery(action.newsListRequest, newsList);
}

function* newsList() {
  try {
    const payload: List[] = yield call(getNewsList);
    
    console.log('payload', payload);
    //     const res: NewsListActionType = yield put({
    //   type: 'LIST_SUCCESS',
    //   list:payload.data.results,
    // });
    const res: NewsListActionType = yield put(action.newsListSuccess(payload.data.results));
    console.log('res', res);
    return res.payload.data;
  } catch (error) {
    console.log('Something went wrong', error);
  }
}
