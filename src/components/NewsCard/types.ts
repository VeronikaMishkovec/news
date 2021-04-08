import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { List } from '../../store/type';

export type NewsCardStylesTypes = {
  container: ViewStyle; //fix
  textContainer: TextStyle;
  title: TextStyle;
  subtitle: TextStyle;
  info: TextStyle;
  text: TextStyle;
  image: ImageStyle;
};

export type NewsCardTypes = {
  title: List['title'];
  subtitle: string;
  published_date: string;
  section: string;
  author: string;
  url: string;

  src?: string;
};
