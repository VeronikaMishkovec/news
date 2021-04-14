import { TextStyle, ViewStyle } from 'react-native';

export type HeaderViewTypes = {
  back: boolean;
  title: string;
};

export type HeaderTypes = {
  back: HeaderViewTypes['back'];
  title: HeaderViewTypes['title'];
};

export type HeaderViewStylesTypes = {
  container: ViewStyle;
  title: TextStyle;
};
