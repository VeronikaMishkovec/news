import { StyleSheet } from 'react-native';
import { CONTAINER_PADDING } from '../constants';
import { NewsListStylesTypes } from './types';

export const styles = StyleSheet.create<NewsListStylesTypes>({
  container: {
    flex: 1,
    marginHorizontal: CONTAINER_PADDING,
  },
  spinnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
