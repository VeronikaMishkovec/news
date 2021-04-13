import { RouteProp } from '@react-navigation/native';
import { SCREEN } from '../../components/constants';
import { RootStackParamList } from '../../navigation/types';

type NewsListScreenRouteProp = RouteProp<RootStackParamList, SCREEN.NEWS>;
export type Props = {
  route: NewsListScreenRouteProp;
};
