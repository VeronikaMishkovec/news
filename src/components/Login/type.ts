import { TextStyle, ViewStyle } from 'react-native';

export type LoginViewStylesType = {
  button: ViewStyle;
  buttonText: TextStyle;
  container: ViewStyle;
  header: TextStyle;
  input: TextStyle;
  inputHeader: TextStyle;
  inputsWrapper: ViewStyle;
};

export type LoginViewType = {
  onChangeText(e: string): void;
  onPress(): void;
};
