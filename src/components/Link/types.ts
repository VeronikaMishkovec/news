import { TextStyle, ViewStyle } from 'react-native';
import { List } from '../../store/type';

export type LinkStylesTypes = {
  button: ViewStyle;
  buttonText: TextStyle;
};

export type LinkTypes = {
  url: List['url'];
};

export type LinkViewTypes = {
  children: React.ReactNode;
  handlePress(): void;
};
