export type RootStackParamList = {
  Home: undefined;
  News: { category: string; period: string };
  Day: { category: string; period: '1' };
  Week: { category: string; period: '7' };
  Month: { category: string; period: '30' };
};

export type NavParamsType = { category: string; period: string };
