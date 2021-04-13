import { TextStyle, ViewStyle } from 'react-native';

export type ButtonStylesType = {
  container: ViewStyle;
  text: TextStyle;
};

export type ButtonType = {
  onPress(): void,
  title: string;
}