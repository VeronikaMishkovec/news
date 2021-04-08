import { TextStyle, ViewStyle } from 'react-native';

export type LinkStylesTypes = {
  button: ViewStyle;
  buttonText: TextStyle;
};

export type LinkTypes = {
  url: string;
};

export type LinkViewTypes = {
  children: React.ReactNode;
  handlePress(): void;
};
