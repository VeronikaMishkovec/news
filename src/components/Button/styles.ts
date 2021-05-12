import { StyleSheet } from 'react-native';

import {
  BORDER_RADIUS,
  FONT,
  FONT_SIZE,
  PADDING,
} from '../../constants';
import { ButtonStylesType } from './types';

export const styles = StyleSheet.create<ButtonStylesType>({
  container: {
    alignItems:'center',
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    marginBottom: PADDING,
    padding: PADDING,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
  },
  text: {
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.TEXT,
  },
});
