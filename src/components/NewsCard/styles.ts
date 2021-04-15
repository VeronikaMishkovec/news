import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  COLOR,
  CONTAINER_BOTTOM,
  CONTAINER_PADDING,
  FONT,
  FONT_SIZE,
  PADDING,
} from '../../constants';
import { NewsCardStylesTypes } from './types';

export const styles = StyleSheet.create<NewsCardStylesTypes>({
  container: {
    borderRadius: BORDER_RADIUS,
    marginBottom: CONTAINER_BOTTOM,
  },
  image: {
    backgroundColor: COLOR.IMAGE,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    flex: 1,
    height: 250,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  info: {
    flexDirection: 'row',
    fontSize: FONT_SIZE.OPTION_INFO,
    justifyContent: 'space-between',
  },
  subtitle: {
    fontFamily: FONT.REGULAR,
    fontSize: FONT_SIZE.TEXT,
    marginBottom: PADDING,
  },
  text: {
    fontFamily: FONT.REGULAR,
    marginBottom: PADDING,
  },
  textContainer: {
    paddingHorizontal: PADDING,
    paddingVertical: CONTAINER_PADDING,
  },
  title: {
    backgroundColor: COLOR.TEXT_BG,
    color: COLOR.DARK_TEXT,
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.TITLE,
    paddingHorizontal: PADDING,
    paddingVertical: CONTAINER_PADDING,
  },
});
