import axios from 'axios';
import { List } from './type';

export const getNewsList = (category: string, period: string) => {
  const res = axios.get<List>(
    `https://api.nytimes.com/svc/mostpopular/v2/${category}/${period}.json?api-key=cEWFEXyy9FAG4sCXACpPK4XYRp44Uenr`,
  );
  return res;
};
