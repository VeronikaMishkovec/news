import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { List } from '../../store/type';

export type NewsCardStylesTypes = {
  container: ViewStyle;
  textContainer: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  info: ViewStyle;
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
