import { ViewStyle } from 'react-native';

export type HomeStylesType = {
  container: ViewStyle;
};

export type HomeViewTypes = {
  emailed(): void;
  name: string;
  shared(): void;
  viewed(): void;
};
