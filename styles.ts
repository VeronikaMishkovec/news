import { Platform, StyleSheet } from 'react-native';
import { CONTAINER_BOTTOM, CONTAINER_PADDING } from './src/components/constants';
import { AppStylesTypes } from './types';

export const styles = StyleSheet.create<AppStylesTypes>({
  container: {
    marginBottom: CONTAINER_BOTTOM,
    marginHorizontal: CONTAINER_PADDING,
    paddingBottom: Platform.OS === 'android' ? 50 : 0,
  },
});
