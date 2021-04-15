import { ViewStyle } from 'react-native';
import { PARAMS } from '../constants';

export type RootStackParamList = {
  Day: { category: string; period: PARAMS.DAY };
  Home: undefined;
  Month: { category: string; period: PARAMS.MONTH };
  News: { category: string; period: string };
  Settings: undefined;
  Week: { category: string; period: PARAMS.WEEK };
};

export type NavParamsType = { category: string; period: string };

export type NavigationTypes = {
  theme: boolean;
};
