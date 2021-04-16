import { combineReducers } from 'redux';
import { newsListReducer } from './listReducer';
import { themeReducer } from './themeReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  newsList: newsListReducer,
  theme: themeReducer,
  user: userReducer,
});
