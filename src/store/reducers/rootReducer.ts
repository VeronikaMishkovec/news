import { combineReducers } from 'redux';
import { newsListReducer } from './listReducer';
import { themeReducer } from './themeReducer';

export const rootReducer = combineReducers({
  newsList: newsListReducer,
  theme: themeReducer,
});
