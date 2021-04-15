import { TextStyle, ViewStyle } from 'react-native';

export type SettingsViewStylesType = {
  comment: TextStyle;
  container: ViewStyle;
  switchContainer: ViewStyle;
  title: TextStyle;
};

export type SettingsViewType = {
  theme: boolean;
  toggleSwitch(): void;
};
