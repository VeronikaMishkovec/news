import { combineReducers } from 'redux';
import { newsListReducer } from '../reducers/listReducer';

export const rootReducer = combineReducers({ newsList:newsListReducer });
