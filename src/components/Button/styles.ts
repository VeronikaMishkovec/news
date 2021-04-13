import { StyleSheet } from 'react-native';

import { BORDER_RADIUS, COLOR, CONTAINER_PADDING, FONT, FONT_SIZE, MARGINS } from '../constants';
import { ButtonStylesType } from './types';

export const styles = StyleSheet.create<ButtonStylesType>({
  container: {
    backgroundColor: COLOR.BUTTON,
    borderRadius: BORDER_RADIUS,
    marginTop: MARGINS.BTN_HOR,
    padding: CONTAINER_PADDING,
  },
  text: {
    color: COLOR.LIGHT_TEXT,
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.TEXT
  }
});
