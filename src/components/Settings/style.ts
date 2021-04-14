import { StyleSheet } from 'react-native';
import { FONT, FONT_SIZE, MARGINS } from '../../constants';
import { SettingsViewType } from './type';

export const styles = StyleSheet.create<SettingsViewType>({
  container: {
    flex: 1,
    marginHorizontal: MARGINS.BTN_HOR,
    marginTop: MARGINS.BTN_VER
  },
  title: {
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.HEADER
  }
});
