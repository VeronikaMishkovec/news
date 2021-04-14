import { StyleSheet } from 'react-native';
import { MARGINS } from '../constants';
import { NavigationStylesTypes } from './type';

export const styles = StyleSheet.create<NavigationStylesTypes>({
  settings: {
    marginRight: MARGINS.HEADER,
  },
});
