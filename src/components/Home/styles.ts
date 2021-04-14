import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { MARGINS } from '../../constants';
import { ThemeTypes } from '../../theme/type';
import { HomeStylesType } from './types';

export const styles = StyleSheet.create<HomeStylesType>({
  container: {
    flex: 1,
    marginHorizontal: MARGINS.BTN_HOR,
  },
});
