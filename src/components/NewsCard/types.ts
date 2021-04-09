import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { ImageSrcType, List } from '../../store/type';

export type NewsCardStylesTypes = {
  container: ViewStyle;
  image: ImageStyle;
  info: ViewStyle;
  subtitle: TextStyle;
  text: TextStyle;
  textContainer: ViewStyle;
  title: TextStyle;
};

export type NewsCardTypes = {
  author: List['byline'];
  date: List['published_date'];
  section: List['section'];
  subtitle: List['abstract'];
  title: List['title'];
  url: List['url'];

  src?: ImageSrcType['url'];
};
