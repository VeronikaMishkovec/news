import { StyleSheet } from 'react-native';
import { FONT, FONT_SIZE } from '../../constants';
import { HeaderViewStylesTypes } from './types';

export const styles = StyleSheet.create<HeaderViewStylesTypes>({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: FONT.BLACK,
    fontSize: FONT_SIZE.HEADER,
  },
});
