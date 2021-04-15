import { StyleSheet } from 'react-native';
import { FONT, FONT_SIZE, MARGINS } from '../../constants';
import { SettingsViewStylesType } from './type';

export const styles = StyleSheet.create<SettingsViewStylesType>({
  comment: {
    fontFamily: FONT.REGULAR,
    fontSize: FONT_SIZE.TITLE,
  },
  container: {
    flex: 1,
    marginHorizontal: MARGINS.BTN_HOR,
    marginTop: MARGINS.BTN_VER,
  },
  switchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.SETTINGS_HEADER,
  },
});
