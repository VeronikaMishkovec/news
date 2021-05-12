import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, FONT, FONT_SIZE, MARGINS, PADDING } from '../../constants';
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
  editNameContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    flexGrow: 1,
    fontSize: FONT_SIZE.TEXT,
    marginBottom:PADDING,
    marginRight: PADDING,
    padding: PADDING,
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
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
