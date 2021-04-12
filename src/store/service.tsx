import axios from 'axios';
import { NavParamsType } from '../navigation/types';
import { List } from './type';

export const getNewsList = (
  category: NavParamsType['category'],
  period: NavParamsType['period'],
) => {
  console.log('axios', 'category', category, 'period', period);
  const res = axios.get<List>(
    `https://api.nytimes.com/svc/mostpopular/v2/${category}/${period}.json?api-key=cEWFEXyy9FAG4sCXACpPK4XYRp44Uenr`,
  );
  return res;
};
