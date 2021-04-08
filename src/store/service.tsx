import axios from 'axios';
import { List } from './type';

export const getNewsList = async() =>{
  console.log('service')
  const res = await axios.get<List>(
    'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=cEWFEXyy9FAG4sCXACpPK4XYRp44Uenr',
  );
  console.log('axios', res)
  return res
}