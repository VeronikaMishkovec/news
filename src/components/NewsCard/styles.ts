import { Platform, StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  COLOR,
  CONTAINER_BOTTOM,
  CONTAINER_PADDING,
  FONT,
  FONT_SIZE,
  PADDING,
} from '../constants';
import { NewsCardStylesTypes } from './types';

export const styles = StyleSheet.create<NewsCardStylesTypes>({
  container: {
    borderRadius: BORDER_RADIUS,
    marginBottom: CONTAINER_BOTTOM,
    backgroundColor: 'rgba(114, 162, 172, 0.1)',
  },
  image: {
    backgroundColor: COLOR.IMAGE,
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
    color: COLOR.BTN,
    fontFamily: FONT.REGULAR,
    marginBottom: PADDING,
  },
  textContainer: {
    paddingHorizontal: PADDING,
    paddingVertical: CONTAINER_PADDING,
  },
  title: {
    backgroundColor: COLOR.TEXT_BG,
    borderStyle: 'solid',
    color: COLOR.LIGHT_TEXT,
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.TITLE,
    paddingHorizontal: PADDING,
    paddingVertical: CONTAINER_PADDING,
  },
});
