import { Platform, StyleSheet } from 'react-native';
import { CONTAINER_BOTTOM, CONTAINER_PADDING } from './src/components/constants';
import { AppStylesTypes } from './types';

export const styles = StyleSheet.create<AppStylesTypes>({
  container: {
    flex: 1,
    marginHorizontal: CONTAINER_PADDING,
  },
});
