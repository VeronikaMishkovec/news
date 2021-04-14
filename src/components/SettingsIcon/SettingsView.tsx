import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeTypes } from '../../theme/type';
import { styles } from './style';
import { SettingIconViewTypes } from './type';

export const SettingIconView: FC<SettingIconViewTypes> = (props) => {
  const { toSettings } = props;
  
  const { colors }: ThemeTypes = useTheme();

  return (
    <TouchableOpacity onPress={toSettings} style={styles.settings}>
      <MaterialCommunityIcons name="cog" size={30} color={colors.text} />
    </TouchableOpacity>
  );
};
