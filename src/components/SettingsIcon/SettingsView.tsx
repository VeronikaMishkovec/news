import React, { FC } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';
import { SettingIconViewTypes } from './type';

export const SettingIconView: FC<SettingIconViewTypes> = (props) => {
  const { toSettings } = props;
  return (
    <TouchableOpacity onPress={toSettings} style={styles.settings}>
      <MaterialCommunityIcons name="cog" size={30} />
    </TouchableOpacity>
  );
};
