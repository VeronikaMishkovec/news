import { StyleSheet } from 'react-native';
import { MARGINS } from '../constants';
import { HomeStylesType } from './types';

export const styles = StyleSheet.create<HomeStylesType>({
  container: {
    flex: 1,
    marginHorizontal: MARGINS.BTN_HOR,
  },
});
