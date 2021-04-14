import { TextStyle, ViewStyle } from 'react-native';

export type HeaderViewTypes = {
  title: string;
};

export type HeaderTypes = {
  title: HeaderViewTypes['title'];
};

export type HeaderViewStylesTypes = {
  container: ViewStyle;
  title: TextStyle;
};
