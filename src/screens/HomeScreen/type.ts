import { StackNavigationProp } from '@react-navigation/stack';
import { SCREEN } from '../../components/constants';
import { RootStackParamList } from '../../navigation/types';

export type HomeScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  SCREEN.HOME
>;
export type HomeScreenProps = {
  navigation: HomeScreenNavigationType;
};
