import { ViewStyle } from 'react-native';
import { RootType } from '../../store/type';

export type NavigationStylesTypes = {
  settings: ViewStyle;
};

export type SettingIconViewTypes = {
  onPress(): RootType['onPress'];
};
