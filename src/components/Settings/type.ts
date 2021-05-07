import { TextStyle, ViewStyle } from 'react-native';

export type SettingsViewStylesType = {
  comment: TextStyle;
  container: ViewStyle;
  editNameContainer: TextStyle;
  input: TextStyle;
  switchContainer: ViewStyle;
  title: TextStyle;
  userNameContainer: ViewStyle;
};

export type SettingsViewType = {
  theme: boolean;
  toggleSwitch: (val: boolean) => void;
  userName: string;
};
