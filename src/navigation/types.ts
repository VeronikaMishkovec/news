import { PARAMS } from '../components/constants';

export type RootStackParamList = {
  Home: undefined;
  News: { category: string; period: string };
  Day: { category: string; period: PARAMS.DAY };
  Week: { category: string; period: PARAMS.WEEK };
  Month: { category: string; period: PARAMS.MONTH };
};

export type NavParamsType = { category: string; period: string };
